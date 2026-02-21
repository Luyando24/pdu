import styles from "./ProblemSection.module.css";

const challenges = [
    {
        icon: "📋",
        title: "Manual Reporting",
        desc: "Districts submit progress via paper forms and spreadsheets, causing weeks-long delays in data reaching the PDU.",
    },
    {
        icon: "⏳",
        title: "Delayed Updates",
        desc: "Implementation teams take days or weeks to submit updates, leaving decision-makers blind to real-time progress.",
    },
    {
        icon: "🗺️",
        title: "No Geographic Visibility",
        desc: "There is no unified map view of project status across provinces, making it impossible to see delivery gaps at a glance.",
    },
    {
        icon: "🔒",
        title: "Accountability Gaps",
        desc: "A weak accountability chain between national and local levels means stalled projects go unnoticed until it's too late.",
    },
    {
        icon: "📂",
        title: "Scattered Data",
        desc: "Project data is siloed across multiple ministries in different formats — Excel, Word, email — with no central source of truth.",
    },
    {
        icon: "⚠️",
        title: "Late Risk Detection",
        desc: "High-risk or ghost projects are only discovered after significant funds have been expended with little to show.",
    },
];

export default function ProblemSection() {
    return (
        <section className={styles.section} id="about">
            <div className="container">
                <div className={styles.header}>
                    <div className="section-label">The Challenge</div>
                    <h2 className="section-title">
                        Why Government Delivery <br />
                        <span className="gradient-text">Falls Short</span>
                    </h2>
                    <p className="section-subtitle">
                        Zambia&apos;s development projects face systemic monitoring failures
                        that cause reactive decision-making, project delays, and eroded
                        public trust. These are the root problems ZNDMP solves.
                    </p>
                </div>

                <div className={styles.grid}>
                    {challenges.map((c, i) => (
                        <div className={styles.card} key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className={styles.icon}>{c.icon}</div>
                            <h3 className={styles.cardTitle}>{c.title}</h3>
                            <p className={styles.cardDesc}>{c.desc}</p>
                            <div className={styles.cardGlow} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
