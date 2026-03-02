
const fs = require('fs');

try {
  const data = fs.readFileSync('c:\\Users\\User\\Desktop\\cdfmonitor\\zm.json', 'utf8');
  const json = JSON.parse(data);

  // Extract coordinates from GeoJSON
  let coordinates = [];
  if (json.type === 'FeatureCollection') {
    coordinates = json.features[0].geometry.coordinates;
  } else if (json.type === 'Feature') {
    coordinates = json.geometry.coordinates;
  } else {
    // raw geometry
    coordinates = json.coordinates;
  }

  // Determine if Polygon or MultiPolygon
  // GeoJSON Polygon: [ [ [x,y], [x,y] ... ] ] (array of rings)
  // GeoJSON MultiPolygon: [ [ [ [x,y] ... ] ], ... ]
  
  // Since we saw "Polygon" in the file read earlier, let's handle that.
  // But just in case, let's flatten it to rings.
  
  let rings = [];
  // Simple check based on nesting depth
  // Polygon[0][0] is a number (x) -> depth 2? No.
  // Polygon: [ [x,y], [x,y] ] -> depth 2 array of points.
  // Wait, GeoJSON Polygon is an array of linear rings. The first is the exterior.
  // So geometry.coordinates is `[ [ [x,y], ... ] ]`.
  
  // Let's assume it's a single Polygon for Zambia.
  // coordinates[0] is the outer ring.
  
  let ring = coordinates[0];
  
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  let pathD = '';

  // First pass: find bounds
  ring.forEach(pt => {
      let x = pt[0];
      let y = -pt[1]; // Flip Y because latitude is negative and SVG Y goes down
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
  });

  // Calculate viewBox
  const width = maxX - minX;
  const height = maxY - minY;
  const padding = Math.max(width, height) * 0.05; // 5% padding
  
  const vbMinX = minX - padding;
  const vbMinY = minY - padding;
  const vbWidth = width + 2 * padding;
  const vbHeight = height + 2 * padding;

  const viewBox = `${vbMinX.toFixed(4)} ${vbMinY.toFixed(4)} ${vbWidth.toFixed(4)} ${vbHeight.toFixed(4)}`;

  // Second pass: generate path
  pathD += `M ${ring[0][0].toFixed(4)},${(-ring[0][1]).toFixed(4)} `;
  for (let i = 1; i < ring.length; i++) {
      pathD += `L ${ring[i][0].toFixed(4)},${(-ring[i][1]).toFixed(4)} `;
  }
  pathD += 'Z';

  // Write to src/components/ZambiaPath.ts directly to avoid shell encoding issues
  const tsContent = `export const zambiaPath = "${pathD}";
export const zambiaViewBox = "${viewBox}";
`;
  fs.writeFileSync('src/components/ZambiaPath.ts', tsContent);
  console.log('Created src/components/ZambiaPath.ts');

} catch (err) {
  console.error(err);
}
