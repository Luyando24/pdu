import styles from "./NationalStatsBar.module.css";

const stats = [
    { num: "2,847", label: "Total Projects Nationwide", icon: "🏗️", color: "#3B82F6" },
    { num: "1,204", label: "Projects Completed", icon: "✅", color: "#1DB954" },
    { num: "956", label: "Projects In Progress", icon: "🔄", color: "#F5A623" },
    { num: "687", label: "Projects Not Started", icon: "⏳", color: "#94A3B8" },
    { num: "156", label: "Constituencies Tracked", icon: "📍", color: "#8B5CF6" },
    { num: "42.3%", label: "National Completion Rate", icon: "📊", color: "#EC4899" },
];

export default function NationalStatsBar() {
    return (
        <div className={styles.bar}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.heading}>
                        <span className={styles.dot} />
                        <span>National Delivery Status</span>
                        <span className={styles.date}>Last updated: {new Date().toLocaleDateString("en-ZM", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div className={styles.grid}>
                        {stats.map((s) => (
                            <div className={styles.stat} key={s.label} style={{ "--c": s.color } as React.CSSProperties}>
                                <div className={styles.statIcon}>{s.icon}</div>
                                <div>
                                    <div className={styles.num}>{s.num}</div>
                                    <div className={styles.label}>{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
