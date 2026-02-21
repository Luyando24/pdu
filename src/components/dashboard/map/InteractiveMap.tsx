import { useState } from "react";
import styles from "./InteractiveMap.module.css";
import { Copy, PlusSquare, BarChart } from "lucide-react";

interface InteractiveMapProps {
    selectedRegion: string | null;
    onRegionSelect: (region: string | null) => void;
}

// Map coordinates and dummy data roughly structured around Zambia's provinces
const MAP_REGIONS = [
    { id: "Northern", name: "Northern Province", x: 60, y: 25, status: "on-track", projects: 42 },
    { id: "Luapula", name: "Luapula Province", x: 45, y: 35, status: "at-risk", projects: 18 },
    { id: "Muchinga", name: "Muchinga Province", x: 75, y: 35, status: "on-track", projects: 31 },
    { id: "North-Western", name: "North-Western Province", x: 25, y: 48, status: "delayed", projects: 56 },
    { id: "Copperbelt", name: "Copperbelt Province", x: 50, y: 45, status: "on-track", projects: 88 },
    { id: "Eastern", name: "Eastern Province", x: 80, y: 55, status: "on-track", projects: 47 },
    { id: "Central", name: "Central Province", x: 55, y: 60, status: "at-risk", projects: 62 },
    { id: "Lusaka", name: "Lusaka Province", x: 65, y: 75, status: "on-track", projects: 124 },
    { id: "Western", name: "Western Province", x: 25, y: 70, status: "delayed", projects: 34 },
    { id: "Southern", name: "Southern Province", x: 45, y: 85, status: "on-track", projects: 71 },
];

export default function InteractiveMap({ selectedRegion, onRegionSelect }: InteractiveMapProps) {
    const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

    return (
        <div className={styles.mapContainer}>
            <svg
                viewBox="0 0 100 100"
                className={styles.svgMap}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(29, 185, 84, 0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>

                {/* Abstract Zambia Shape */}
                <polygon
                    points="26,16 40,12 52,11 62,13 72,11 82,18 86,26 84,34 80,40 78,46 82,52 80,60 76,66 70,72 62,78 56,82 48,84 40,82 32,80 26,76 22,68 18,60 16,52 18,44 16,36 20,28"
                    fill="url(#mapGlow)"
                    stroke="var(--border)"
                    strokeWidth="0.5"
                    className={styles.countryOutline}
                />

                {/* Plotting Provinces as interactive nodes */}
                {MAP_REGIONS.map((region) => {
                    const isSelected = selectedRegion === region.id || selectedRegion === region.name.replace(" Province", "");
                    const isHovered = hoveredRegion === region.id;

                    return (
                        <g
                            key={region.id}
                            className={`${styles.nodeGroup} ${isSelected ? styles.selected : ""} ${styles[region.status]}`}
                            transform={`translate(${region.x}, ${region.y})`}
                            onMouseEnter={() => setHoveredRegion(region.id)}
                            onMouseLeave={() => setHoveredRegion(null)}
                            onClick={() => onRegionSelect(isSelected ? null : region.name.replace(" Province", ""))}
                        >
                            {/* Pulse effect for selected or at-risk */}
                            {(isSelected || region.status === 'at-risk' || region.status === 'delayed') && (
                                <circle r="4" className={styles.pulse} />
                            )}

                            <circle r={isSelected ? "3.5" : "2.5"} className={styles.nodeCore} />

                            {/* Only show text if hovered or selected for cleaner map */}
                            {(isHovered || isSelected) && (
                                <text
                                    y={isSelected ? "-6" : "-5"}
                                    className={styles.nodeLabel}
                                    textAnchor="middle"
                                >
                                    {region.name}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Tooltip Card (Positioned absolutely over the map) */}
            {hoveredRegion && !selectedRegion && (
                <div className={styles.tooltip}>
                    {MAP_REGIONS.filter(r => r.id === hoveredRegion).map(r => (
                        <div key={r.id}>
                            <h4>{r.name}</h4>
                            <div className={styles.ttStats}>
                                <span>{r.projects} Active Projects</span>
                                <span className={`${styles.ttBadge} ${styles[r.status]}`}>
                                    {r.status.replace("-", " ")}
                                </span>
                            </div>
                            <p className={styles.ttHint}>Click to filter sidebar</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Selected Region Action Panel */}
            {selectedRegion && (
                <div className={styles.actionPanel}>
                    <h3>{selectedRegion} Overview</h3>
                    <div className={styles.actionGrid}>
                        <button className={styles.actionBtn}>
                            <BarChart size={16} /> Regional Scorecard
                        </button>
                        <button className={styles.actionBtn}>
                            <Copy size={16} /> Export Data
                        </button>
                        <button className={styles.actionBtn}>
                            <PlusSquare size={16} /> Add Project
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
