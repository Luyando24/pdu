import styles from "./CTASection.module.css";

export default function CTASection() {
    return (
        <section className={styles.section} id="cta">
            <div className="container">
                <div className={styles.card}>
                    {/* Background glow */}
                    <div className={styles.glowLeft} />
                    <div className={styles.glowRight} />

                    <div className={styles.content}>
                        <div className="section-label" style={{ marginBottom: "24px" }}>Get Access</div>
                        <h2 className={styles.headline}>
                            Ready to Transform<br />
                            <span className="gradient-text">Government Delivery?</span>
                        </h2>
                        <p className={styles.sub}>
                            ZNDMP access is role-controlled and issued by the Presidential Delivery Unit.
                            Submit a request to begin the onboarding process for your level of government.
                        </p>

                        <div className={styles.actions}>
                            <a href="mailto:pdu@statehouse.gov.zm" className="btn-primary" id="cta-request-access">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M2 4h12l-6 5-6-5zm0 0v8h12V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Request PDU Access
                            </a>
                            <a href="#modules" className="btn-ghost" id="cta-learn-more">
                                Learn More About Modules
                            </a>
                        </div>

                        <p className={styles.note}>
                            Access is granted based on verified government role and constituency assignment.
                        </p>
                    </div>

                    {/* Right visual */}
                    <div className={styles.visual}>
                        <div className={styles.card1}>
                            <div className={styles.dot} style={{ background: "#1DB954" }} />
                            <span>Northern Province — 14 projects on track</span>
                        </div>
                        <div className={styles.card2}>
                            <div className={styles.dot} style={{ background: "#F5A623" }} />
                            <span>Copperbelt — 3 projects at risk</span>
                        </div>
                        <div className={styles.card3}>
                            <div className={styles.dot} style={{ background: "#E5484D" }} />
                            <span>Western Province — 2 critical delays</span>
                        </div>
                        <div className={styles.statsGrid}>
                            {[["156", "Constituencies"], ["9", "Modules"], ["10", "Provinces"], ["Real-Time", "Visibility"]].map(([n, l]) => (
                                <div key={l} className={styles.statItem}>
                                    <span className={styles.statN}>{n}</span>
                                    <span className={styles.statL}>{l}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
