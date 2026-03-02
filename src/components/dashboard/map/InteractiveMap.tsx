"use client";

import { useState } from "react";
import styles from "./InteractiveMap.module.css";
import { Copy, PlusSquare, BarChart } from "lucide-react";
import { zambiaViewBox, zambiaProvinces } from "../../ZambiaPath";

interface InteractiveMapProps {
    selectedRegion: string | null;
    onRegionSelect: (region: string | null) => void;
}

// Data source for status and projects
const REGION_DATA: Record<string, { status: string; projects: number }> = {
    "Northern": { status: "on-track", projects: 42 },
    "Luapula": { status: "at-risk", projects: 18 },
    "Muchinga": { status: "on-track", projects: 31 },
    "North-Western": { status: "delayed", projects: 56 },
    "Copperbelt": { status: "on-track", projects: 88 },
    "Eastern": { status: "on-track", projects: 47 },
    "Central": { status: "at-risk", projects: 62 },
    "Lusaka": { status: "on-track", projects: 124 },
    "Western": { status: "delayed", projects: 34 },
    "Southern": { status: "on-track", projects: 71 },
};

export default function InteractiveMap({ selectedRegion, onRegionSelect }: InteractiveMapProps) {
    const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

    return (
        <div className={styles.mapContainer}>
            <svg
                viewBox={zambiaViewBox}
                className={styles.svgMap}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(29, 185, 84, 0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    <filter id="hoverGlow">
                        <feGaussianBlur stdDeviation="0.2" result="coloredBlur" />
                        <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {/* Plotting Provinces as interactive paths */}
                {zambiaProvinces.map((prov) => {
                    const data = REGION_DATA[prov.name] || { status: "neutral", projects: 0 };
                    // Handle "Province" suffix matching if needed, but names seem to match keys
                    // Check if selected or hovered
                    // The prop selectedRegion might include " Province" or not. 
                    // The onRegionSelect usually expects just the name or null.
                    // The original code did: region.name.replace(" Province", "")
                    
                    const isSelected = selectedRegion === prov.name || selectedRegion === `${prov.name} Province`;
                    const isHovered = hoveredRegion === prov.name;
                    
                    return (
                        <g
                            key={prov.id}
                            className={`${styles.provinceGroup} ${isSelected ? styles.selected : ""} ${styles[data.status]}`}
                            onMouseEnter={() => setHoveredRegion(prov.name)}
                            onMouseLeave={() => setHoveredRegion(null)}
                            onClick={() => onRegionSelect(isSelected ? null : prov.name)}
                        >
                            <path
                                d={prov.d}
                                strokeWidth="0.05"
                                className={styles.provincePath}
                            />
                            
                            {/* Optional: Add a label at the center if we can calculate it, 
                                but for now rely on tooltip/hover state */}
                        </g>
                    );
                })}
            </svg>

            {/* Tooltip Card (Positioned absolutely over the map - simplistic approach) */}
            {hoveredRegion && !selectedRegion && REGION_DATA[hoveredRegion] && (
                <div className={styles.tooltip}>
                    <div>
                        <h4>{hoveredRegion} Province</h4>
                        <div className={styles.ttStats}>
                            <span>{REGION_DATA[hoveredRegion].projects} Active Projects</span>
                            <span className={`${styles.ttBadge} ${styles[REGION_DATA[hoveredRegion].status]}`}>
                                {REGION_DATA[hoveredRegion].status.replace("-", " ")}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
