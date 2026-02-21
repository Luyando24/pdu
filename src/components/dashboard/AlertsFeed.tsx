import { AlertTriangle, Clock } from "lucide-react";
import styles from "./AlertsFeed.module.css";

const alerts = [
    {
        id: 1,
        project: "Choma–Namwala Water Pipeline",
        issue: "Contractor dispute causing 3-week delay",
        time: "2 hours ago",
        level: "critical", // red
    },
    {
        id: 2,
        project: "Mwinilunga District Hospital",
        issue: "Material shortage (cement) halting foundation work",
        time: "5 hours ago",
        level: "high", // orange
    },
    {
        id: 3,
        project: "Kafue Gorge Lower Expansion",
        issue: "Pending environmental clearance for Phase 3",
        time: "1 day ago",
        level: "high",
    },
    {
        id: 4,
        project: "Chipata Agriculture Scheme",
        issue: "Distribution logistics behind schedule by 5 days",
        time: "2 days ago",
        level: "medium", // yellow/gold
    },
];

export default function AlertsFeed() {
    return (
        <div className={styles.widget}>
            <div className={styles.header}>
                <h3 className={styles.title}>Action Required</h3>
                <span className={styles.badge}>4 At Risk</span>
            </div>

            <div className={styles.feed}>
                {alerts.map((alert) => (
                    <div key={alert.id} className={`${styles.item} ${styles[alert.level]}`}>
                        <div className={styles.iconWrap}>
                            <AlertTriangle size={16} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.project}>{alert.project}</div>
                            <div className={styles.issue}>{alert.issue}</div>
                            <div className={styles.meta}>
                                <Clock size={12} />
                                <span>{alert.time}</span>
                            </div>
                        </div>
                        <button className={styles.actionBtn}>View Details</button>
                    </div>
                ))}
            </div>

            <button className={styles.viewAll}>View All Alerts</button>
        </div>
    );
}
