"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./Dashboard.module.css";
import { 
    Wallet, 
    CheckCircle, 
    FolderKanban, 
    Users, 
    Award,
    Clock,
    ArrowRight,
    MapPin,
    Plus,
    Briefcase,
    Bell
} from "lucide-react";

export default function CouncilDashboardPage() {
    return (
        <CouncilLayout>
            <div className={styles.container}>
                {/* Header Section */}
                <div className={styles.hero}>
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>Solwezi City Snapshot</h1>
                        <p className={styles.subtitle}>Real-time monitoring of Solwezi municipal operations and CDF impact.</p>
                    </div>
                    <div className={styles.quickActions}>
                        <button className={styles.actionBtn}>
                            <Plus size={18} /> New project
                        </button>
                        <button className={styles.actionBtn}>
                            <Briefcase size={18} /> Post Job
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className={styles.kpiGrid}>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon} style={{ background: 'var(--green-glow)', color: 'var(--green)' }}>
                            <Wallet size={24} />
                        </div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Total CDF Budget</span>
                            <span className={styles.kpiValue}>ZMW 48.2M</span>
                        </div>
                    </div>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon} style={{ background: 'var(--green-glow)', color: 'var(--green)' }}>
                            <CheckCircle size={24} />
                        </div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Funds Disbursed</span>
                            <span className={styles.kpiValue}>ZMW 32.4M</span>
                        </div>
                    </div>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon} style={{ background: 'var(--gold-glow)', color: 'var(--gold)' }}>
                            <FolderKanban size={24} />
                        </div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Active Projects</span>
                            <span className={styles.kpiValue}>24</span>
                        </div>
                    </div>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon} style={{ background: 'var(--gold-glow)', color: 'var(--gold)' }}>
                            <Briefcase size={24} />
                        </div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Jobs Posted</span>
                            <span className={styles.kpiValue}>142</span>
                        </div>
                    </div>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon} style={{ background: 'var(--green-glow)', color: 'var(--green)' }}>
                            <Award size={24} />
                        </div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Youth Beneficiaries</span>
                            <span className={styles.kpiValue}>1,240</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className={styles.mainGrid}>
                    {/* Activity Feed */}
                    <div className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <h2 className={styles.panelTitle}><Bell size={20} /> Live Activity Feed</h2>
                        </div>
                        <div className={styles.activityFeed}>
                            <div className={styles.feedItem}>
                                <div className={styles.statusDot} style={{ background: 'var(--green)' }} />
                                <div className={styles.feedContent}>
                                    <p><strong>CDF application approved</strong> (Kabitaka Youth)</p>
                                    <span><Clock size={12} /> 12m ago</span>
                                </div>
                            </div>
                            <div className={styles.feedItem}>
                                <div className={styles.statusDot} style={{ background: 'var(--gold)' }} />
                                <div className={styles.feedContent}>
                                    <p><strong>Road project 60% complete</strong> – Kyawama</p>
                                    <span><Clock size={12} /> 1h ago</span>
                                </div>
                            </div>
                            <div className={styles.feedItem}>
                                <div className={styles.statusDot} style={{ background: 'var(--gold)' }} />
                                <div className={styles.feedContent}>
                                    <p><strong>Delayed project flagged</strong> – George Clinic</p>
                                    <span><Clock size={12} /> 4h ago</span>
                                </div>
                            </div>
                        </div>
                        <button className={styles.viewMore}>
                            View All Activity <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* Interactive Map (Placeholder) */}
                    <div className={`${styles.panel} ${styles.mapPanel}`}>
                        <div className={styles.panelHeader}>
                            <h2 className={styles.panelTitle}><MapPin size={20} /> Interactive City Map</h2>
                        </div>
                        <div className={styles.mapArea}>
                            <div className={styles.mapPin} style={{ top: '30%', left: '40%' }}>
                                <div className={styles.pinDot} style={{ background: '#10b981' }} />
                                <div className={styles.pinPulse} style={{ borderColor: '#10b981' }} />
                            </div>
                            <div className={styles.mapPin} style={{ top: '60%', left: '20%' }}>
                                <div className={styles.pinDot} style={{ background: '#f59e0b' }} />
                            </div>
                            <div className={styles.mapPin} style={{ top: '75%', left: '70%' }}>
                                <div className={styles.pinDot} style={{ background: '#ef4444' }} />
                            </div>
                            <div className={styles.mapGridLine} />
                            <div className={styles.mapLabel}>Lusaka District Center</div>
                        </div>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
