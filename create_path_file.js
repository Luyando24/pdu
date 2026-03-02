
const fs = require('fs');

try {
  const data = fs.readFileSync('map_data.txt', 'utf8');
  const lines = data.split('\n');
  
  let viewBox = '';
  let path = '';
  let readingPath = false;

  for (const line of lines) {
    if (line.startsWith('VIEWBOX:')) {
      viewBox = line.substring('VIEWBOX:'.length).trim();
    } else if (line.startsWith('PATH:')) {
      readingPath = true;
    } else if (readingPath) {
      path += line.trim();
    }
  }

  const fileContent = `export const zambiaPath = "${path}";
export const zambiaViewBox = "${viewBox}";
`;

  fs.writeFileSync('src/components/ZambiaPath.ts', fileContent);
  console.log('Created src/components/ZambiaPath.ts');

} catch (err) {
  console.error(err);
}
