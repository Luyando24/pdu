import { X, Calendar, MapPin, Building2, HardHat, TrendingUp, AlertTriangle } from "lucide-react";
import styles from "./ProjectDetailsPanel.module.css";

interface ProjectDetailsPanelProps {
    projectId: string | null;
    onClose: () => void;
}

export default function ProjectDetailsPanel({ projectId, onClose }: ProjectDetailsPanelProps) {
    if (!projectId) return null;

    // Mock rendering based on ID presence
    const isDelayed = projectId === "PRJ-9011" || projectId === "PRJ-1022";
    const progress = isDelayed ? 38 : 65;

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <div className={styles.headerTop}>
                    <span className={styles.idBadge}>{projectId}</span>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
                <h2 className={styles.title}>Project Name Specific to {projectId}</h2>
                <div className={styles.metaStrip}>
                    <span className={`${styles.statusBadge} ${isDelayed ? styles.delayed : styles.onTrack}`}>
                        {isDelayed ? "Delayed" : "On Track"}
                    </span>
                    <span className={styles.updatedText}>Updated 5 hrs ago by Eng. Phiri</span>
                </div>
            </div>

            <div className={styles.body}>
                {/* Quick Facts */}
                <div className={styles.section}>
                    <div className={styles.gridFacts}>
                        <div className={styles.fact}>
                            <Building2 size={16} className={styles.factIcon} />
                            <div>
                                <span className={styles.factLabel}>Sector</span>
                                <span className={styles.factValue}>Health</span>
                            </div>
                        </div>
                        <div className={styles.fact}>
                            <MapPin size={16} className={styles.factIcon} />
                            <div>
                                <span className={styles.factLabel}>Location</span>
                                <span className={styles.factValue}>Mwinilunga, North-Western</span>
                            </div>
                        </div>
                        <div className={styles.fact}>
                            <HardHat size={16} className={styles.factIcon} />
                            <div>
                                <span className={styles.factLabel}>Contractor</span>
                                <span className={styles.factValue}>Zambezi Builders Ltd.</span>
                            </div>
                        </div>
                        <div className={styles.fact}>
                            <Calendar size={16} className={styles.factIcon} />
                            <div>
                                <span className={styles.factLabel}>Target Date</span>
                                <span className={styles.factValue}>Nov 2026</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress & Budget */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Progress & Financials</h3>
                    <div className={styles.progressBlock}>
                        <div className={styles.progressHeader}>
                            <span>Physical Progress</span>
                            <span className={styles.progressPercent}>{progress}%</span>
                        </div>
                        <div className={styles.barBg}>
                            <div
                                className={styles.barFill}
                                style={{ width: `${progress}%`, backgroundColor: isDelayed ? '#F5A623' : '#1DB954' }}
                            />
                        </div>
                    </div>

                    <div className={styles.budgetGrid}>
                        <div className={styles.budgetBox}>
                            <span className={styles.budgetLabel}>Total Allocation</span>
                            <span className={styles.budgetValue}>K 24.1M</span>
                        </div>
                        <div className={styles.budgetBox}>
                            <span className={styles.budgetLabel}>Disbursed</span>
                            <span className={styles.budgetValue}>K 10.5M</span>
                            <span className={styles.budgetSub}>43.5%</span>
                        </div>
                    </div>
                </div>

                {/* Risk Assessment */}
                {isDelayed && (
                    <div className={styles.section}>
                        <div className={styles.riskAlert}>
                            <div className={styles.riskHeader}>
                                <AlertTriangle size={18} className={styles.riskIcon} />
                                <h4 className={styles.riskTitle}>Active Risk Alert</h4>
                            </div>
                            <p className={styles.riskDesc}>Material shortage (cement) halting foundation work. Contractor has paused operations awaiting supply from regional depot.</p>
                            <button className={styles.escalateBtn}>Escalate to PDU Director</button>
                        </div>
                    </div>
                )}

                {/* Latest Evidence */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Latest Evidence Photos</h3>
                    <div className={styles.photoGrid}>
                        <div className={styles.photoPlaceholder}>
                            <span>Foundation View</span>
                            <span className={styles.photoDate}>Oct 12</span>
                        </div>
                        <div className={styles.photoPlaceholder}>
                            <span>Material Delivery</span>
                            <span className={styles.photoDate}>Oct 10</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <button className="btn-ghost">View Full Log</button>
                <button className="btn-primary">Update Status</button>
            </div>
        </div>
    );
}
