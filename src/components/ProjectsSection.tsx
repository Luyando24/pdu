"use client";
import { useState } from "react";
import styles from "./ProjectsSection.module.css";

const PROJECTS = [
    {
        id: 1,
        title: "Matero Main Road Rehabilitation",
        ministry: "Ministry of Infrastructure",
        constituency: "Matero",
        province: "Lusaka",
        category: "Roads",
        status: "In Progress",
        progress: 68,
        budget: "K 4,200,000",
        contractor: "Zambia Roads Ltd",
        lastUpdate: "3 days ago",
        updates: 14,
        description: "Rehabilitation of 12km of the Matero main road including drainage improvements and road markings.",
        milestones: ["Site Clearing ✅", "Foundation ✅", "Surfacing 🔄", "Markings ⏳"],
        img: "🛣️",
    },
    {
        id: 2,
        title: "Kanyama Community Clinic Expansion",
        ministry: "Ministry of Health",
        constituency: "Kanyama",
        province: "Lusaka",
        category: "Health",
        status: "Completed",
        progress: 100,
        budget: "K 1,850,000",
        contractor: "BuildZambia Construction",
        lastUpdate: "2 weeks ago",
        updates: 22,
        description: "Construction of additional ward block, maternity wing, and pharmacy at Kanyama Community Clinic.",
        milestones: ["Foundation ✅", "Structure ✅", "Roofing ✅", "Finishing ✅"],
        img: "🏥",
    },
    {
        id: 3,
        title: "Ndola East Primary School Block",
        ministry: "Ministry of Education",
        constituency: "Ndola Central",
        province: "Copperbelt",
        category: "Education",
        status: "In Progress",
        progress: 45,
        budget: "K 980,000",
        contractor: "Copperbelt Contractors",
        lastUpdate: "1 week ago",
        updates: 8,
        description: "Construction of 8-classroom block with ablution facilities for Ndola East Primary School.",
        milestones: ["Foundation ✅", "Walls 🔄", "Roofing ⏳", "Finishing ⏳"],
        img: "🏫",
    },
    {
        id: 4,
        title: "Choma–Namwala Water Pipeline",
        ministry: "Ministry of Water",
        constituency: "Choma",
        province: "Southern",
        category: "Water",
        status: "Delayed",
        progress: 22,
        budget: "K 6,700,000",
        contractor: "AquaZam Engineers",
        lastUpdate: "3 weeks ago",
        updates: 5,
        description: "60km water supply pipeline from Choma to Namwala district serving an estimated 45,000 households.",
        milestones: ["Survey ✅", "Trenching 🔄", "Pipeline ⏳", "Commissioning ⏳"],
        img: "💧",
    },
    {
        id: 5,
        title: "Livingstone Solar Mini-Grid",
        ministry: "Ministry of Energy",
        constituency: "Livingstone",
        province: "Southern",
        category: "Energy",
        status: "On Track",
        progress: 77,
        budget: "K 3,400,000",
        contractor: "SunPower Zambia",
        lastUpdate: "Yesterday",
        updates: 19,
        description: "Installation of 500kW solar mini-grid to power 2,800 households in peri-urban Livingstone.",
        milestones: ["Engineering ✅", "Panels ✅", "Wiring 🔄", "Grid-tie ⏳"],
        img: "☀️",
    },
    {
        id: 6,
        title: "Chipata Agriculture Input Scheme",
        ministry: "Ministry of Agriculture",
        constituency: "Chipata Central",
        province: "Eastern",
        category: "Agriculture",
        status: "Not Started",
        progress: 0,
        budget: "K 2,100,000",
        contractor: "Eastern Agro Suppliers",
        lastUpdate: "N/A",
        updates: 0,
        description: "Distribution of subsidised seeds and fertiliser to 12,000 smallholder farmers in Chipata district.",
        milestones: ["Procurement ⏳", "Distribution ⏳", "Monitoring ⏳", "Review ⏳"],
        img: "🌾",
    },
];

const CATEGORIES = ["All", "Roads", "Health", "Education", "Water", "Energy", "Agriculture"];
const STATUSES = ["All", "Completed", "In Progress", "On Track", "Delayed", "Not Started"];

const STATUS_STYLES: Record<string, { color: string; bg: string }> = {
    "Completed": { color: "#1DB954", bg: "rgba(29,185,84,0.15)" },
    "In Progress": { color: "#3B82F6", bg: "rgba(59,130,246,0.15)" },
    "On Track": { color: "#22c55e", bg: "rgba(34,197,94,0.12)" },
    "Delayed": { color: "#E5484D", bg: "rgba(229,72,77,0.15)" },
    "Not Started": { color: "#94A3B8", bg: "rgba(148,163,184,0.1)" },
};

const PROGRESS_COLORS: Record<string, string> = {
    "Completed": "#1DB954",
    "In Progress": "#3B82F6",
    "On Track": "#22c55e",
    "Delayed": "#E5484D",
    "Not Started": "#475569",
};

export default function ProjectsSection() {
    const [category, setCategory] = useState("All");
    const [status, setStatus] = useState("All");
    const [expanded, setExpanded] = useState<number | null>(null);

    const filtered = PROJECTS.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            (status === "All" || p.status === status)
    );

    return (
        <section className={styles.section} id="projects">
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div className="section-label">Project Tracker</div>
                        <h2 className="section-title">
                            Browse Government Projects
                        </h2>
                        <p className="section-subtitle">
                            Filter by sector or status to find projects near you.
                            Click any project for full details and evidence photos.
                        </p>
                    </div>
                    <div className={styles.resultsCount}>
                        <span className={styles.countNum}>{filtered.length}</span>
                        <span className={styles.countLabel}>projects shown</span>
                    </div>
                </div>

                {/* Filters */}
                <div className={styles.filters}>
                    <div className={styles.filterGroup}>
                        <span className={styles.filterLabel}>Sector:</span>
                        <div className={styles.chips}>
                            {CATEGORIES.map((c) => (
                                <button
                                    key={c}
                                    className={`${styles.chip} ${category === c ? styles.chipActive : ""}`}
                                    onClick={() => setCategory(c)}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.filterGroup}>
                        <span className={styles.filterLabel}>Status:</span>
                        <div className={styles.chips}>
                            {STATUSES.map((s) => (
                                <button
                                    key={s}
                                    className={`${styles.chip} ${status === s ? styles.chipActive : ""}`}
                                    onClick={() => setStatus(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Cards */}
                <div className={styles.grid}>
                    {filtered.map((proj) => {
                        const sc = STATUS_STYLES[proj.status] ?? STATUS_STYLES["Not Started"];
                        const pc = PROGRESS_COLORS[proj.status] ?? "#475569";
                        const isOpen = expanded === proj.id;
                        return (
                            <div key={proj.id} className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}>
                                {/* Card header */}
                                <div className={styles.cardHead}>
                                    <div className={styles.cardIcon}>{proj.img}</div>
                                    <div className={styles.cardMeta}>
                                        <span
                                            className={styles.statusBadge}
                                            style={{ color: sc.color, background: sc.bg }}
                                        >
                                            {proj.status}
                                        </span>
                                        <span className={styles.category}>{proj.category}</span>
                                    </div>
                                </div>

                                <h3 className={styles.cardTitle}>{proj.title}</h3>

                                <div className={styles.cardInfo}>
                                    <div className={styles.infoRow}>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5C4.5 1.5 3 3 3 5c0 3 3.5 6.5 3.5 6.5S10 8 10 5c0-2-1.5-3.5-3.5-3.5z" stroke="#94A3B8" strokeWidth="1.2" /><circle cx="6.5" cy="5" r="1.2" fill="#94A3B8" /></svg>
                                        <span>{proj.constituency}, {proj.province} Province</span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="2.5" width="10" height="8" rx="1" stroke="#94A3B8" strokeWidth="1.2" /><path d="M4 2.5V1.5M9 2.5V1.5M1.5 5.5h10" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" /></svg>
                                        <span>Updated {proj.lastUpdate}</span>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className={styles.progressWrap}>
                                    <div className={styles.progressHeader}>
                                        <span className={styles.progressLabel}>Completion</span>
                                        <span className={styles.progressNum} style={{ color: pc }}>{proj.progress}%</span>
                                    </div>
                                    <div className={styles.progressTrack}>
                                        <div
                                            className={styles.progressFill}
                                            style={{ width: `${proj.progress}%`, background: pc }}
                                        />
                                    </div>
                                </div>

                                <div className={styles.cardFooter}>
                                    <div className={styles.budget}>
                                        <span className={styles.budgetLabel}>Budget</span>
                                        <span className={styles.budgetNum}>{proj.budget}</span>
                                    </div>
                                    <button
                                        className={styles.detailBtn}
                                        onClick={() => setExpanded(isOpen ? null : proj.id)}
                                        aria-expanded={isOpen}
                                    >
                                        {isOpen ? "Hide Details" : "View Details"}
                                        <svg
                                            width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                                        >
                                            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Expanded details */}
                                {isOpen && (
                                    <div className={styles.details}>
                                        <div className={styles.detailSection}>
                                            <p className={styles.detailHeading}>Project Description</p>
                                            <p className={styles.detailText}>{proj.description}</p>
                                        </div>
                                        <div className={styles.detailGrid}>
                                            <div className={styles.detailBlock}>
                                                <p className={styles.detailHeading}>Ministry</p>
                                                <p className={styles.detailText}>{proj.ministry}</p>
                                            </div>
                                            <div className={styles.detailBlock}>
                                                <p className={styles.detailHeading}>Contractor</p>
                                                <p className={styles.detailText}>{proj.contractor}</p>
                                            </div>
                                            <div className={styles.detailBlock}>
                                                <p className={styles.detailHeading}>Updates Filed</p>
                                                <p className={styles.detailText}>{proj.updates} reports</p>
                                            </div>
                                        </div>
                                        <div className={styles.detailSection}>
                                            <p className={styles.detailHeading}>Milestones</p>
                                            <div className={styles.milestones}>
                                                {proj.milestones.map((m) => (
                                                    <span className={styles.milestone} key={m}>{m}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles.evidenceNote}>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="#F5A623" strokeWidth="1.2" /><path d="M4 9L6.5 6.5 8 8l1.5-2.5" stroke="#F5A623" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span>Photo evidence available to verified officers. <a href="/login">Staff Login →</a></span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <div className={styles.empty}>
                        <span style={{ fontSize: "2.5rem" }}>🔍</span>
                        <p>No projects match your filters. Try adjusting the category or status.</p>
                    </div>
                )}

                <div className={styles.viewMore}>
                    <button className="btn-ghost" id="view-all-projects">
                        View All 2,847 Projects
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
