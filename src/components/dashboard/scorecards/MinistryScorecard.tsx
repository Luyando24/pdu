import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import styles from "./MinistryScorecard.module.css";

const MOCK_DATA = [
    { id: 1, name: "Ministry of Health", budget: "1.2B", target: 85, actual: 88, projects: 142, trend: "up" },
    { id: 2, name: "Ministry of Infrastructure", budget: "3.4B", target: 70, actual: 68, projects: 54, trend: "down" },
    { id: 3, name: "Ministry of Education", budget: "850M", target: 90, actual: 89, projects: 210, trend: "flat" },
    { id: 4, name: "Ministry of Water Dev", budget: "420M", target: 60, actual: 45, projects: 38, trend: "down" },
    { id: 5, name: "Ministry of Energy", budget: "2.1B", target: 50, actual: 55, projects: 12, trend: "up" }
];

export default function MinistryScorecard() {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Ministry / Agency</th>
                        <th>Active Portfolio</th>
                        <th className={styles.centerAlign}>Disbursement vs Target</th>
                        <th>Completion Status</th>
                        <th className={styles.centerAlign}>Trend</th>
                    </tr>
                </thead>
                <tbody>
                    {MOCK_DATA.sort((a, b) => b.actual - a.actual).map((ministry) => {
                        const isBehind = ministry.actual < ministry.target;
                        const variance = Math.abs(ministry.actual - ministry.target);

                        return (
                            <tr key={ministry.id} className={styles.row}>
                                <td>
                                    <div className={styles.nameWrap}>
                                        <span className={styles.name}>{ministry.name}</span>
                                        <span className={styles.budget}>ZMW {ministry.budget} Allocation</span>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.projectsNum}>{ministry.projects}</div>
                                    <div className={styles.subText}>Active Projects</div>
                                </td>
                                <td className={styles.barCell}>
                                    <div className={styles.barWrap}>
                                        <div className={styles.barLabels}>
                                            <span>Actual: <strong>{ministry.actual}%</strong></span>
                                            <span className={styles.targetLabel}>Target: {ministry.target}%</span>
                                        </div>
                                        <div className={styles.bulletChart}>
                                            {/* Background track */}
                                            <div className={styles.track}></div>
                                            {/* The target marker line */}
                                            <div className={styles.targetMarker} style={{ left: `${ministry.target}%` }}></div>
                                            {/* The actual fill bar */}
                                            <div
                                                className={`${styles.fill} ${isBehind ? (variance > 10 ? styles.critical : styles.warning) : styles.good}`}
                                                style={{ width: `${ministry.actual}%` }}
                                            ></div>
                                        </div>
                                        <div className={styles.subText}>
                                            {isBehind ? `Underperforming by ${variance}%` : `Exceeding target by ${variance}%`}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {/* Simplified status for demo */}
                                    <span className={`${styles.statusBadge} ${isBehind && variance > 10 ? styles.bgRed : isBehind ? styles.bgYellow : styles.bgGreen}`}>
                                        {isBehind && variance > 10 ? 'Needs Intervention' : isBehind ? 'Watchlist' : 'Performing'}
                                    </span>
                                </td>
                                <td className={styles.centerAlign}>
                                    {ministry.trend === "up" && <TrendingUp className={styles.trendUp} size={18} />}
                                    {ministry.trend === "down" && <TrendingDown className={styles.trendDown} size={18} />}
                                    {ministry.trend === "flat" && <Minus className={styles.trendFlat} size={18} />}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
