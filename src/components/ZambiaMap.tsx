"use client";
import styles from "./ZambiaMap.module.css";

// Simplified Zambia SVG shape with constituency dots
const PROVINCE_DOTS = [
    // [x%, y%, status, label]
    { x: 48, y: 30, status: "on-track", label: "Northern" },
    { x: 35, y: 38, status: "at-risk", label: "Luapula" },
    { x: 62, y: 38, status: "on-track", label: "Muchinga" },
    { x: 28, y: 52, status: "delayed", label: "N. Western" },
    { x: 48, y: 48, status: "on-track", label: "Copperbelt" },
    { x: 62, y: 52, status: "on-track", label: "Eastern" },
    { x: 38, y: 62, status: "at-risk", label: "Central" },
    { x: 55, y: 65, status: "on-track", label: "Lusaka" },
    { x: 30, y: 72, status: "delayed", label: "Western" },
    { x: 50, y: 78, status: "on-track", label: "Southern" },
];

const STATUS_COLORS: Record<string, string> = {
    "on-track": "#1DB954",
    "at-risk": "#F5A623",
    "delayed": "#E5484D",
};

export default function ZambiaMap() {
    return (
        <div className={styles.wrap}>
            {/* Outer glow ring */}
            <div className={styles.outerRing} />

            <svg
                viewBox="0 0 500 500"
                className={styles.svg}
                aria-label="Interactive map of Zambia showing project delivery status per province"
            >
                <defs>
                    <radialGradient id="mapGrad" cx="50%" cy="50%" r="60%" fx="50%" fy="40%">
                        <stop offset="0%" stopColor="#162035" />
                        <stop offset="100%" stopColor="#0A0E1A" />
                    </radialGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {/* Zambia shape — simplified polygon */}
                <polygon
                    points="130,80 200,60 260,55 310,65 360,55 410,90 430,130 420,170 400,200 390,230 410,260 400,300 380,330 350,360 310,390 280,410 240,420 200,410 160,400 130,380 110,340 90,300 80,260 90,220 80,180 100,140"
                    fill="url(#mapGrad)"
                    stroke="#1DB954"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    className={styles.zambiaShape}
                />

                {/* Grid lines inside map */}
                {[0, 1, 2, 3, 4].map(i => (
                    <line
                        key={`h${i}`}
                        x1="80" y1={140 + i * 56} x2="430" y2={140 + i * 56}
                        stroke="rgba(255,255,255,0.04)" strokeWidth="1"
                    />
                ))}
                {[0, 1, 2, 3, 4, 5].map(i => (
                    <line
                        key={`v${i}`}
                        x1={80 + i * 70} y1="60" x2={80 + i * 70} y2="420"
                        stroke="rgba(255,255,255,0.04)" strokeWidth="1"
                    />
                ))}

                {/* Province dots */}
                {PROVINCE_DOTS.map((dot, i) => {
                    const cx = (dot.x / 100) * 500;
                    const cy = (dot.y / 100) * 500;
                    const color = STATUS_COLORS[dot.status];
                    return (
                        <g key={i} className={styles.dotGroup}>
                            {/* Outer pulse ring */}
                            <circle cx={cx} cy={cy} r="14" fill={color} opacity="0.12" className={styles.pulse} />
                            <circle cx={cx} cy={cy} r="8" fill={color} opacity="0.25" />
                            {/* Core dot */}
                            <circle cx={cx} cy={cy} r="5" fill={color} filter="url(#glow)" className={styles.dot} />
                            {/* Label */}
                            <text
                                x={cx}
                                y={cy + 22}
                                textAnchor="middle"
                                fontSize="9"
                                fill="rgba(255,255,255,0.55)"
                                fontFamily="Inter, sans-serif"
                                fontWeight="500"
                            >
                                {dot.label}
                            </text>
                        </g>
                    );
                })}

                {/* Center label */}
                <text x="250" y="240" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.2)"
                    fontFamily="Outfit, sans-serif" fontWeight="700" letterSpacing="3">
                    ZAMBIA
                </text>
            </svg>

            {/* Legend */}
            <div className={styles.legend}>
                {Object.entries({ "On Track": "on-track", "At Risk": "at-risk", "Delayed": "delayed" }).map(([label, key]) => (
                    <div key={key} className={styles.legendItem}>
                        <span className={styles.legendDot} style={{ background: STATUS_COLORS[key] }} />
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
