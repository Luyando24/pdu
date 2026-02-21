import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Government footer bar */}
            <div className={styles.govBanner}>
                <div className={`container ${styles.bannerInner}`}>
                    <div className={styles.emblem}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M18 3L4 10v10c0 7 6 13.5 14 15 8-1.5 14-8 14-15V10L18 3z" fill="#198754" stroke="#F5A623" strokeWidth="1.5" />
                            <path d="M12 18l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.emblemText}>
                        <span className={styles.country}>Republic of Zambia</span>
                        <span className={styles.pdu}>Presidential Delivery Unit · State House</span>
                    </div>
                    <div className={styles.bannerRight}>
                        <span className={styles.official}>Official Government Platform</span>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div className="container">
                <div className={styles.inner}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logoRow}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="#198754" />
                                <path d="M8 16h16M8 10h16M8 22h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="24" cy="22" r="3.5" fill="#F5A623" />
                            </svg>
                            <div>
                                <span className={styles.logoName}>ZNDMP</span>
                                <span className={styles.logoPlatform}>Zambia National Delivery & Monitoring Platform</span>
                            </div>
                        </div>
                        <p className={styles.brandDesc}>
                            A free public platform allowing every Zambian citizen to track government
                            development projects in their constituency in real time.
                        </p>
                        <div className={styles.disclaimer}>
                            <strong>Disclaimer:</strong> Project data is submitted by constituency-level teams
                            and verified by the PDU. Data may not reflect the most recent on-ground changes in real time.
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p className={styles.colTitle}>Quick Links</p>
                        <ul className={styles.linkList}>
                            <li><a href="#projects" className={styles.link}>Browse Projects</a></li>
                            <li><a href="#map" className={styles.link}>Map View</a></li>
                            <li><a href="#how-it-works" className={styles.link}>How It Works</a></li>
                            <li><a href="#about" className={styles.link}>About PDU</a></li>
                            <li><a href="/login" className={styles.link}>Staff Login</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className={styles.colTitle}>Contact PDU</p>
                        <div className={styles.contacts}>
                            <div className={styles.contactRow}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 3.5h10l-5 4-5-4zm0 0V10h10V3.5" stroke="#94A3B8" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <span>pdu@statehouse.gov.zm</span>
                            </div>
                            <div className={styles.contactRow}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="2" width="10" height="9" rx="1.5" stroke="#94A3B8" strokeWidth="1.1" /><path d="M1.5 5h10" stroke="#94A3B8" strokeWidth="1.1" /></svg>
                                <span>State House, Independence Ave, Lusaka</span>
                            </div>
                            <div className={styles.contactRow}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="#94A3B8" strokeWidth="1.1" strokeLinecap="round" /></svg>
                                <a href="https://www.statehouse.gov.zm" target="_blank" rel="noopener noreferrer" style={{ color: "var(--green)" }}>www.statehouse.gov.zm</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copy}>
                        © {new Date().getFullYear()} Presidential Delivery Unit · Republic of Zambia. All rights reserved.
                    </p>
                    <div className={styles.bottomLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Report an Issue</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
