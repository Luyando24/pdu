import styles from "./HowItWorks.module.css";

const steps = [
    {
        num: "01",
        icon: "🔍",
        title: "Search Your Constituency",
        desc: "Type your constituency name in the search bar above. You can also browse by province or sector — roads, schools, clinics, water, energy.",
    },
    {
        num: "02",
        icon: "📋",
        title: "See Your Projects",
        desc: "View all government projects assigned to your area. Each card shows the ministry responsible, budget, completion percentage, and contractor details.",
    },
    {
        num: "03",
        icon: "📊",
        title: "Track Real Progress",
        desc: "Check milestone completions, progress updates, and verified photo evidence. All updates come directly from constituency teams on the ground.",
    },
];

export default function HowItWorks() {
    return (
        <section className={styles.section} id="how-it-works">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <div className="section-label">Citizen Guide</div>
                        <h2 className="section-title">
                            How to Track Projects<br />
                            <span className="gradient-text">in Your Area</span>
                        </h2>
                        <p className="section-subtitle">
                            ZNDMP is a free public platform. No account needed to view project progress.
                            Search, filter, and stay informed about development in your constituency.
                        </p>
                        <div className={styles.note}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#F5A623" strokeWidth="1.3" /><path d="M8 5v4M8 11v.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            <span>Photo evidence and confidential reports are restricted to verified PDU staff.</span>
                        </div>
                    </div>

                    <div className={styles.steps}>
                        {steps.map((step, i) => (
                            <div className={styles.step} key={i}>
                                <div className={styles.stepNum}>{step.num}</div>
                                <div className={styles.stepBody}>
                                    <div className={styles.stepIcon}>{step.icon}</div>
                                    <div>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDesc}>{step.desc}</p>
                                    </div>
                                </div>
                                {i < steps.length - 1 && <div className={styles.connector} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
