"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            {/* Government top bar */}
            <div className={styles.govBar}>
                <div className={`container ${styles.govInner}`}>
                    <div className={styles.govLeft}>
                        {/* Coat of Arms placeholder shield */}
                        <div className={styles.coatArms}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M11 2L3 6v6c0 4.4 3.4 8.5 8 9.5C15.6 20.5 19 16.4 19 12V6L11 2z" fill="#198754" stroke="#F5A623" strokeWidth="1" />
                                <path d="M8 11l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className={styles.govText}>Republic of Zambia</span>
                        <span className={styles.govDivider}>|</span>
                        <span className={styles.govText}>Presidential Delivery Unit</span>
                    </div>
                    <div className={styles.govRight}>
                        <a href="/login" className={styles.staffLink}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2" /><path d="M1 12c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                            Staff Login
                        </a>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className={`container ${styles.inner}`}>
                <a href="#" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#198754" />
                            <path d="M8 16h16M8 10h16M8 22h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="24" cy="22" r="3.5" fill="#F5A623" />
                        </svg>
                    </div>
                    <div>
                        <span className={styles.logoName}>ZNDMP</span>
                        <span className={styles.logoSub}>National Project Tracker</span>
                    </div>
                </a>

                <ul className={styles.links}>
                    <li><a href="#projects" className={styles.link}>Projects</a></li>
                    <li><a href="#map" className={styles.link}>Map View</a></li>
                    <li><a href="#how-it-works" className={styles.link}>How It Works</a></li>
                    <li><a href="#about" className={styles.link}>About PDU</a></li>
                </ul>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <a href="#projects" className={styles.btnSearch} id="nav-find-project">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" /><path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                        Find a Project
                    </a>
                </div>

                <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#map" onClick={() => setMenuOpen(false)}>Map View</a>
                    <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About PDU</a>
                    <div className={styles.mobileThemeToggle}>
                        <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>Theme</span>
                        <ThemeToggle />
                    </div>
                    <div className={styles.mobileDivider} />
                    <a href="/login" onClick={() => setMenuOpen(false)} className={styles.staffLink}>Staff Login</a>
                </div>
            )}
        </nav>
    );
}
