"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./Analytics.module.css";
import { 
    BarChart3, 
    TrendingUp, 
    Download, 
    Award, 
    Briefcase, 
    PieChart, 
    Map as MapIcon,
    ArrowUpRight,
    Users
} from "lucide-react";

const WARD_PERFORMANCE = [
    { ward: "Matero Central", completion: 92, projects: 8, impact: "High" },
    { ward: "Kabitaka", completion: 85, projects: 5, impact: "Medium" },
    { ward: "Solwezi Central", completion: 78, projects: 12, impact: "High" },
    { ward: "Kyawama", completion: 65, projects: 4, impact: "Medium" },
    { ward: "Muliashi", completion: 45, projects: 6, impact: "Low" },
];

export default function AnalyticsReportsPage() {
    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Analytics & Impact Reports</h1>
                        <p className={styles.subtitle}>Data-driven insights into municipal performance and citizen welfare.</p>
                    </div>
                    <button className={styles.exportBtn}>
                        <Download size={18} /> Export Performance Audit (PDF)
                    </button>
                </div>

                <div className={styles.topCharts}>
                    <div className={styles.chartCard}>
                        <div className={styles.cardHeader}>
                            <h3><TrendingUp size={18} /> CDF Impact Growth</h3>
                        </div>
                        <div className={styles.mainStat}>
                            <span className={styles.statVal}>+24%</span>
                            <span className={styles.statLabel}>Avg. ward development index improvement</span>
                        </div>
                        <div className={styles.chartPlaceholder}>
                            {/* Monthly Trend Mock */}
                            <div className={styles.barWrap}><div style={{ height: '40%' }} /><span>Jan</span></div>
                            <div className={styles.barWrap}><div style={{ height: '55%' }} /><span>Feb</span></div>
                            <div className={styles.barWrap}><div style={{ height: '65%' }} /><span>Mar</span></div>
                            <div className={styles.barWrap}><div style={{ height: '85%' }} /><span>Apr</span></div>
                        </div>
                    </div>

                    <div className={styles.chartCard}>
                        <div className={styles.cardHeader}>
                            <h3><Users size={18} /> Youth Employment Trends</h3>
                        </div>
                        <div className={styles.mainStat}>
                            <span className={styles.statVal}>1,450</span>
                            <span className={styles.statLabel}>Jobs created since Jan 2024</span>
                        </div>
                        <div className={styles.donutPlaceholder}>
                            <div className={styles.donutText}>
                                <strong>68%</strong>
                                <span>Target Met</span>
                            </div>
                            <svg width="120" height="120" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--blue-accent)" strokeWidth="10" strokeDasharray="180 251" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h2><MapIcon size={20} /> Ward Performance Ranking</h2>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Ward Name</th>
                                    <th>Projects</th>
                                    <th>Completion Rate</th>
                                    <th>Ecosystem Impact</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {WARD_PERFORMANCE.map((ward, idx) => (
                                    <tr key={idx}>
                                        <td className={styles.wardName}>{ward.ward}</td>
                                        <td className={styles.projectCount}>{ward.projects}</td>
                                        <td>
                                            <div className={styles.rateCell}>
                                                <div className={styles.rateBar}><div style={{ width: `${ward.completion}%`, background: ward.completion > 80 ? '#10b981' : ward.completion > 60 ? '#f59e0b' : '#ef4444' }} /></div>
                                                <span>{ward.completion}%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`${styles.impactBadge} ${styles[ward.impact.toLowerCase()]}`}>
                                                {ward.impact}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.scoreCell}>
                                                <Award size={14} color="var(--gold)" />
                                                {(ward.completion * 0.8 + ward.projects * 2).toFixed(1)}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
