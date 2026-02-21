import styles from "./VisionSection.module.css";

export default function VisionSection() {
    return (
        <section className={styles.section} id="vision">
            <div className="container">
                <div className={styles.inner}>
                    {/* Left: Flow diagram */}
                    <div className={styles.flow}>
                        <div className={styles.flowItem}>
                            <div className={`${styles.flowBadge} ${styles.before}`}>Before</div>
                            <div className={styles.flowBox}>
                                <span className={styles.flowIcon}>📃</span>
                                <div>
                                    <p className={styles.flowTitle}>Periodic Reporting</p>
                                    <p className={styles.flowDesc}>Weekly / monthly paper submissions. Weeks of data lag.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.arrow}>
                            <div className={styles.arrowLine} />
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12M10 4l6 6-6 6" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className={styles.flowItem}>
                            <div className={`${styles.flowBadge} ${styles.after}`}>After ZNDMP</div>
                            <div className={`${styles.flowBox} ${styles.flowBoxGreen}`}>
                                <span className={styles.flowIcon}>⚡</span>
                                <div>
                                    <p className={styles.flowTitle}>Continuous National Visibility</p>
                                    <p className={styles.flowDesc}>Real-time updates from all 156 constituencies, every day.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Vision statement */}
                    <div className={styles.content}>
                        <div className="section-label">Our Vision</div>
                        <h2 className="section-title">
                            The Operating System<br />
                            <span className="gradient-text">of Government Delivery</span>
                        </h2>
                        <p className="section-subtitle">
                            ZNDMP is not just a dashboard — it is a{" "}
                            <strong style={{ color: "var(--text-primary)" }}>national accountability workflow system</strong>.
                            Every constituency becomes an active reporting node.
                        </p>

                        <div className={styles.principles}>
                            {[
                                { icon: "✅", text: "Each constituency has a verified account" },
                                { icon: "✅", text: "Projects are updated at source — where work happens" },
                                { icon: "✅", text: "PDU sees real-time delivery status nationwide" },
                                { icon: "✅", text: "Accountability is bottom-up, not top-down" },
                            ].map((p, i) => (
                                <div className={styles.principle} key={i}>
                                    <span>{p.icon}</span>
                                    <span>{p.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
