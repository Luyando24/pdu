import styles from "./AboutSection.module.css";
import ZambiaMap from "./ZambiaMap";

export default function AboutSection() {
    return (
        <section className={styles.section} id="about">
            <div className="container">
                <div className={styles.inner}>
                    {/* Map panel */}
                    <div className={styles.mapPanel}>
                        <div className={styles.mapHeader}>
                            <span className={styles.mapTitle}>Zambia Delivery Map</span>
                            <span className={styles.mapSub}>Province-level status overview</span>
                        </div>
                        <ZambiaMap />
                        <div className={styles.mapLegendList}>
                            {[
                                { color: "#1DB954", label: "On Track", count: "7 provinces" },
                                { color: "#F5A623", label: "At Risk", count: "2 provinces" },
                                { color: "#E5484D", label: "Delayed", count: "1 province" },
                            ].map((l) => (
                                <div className={styles.legendRow} key={l.label}>
                                    <span className={styles.legendDot} style={{ background: l.color }} />
                                    <span className={styles.legendLabel}>{l.label}</span>
                                    <span className={styles.legendCount}>{l.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About content */}
                    <div className={styles.content}>
                        <div className="section-label">About the Platform</div>
                        <h2 className="section-title">
                            Powered by the<br />
                            <span className="gradient-text">Presidential Delivery Unit</span>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 24 }}>
                            The <strong style={{ color: "var(--text-primary)" }}>Presidential Delivery Unit (PDU)</strong> exists
                            to ensure government commitments and development projects are <em>actually delivered</em> on the ground —
                            not just planned on paper.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 32 }}>
                            ZNDMP connects all 156 constituencies directly to the PDU, creating a live national
                            accountability system. Constituency teams file real-time updates with GPS-tagged photo evidence.
                            Citizens can verify what is being built, where, and when.
                        </p>

                        <div className={styles.pillars}>
                            {[
                                { icon: "🔍", title: "Transparency", desc: "Every project is publicly visible with verifiable status." },
                                { icon: "⚖️", title: "Accountability", desc: "GPS-tagged evidence prevents ghost projects." },
                                { icon: "⚡", title: "Real-Time", desc: "Data updated daily from constituency teams." },
                            ].map((p) => (
                                <div className={styles.pillar} key={p.title}>
                                    <span className={styles.pillarIcon}>{p.icon}</span>
                                    <div>
                                        <p className={styles.pillarTitle}>{p.title}</p>
                                        <p className={styles.pillarDesc}>{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="https://www.statehouse.gov.zm" target="_blank" rel="noopener noreferrer" className={styles.stateHouseLink}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6 2H2.5A1.5 1.5 0 001 3.5v8A1.5 1.5 0 002.5 13h8A1.5 1.5 0 0012 11.5V8M8 1h5m0 0v5m0-5L6.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Office of the President — State House Website
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
