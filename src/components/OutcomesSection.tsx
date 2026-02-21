import styles from "./OutcomesSection.module.css";

const outcomes = [
    {
        icon: "🔴",
        title: "Real-Time National Monitoring",
        desc: "PDU has live visibility into all development projects across Zambia at any moment.",
    },
    {
        icon: "⚡",
        title: "Faster Decision-Making",
        desc: "Leaders act on current data — not last month's report — enabling rapid interventions.",
    },
    {
        icon: "🛡️",
        title: "Reduced Project Delays",
        desc: "Early warning systems catch at-risk projects before they stall permanently.",
    },
    {
        icon: "⚖️",
        title: "Increased Accountability",
        desc: "Verified evidence uploads and GPS tagging eliminate ghost projects and false reporting.",
    },
    {
        icon: "📊",
        title: "Data-Driven Governance",
        desc: "Performance scorecards and KPI tracking create objective, measurable public service.",
    },
    {
        icon: "🌍",
        title: "Transparent Development",
        desc: "Citizens can see progress on projects in their constituency — building public trust.",
    },
];

export default function OutcomesSection() {
    return (
        <section className={styles.section} id="outcomes">
            <div className="container">
                <div className={styles.header}>
                    <div className="section-label">Expected Outcomes</div>
                    <h2 className="section-title">
                        What ZNDMP <br />
                        <span className="gradient-text">Delivers for Zambia</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {outcomes.map((o, i) => (
                        <div className={styles.card} key={i}>
                            <div className={styles.check}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M3 9l4.5 4.5L15 5" stroke="#1DB954" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className={styles.title}>{o.icon} {o.title}</h3>
                                <p className={styles.desc}>{o.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Strategic statement */}
                <div className={styles.statement}>
                    <div className={styles.quoteIcon}>"</div>
                    <p className={styles.quote}>
                        ZNDMP becomes the <strong>operating system of government delivery</strong> — transforming
                        Zambia toward digital governance, performance-based public service,
                        and evidence-driven leadership.
                    </p>
                    <div className={styles.quoteSource}>
                        <span>Presidential Delivery Unit</span>
                        <span>Republic of Zambia</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
