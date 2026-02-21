import { Activity, LayoutGrid, CheckCircle2, AlertTriangle } from "lucide-react";
import styles from "./ProvincialScorecard.module.css";

const MOCK_PROVINCES = [
    { id: "lusaka", name: "Lusaka", rank: 1, rate: 92, active: 124, bottlenecks: 2, trend: "+4%" },
    { id: "copperbelt", name: "Copperbelt", rank: 2, rate: 88, active: 88, bottlenecks: 4, trend: "+2%" },
    { id: "southern", name: "Southern", rank: 3, rate: 85, active: 71, bottlenecks: 5, trend: "-1%" },
    { id: "eastern", name: "Eastern", rank: 4, rate: 76, active: 47, bottlenecks: 8, trend: "+5%" },
    { id: "northern", name: "Northern", rank: 5, rate: 72, active: 42, bottlenecks: 6, trend: "0%" },
    { id: "muchinga", name: "Muchinga", rank: 6, rate: 68, active: 31, bottlenecks: 9, trend: "-3%" },
    { id: "central", name: "Central", rank: 7, rate: 61, active: 62, bottlenecks: 14, trend: "-2%" },
    { id: "north-western", name: "North-Western", rank: 8, rate: 58, active: 56, bottlenecks: 15, trend: "+1%" },
    { id: "luapula", name: "Luapula", rank: 9, rate: 45, active: 18, bottlenecks: 11, trend: "-5%" },
    { id: "western", name: "Western", rank: 10, rate: 38, active: 34, bottlenecks: 21, trend: "-8%" }
];

export default function ProvincialScorecard() {
    return (
        <div className={styles.container}>
            {MOCK_PROVINCES.map((prov) => (
                <div key={prov.id} className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.rankBadge}>#{prov.rank}</div>
                        <h3 className={styles.name}>{prov.name} Province</h3>
                    </div>

                    <div className={styles.mainStat}>
                        <div className={styles.circleGraph}>
                            <svg viewBox="0 0 36 36" className={styles.circularChart}>
                                <path className={styles.circleBg}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={`${styles.circlePath} ${prov.rate >= 75 ? styles.good : prov.rate >= 50 ? styles.warn : styles.crit}`}
                                    strokeDasharray={`${prov.rate}, 100`}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" className={styles.percentage}>{prov.rate}%</text>
                            </svg>
                        </div>
                        <div className={styles.statLabel}>Completion Rate</div>
                    </div>

                    <div className={styles.metricsGrid}>
                        <div className={styles.metricItem}>
                            <LayoutGrid size={14} className={styles.iconMuted} />
                            <div className={styles.metricData}>
                                <span className={styles.mValue}>{prov.active}</span>
                                <span className={styles.mLabel}>Active</span>
                            </div>
                        </div>

                        <div className={styles.metricItem}>
                            <AlertTriangle size={14} className={prov.bottlenecks > 10 ? styles.iconRed : styles.iconMuted} />
                            <div className={styles.metricData}>
                                <span className={styles.mValue}>{prov.bottlenecks}</span>
                                <span className={styles.mLabel}>Blocked</span>
                            </div>
                        </div>

                        <div className={styles.metricItem}>
                            <Activity size={14} className={prov.trend.startsWith('+') ? styles.iconGreen : styles.iconRed} />
                            <div className={styles.metricData}>
                                <span className={`${styles.mValue} ${prov.trend.startsWith('+') ? styles.textGreen : styles.textRed}`}>{prov.trend}</span>
                                <span className={styles.mLabel}>Trend</span>
                            </div>
                        </div>
                    </div>

                    <button className={styles.drillBtn}>View Provincial Detail</button>
                </div>
            ))}
        </div>
    );
}
