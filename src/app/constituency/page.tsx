"use client"

import ConstituencyLayout from "@/components/constituency/ConstituencyLayout";
import styles from "./ConstituencyOverview.module.css";
import { Wallet, CheckCircle, AlertOctagon, TrendingUp, Clock, MapPin } from "lucide-react";

export default function ConstituencyOverviewPage() {
    return (
        <ConstituencyLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Overview: Matero Constituency</h1>
                        <p className={styles.subtitle}>Lusaka Province • 14 Active Projects</p>
                    </div>

                    <div className={styles.quickAction}>
                        <button className={styles.primaryBtn}>+ Submit Field Report</button>
                    </div>
                </div>

                <div className={styles.gridTop}>
                    {/* KPI Cards */}
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIconWrap} style={{ background: 'rgba(25, 158, 70, 0.1)', color: 'var(--green)' }}>
                            <Wallet size={24} />
                        </div>
                        <div className={styles.kpiData}>
                            <span className={styles.kpiLabel}>CDF Utilization</span>
                            <span className={styles.kpiValue}>ZMW 24.5M</span>
                            <span className={styles.kpiTrend}><TrendingUp size={14} /> 82% of Annual Budget</span>
                        </div>
                    </div>

                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIconWrap} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                            <CheckCircle size={24} />
                        </div>
                        <div className={styles.kpiData}>
                            <span className={styles.kpiLabel}>Completed Projects</span>
                            <span className={styles.kpiValue}>8</span>
                            <span className={styles.kpiTrendNeutral}>Since Jan 1, 2024</span>
                        </div>
                    </div>

                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIconWrap} style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--red)' }}>
                            <AlertOctagon size={24} />
                        </div>
                        <div className={styles.kpiData}>
                            <span className={styles.kpiLabel}>Needs Intervention</span>
                            <span className={styles.kpiValue}>2</span>
                            <span className={styles.kpiTrendBad}>Contractor delays</span>
                        </div>
                    </div>
                </div>

                <div className={styles.gridBottom}>
                    {/* Activity Feed */}
                    <div className={styles.activityPanel}>
                        <h3 className={styles.panelTitle}>Recent Constituency Activity</h3>

                        <div className={styles.feedList}>
                            <div className={styles.feedItem}>
                                <div className={styles.feedTime}><Clock size={14} /> 2h ago</div>
                                <div className={styles.feedContent}>
                                    <strong>Matero Level 1 Hospital Expansion</strong>
                                    <p>Field report submitted by Grace Njobvu. Phase 2 marked as 80% complete.</p>
                                    <span className={styles.badge} style={{ background: 'var(--green-glow)', color: 'var(--green)' }}>Update</span>
                                </div>
                            </div>

                            <div className={styles.feedItem}>
                                <div className={styles.feedTime}><Clock size={14} /> 1d ago</div>
                                <div className={styles.feedContent}>
                                    <strong>Zingalume Market Shelter</strong>
                                    <p>Disbursement of ZMW 450,000 approved by Ministry of Local Government.</p>
                                    <span className={styles.badge} style={{ background: '#e0e7ff', color: '#4338ca' }}>Finance</span>
                                </div>
                            </div>

                            <div className={styles.feedItem}>
                                <div className={styles.feedTime}><Clock size={14} /> 2d ago</div>
                                <div className={styles.feedContent}>
                                    <strong style={{ color: 'var(--red)' }}>George Clinic Water Reticulation</strong>
                                    <p>System flagged project as At-Risk due to 30 days without progress update.</p>
                                    <span className={styles.badge} style={{ background: '#fee2e2', color: 'var(--red)' }}>Alert</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Priority Map Mock */}
                    <div className={styles.mapPanel}>
                        <h3 className={styles.panelTitle}>Active Project Map</h3>
                        <div className={styles.mockMapArea}>
                            <div className={styles.mapPin} style={{ top: '30%', left: '45%' }}>
                                <MapPin size={24} color="var(--red)" />
                                <span className={styles.pinLabel}>George Clinic</span>
                            </div>
                            <div className={styles.mapPin} style={{ top: '60%', left: '20%' }}>
                                <MapPin size={24} color="var(--green)" />
                                <span className={styles.pinLabel}>Matero Hospital</span>
                            </div>
                            <div className={styles.mapPin} style={{ top: '75%', left: '70%' }}>
                                <MapPin size={24} color="#3b82f6" />
                                <span className={styles.pinLabel}>Zingalume Market</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ConstituencyLayout>
    );
}
