import styles from "./RolesSection.module.css";

const roles = [
    {
        level: "National Level",
        roles: ["Presidential Delivery Unit Officers", "Cabinet Office Analysts", "Presidency Leadership"],
        color: "#1DB954",
        width: "100%",
        icon: "🏛️",
    },
    {
        level: "Ministry Level",
        roles: ["Ministry Project Coordinators", "Sector Supervisors"],
        color: "#3B82F6",
        width: "85%",
        icon: "🏢",
    },
    {
        level: "Provincial Level",
        roles: ["Provincial Administrators"],
        color: "#8B5CF6",
        width: "70%",
        icon: "📍",
    },
    {
        level: "District Level",
        roles: ["District Commissioners", "Project Officers"],
        color: "#F5A623",
        width: "55%",
        icon: "🏗️",
    },
    {
        level: "Constituency Level",
        roles: ["Constituency Development Teams", "Local Project Supervisors"],
        color: "#EC4899",
        width: "40%",
        icon: "🌱",
        critical: true,
    },
];

export default function RolesSection() {
    return (
        <section className={styles.section} id="roles">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <div className="section-label">System Users & Roles</div>
                        <h2 className="section-title">
                            Five-Layer <br />
                            <span className="gradient-text">Accountability Structure</span>
                        </h2>
                        <p className="section-subtitle">
                            ZNDMP supports a hierarchical multi-role system where each level
                            has defined permissions, visibility, and reporting responsibility.
                            Data flows upward from where work happens.
                        </p>

                        <div className={styles.dataFlow}>
                            <p className={styles.flowLabel}>Data Flow</p>
                            <div className={styles.flowPath}>
                                {["Constituency", "District", "Province", "Ministry", "PDU"].map((node, i, arr) => (
                                    <span key={i} className={styles.flowNode}>
                                        {node}
                                        {i < arr.length - 1 && (
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                                                <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pyramid */}
                    <div className={styles.pyramid}>
                        {roles.map((role, i) => (
                            <div
                                key={i}
                                className={`${styles.tier} ${role.critical ? styles.critical : ""}`}
                                style={{ "--w": role.width, "--c": role.color } as React.CSSProperties}
                            >
                                <div className={styles.tierBar}>
                                    <div className={styles.tierLeft}>
                                        <span className={styles.tierIcon}>{role.icon}</span>
                                        <span className={styles.tierLevel}>{role.level}</span>
                                        {role.critical && <span className={styles.critBadge}>Critical</span>}
                                    </div>
                                    <div className={styles.tierRoles}>
                                        {role.roles.map((r, j) => (
                                            <span key={j} className={styles.roleTag}>{r}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
