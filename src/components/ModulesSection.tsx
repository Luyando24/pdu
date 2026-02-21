import styles from "./ModulesSection.module.css";

const modules = [
    {
        num: "01",
        title: "Constituency Reporting",
        desc: "Each of 156 constituencies has a verified account to submit GPS-tagged updates, photos, milestones, and expenditure data.",
        color: "#1DB954",
        icon: "🏘️",
    },
    {
        num: "02",
        title: "National Project Monitoring",
        desc: "Track all government projects — schools, roads, clinics, water systems — with ministry ownership, budgets, timelines, and live status.",
        color: "#3B82F6",
        icon: "📊",
    },
    {
        num: "03",
        title: "Geographic Intelligence Map",
        desc: "Interactive Zambia map with green/yellow/red delivery heat-maps showing underperforming regions and project density per constituency.",
        color: "#F5A623",
        icon: "🗺️",
    },
    {
        num: "04",
        title: "Milestone & KPI Engine",
        desc: "Projects are broken into measurable milestones. The system auto-calculates completion %, time variance, and budget variance.",
        color: "#8B5CF6",
        icon: "📈",
    },
    {
        num: "05",
        title: "Evidence-Based Reporting",
        desc: "Every update requires photo uploads, timestamps, and GPS verification to eliminate ghost projects and duplicate submissions.",
        color: "#EC4899",
        icon: "📸",
    },
    {
        num: "06",
        title: "Risk & Early Warning",
        desc: "Automatic flagging of missed milestones, budget overruns, and long inactivity. PDU receives alerts before projects fail.",
        color: "#E5484D",
        icon: "⚠️",
    },
    {
        num: "07",
        title: "Performance Scorecards",
        desc: "Objective scorecards for constituencies, ministries, contractors, and provinces — measuring delivery speed, consistency, and budget adherence.",
        color: "#06B6D4",
        icon: "🏆",
    },
    {
        num: "08",
        title: "PDU Action Tool",
        desc: "PDU officers can assign follow-up actions, request clarification, escalate to ministries, and set deadlines — turning monitoring into intervention.",
        color: "#F59E0B",
        icon: "🎯",
    },
    {
        num: "09",
        title: "Executive Dashboard",
        desc: "High-level national insights for the Presidency: delivery rate, top provinces, critical delays, budget utilization — designed for fast decisions.",
        color: "#1DB954",
        icon: "👁️",
    },
];

export default function ModulesSection() {
    return (
        <section className={styles.section} id="modules">
            <div className="container">
                <div className={styles.header}>
                    <div className="section-label">Platform Modules</div>
                    <h2 className="section-title">
                        Nine Modules. One Unified <br />
                        <span className="gradient-text">Delivery System.</span>
                    </h2>
                    <p className="section-subtitle">
                        ZNDMP is architected as a suite of interconnected modules — each
                        solving a specific national delivery challenge, all connected to a
                        single source of truth.
                    </p>
                </div>

                <div className={styles.grid}>
                    {modules.map((mod, i) => (
                        <div className={styles.card} key={i} style={{ "--accent": mod.color } as React.CSSProperties}>
                            <div className={styles.cardTop}>
                                <span className={styles.num}>{mod.num}</span>
                                <span className={styles.mIcon}>{mod.icon}</span>
                            </div>
                            <h3 className={styles.title}>{mod.title}</h3>
                            <p className={styles.desc}>{mod.desc}</p>
                            <div className={styles.accent} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
