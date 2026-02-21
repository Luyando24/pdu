"use client";
import { useState } from "react";
import styles from "./HeroSection.module.css";
import ZambiaMap from "./ZambiaMap";

const CONSTITUENCIES = [
    "Lusaka Central", "Matero", "Kanyama", "Mandevu", "Kabwata",
    "Chilanga", "Kafue", "Chongwe", "Rufunsa", "Luangwa",
    "Ndola Central", "Kankoyo", "Wusakile", "Bwana Mkubwa",
    "Kitwe Central", "Nkana", "Mindolo", "Chamboli",
    "Livingstone", "Zimba", "Kalomo", "Choma", "Mazabuka",
    "Chipata Central", "Petauke", "Katete", "Lundazi", "Chadiza",
    "Kasama Central", "Luwingu", "Mpika", "Chinsali", "Mporokoso",
    "Solwezi Central", "Mwinilunga", "Kabompo", "Zambezi",
    "Mongu Central", "Liuwa", "Senanga", "Kaoma", "Lukulu",
    "Monze", "Gwembe", "Siavonga", "Chirundu", "Itezhi-Tezhi",
];

export default function HeroSection() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);
        if (val.length > 1) {
            setSuggestions(
                CONSTITUENCIES.filter((c) =>
                    c.toLowerCase().includes(val.toLowerCase())
                ).slice(0, 5)
            );
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (name: string) => {
        setQuery(name);
        setSuggestions([]);
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.bgGrid} aria-hidden />
            <div className={styles.bgGlow} aria-hidden />

            <div className={`container ${styles.inner}`}>
                {/* Left content */}
                <div className={styles.content}>
                    <div className={styles.eyebrow}>
                        <span className={styles.liveIndicator}>
                            <span className={styles.liveDot} />
                            Live
                        </span>
                        <span>Government Project Tracker · Updated Daily</span>
                    </div>

                    <h1 className={styles.headline}>
                        Your Taxes at Work.<br />
                        <span className={styles.gradientText}>Track Every Project</span><br />
                        in Your Area.
                    </h1>

                    <p className={styles.sub}>
                        See what government is building in your constituency — roads, schools,
                        clinics, water systems — with real-time progress updates and photo evidence.
                    </p>

                    {/* Search */}
                    <div className={styles.searchWrap} role="search">
                        <div className={styles.searchBox}>
                            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="8" cy="8" r="5.5" stroke="#94A3B8" strokeWidth="1.6" />
                                <path d="M12.5 12.5L16 16" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            <input
                                id="constituency-search"
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search by constituency e.g. Matero, Choma, Kitwe..."
                                value={query}
                                onChange={handleInput}
                                autoComplete="off"
                            />
                            <button
                                className={styles.searchBtn}
                                onClick={() => handleSelect(query)}
                                aria-label="Search projects"
                            >
                                Search
                            </button>
                        </div>

                        {suggestions.length > 0 && (
                            <ul className={styles.suggestions} role="listbox">
                                {suggestions.map((s) => (
                                    <li key={s} role="option" onClick={() => handleSelect(s)} className={styles.suggestion}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7 1.5C4.5 1.5 2.5 3.5 2.5 6c0 3.5 4.5 6.5 4.5 6.5S11.5 9.5 11.5 6c0-2.5-2-4.5-4.5-4.5z" stroke="#1DB954" strokeWidth="1.2" />
                                            <circle cx="7" cy="6" r="1.5" fill="#1DB954" />
                                        </svg>
                                        {s} Constituency
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className={styles.quickLinks}>
                            <span>Popular:</span>
                            {["Lusaka Central", "Kitwe Central", "Ndola Central", "Choma"].map((c) => (
                                <button
                                    key={c}
                                    className={styles.quickChip}
                                    onClick={() => handleSelect(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Map */}
                <div className={styles.mapSide}>
                    <ZambiaMap />
                </div>
            </div>
        </section>
    );
}
