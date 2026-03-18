"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./CDF.module.css";
import Link from "next/link";
import { 
    Search, 
    Filter, 
    FileText, 
    ChevronRight, 
    TrendingUp, 
    PieChart, 
    Map as MapIcon,
    ArrowUpRight,
    Users
} from "lucide-react";
import { useState } from "react";

const APPLICATIONS = [
    { id: "CDF-24-001", name: "Kabitaka Youth Poultry", type: "Youth", amount: "ZMW 150,000", score: 88, status: "Approved", ward: "Kabitaka", sector: "Agriculture" },
    { id: "CDF-24-002", name: "Solwezi SME Tech Hub", type: "SME", amount: "ZMW 450,000", score: 94, status: "Pending", ward: "Solwezi Central", sector: "Tech" },
    { id: "CDF-24-003", name: "Chikola Women Coop", type: "Coop", amount: "ZMW 200,000", score: 72, status: "Review", ward: "Chikola", sector: "Textiles" },
    { id: "CDF-24-004", name: "Kyawama Youth Carpentry", type: "Youth", amount: "ZMW 120,000", score: 65, status: "Pending", ward: "Kyawama", sector: "Manufacturing" },
    { id: "CDF-24-005", name: "Muliashi Irrigation System", type: "SME", amount: "ZMW 850,000", score: 91, status: "Approved", ward: "Muliashi", sector: "Agriculture" },
];

export default function CDFManagementPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>CDF Management</h1>
                        <p className={styles.subtitle}>Track applications, disbursements, and impact metrics.</p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.miniStat}>
                            <TrendingUp size={16} />
                            <span>82% Funded</span>
                        </div>
                    </div>
                </div>

                {/* Insights Panel */}
                <div className={styles.insightsGrid}>
                    <div className={styles.insightCard}>
                        <div className={styles.insightHeader}>
                            <Users size={18} />
                            <h3>Youth Funding</h3>
                        </div>
                        <div className={styles.insightValue}>42%</div>
                        <p className={styles.insightDesc}>Percentage of total funds allocated to youth-led projects.</p>
                        <div className={styles.progressBar}><div style={{ width: '42%' }} /></div>
                    </div>
                    <div className={styles.insightCard}>
                        <div className={styles.insightHeader}>
                            <PieChart size={18} />
                            <h3>Sector Distribution</h3>
                        </div>
                        <div className={styles.sectorList}>
                            <div className={styles.sectorItem}>
                                <span>Agri</span>
                                <span className={styles.sectorValue}>55%</span>
                            </div>
                            <div className={styles.sectorItem}>
                                <span>Tech</span>
                                <span className={styles.sectorValue}>20%</span>
                            </div>
                            <div className={styles.sectorItem}>
                                <span>Other</span>
                                <span className={styles.sectorValue}>25%</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.insightCard}>
                        <div className={styles.insightHeader}>
                            <MapIcon size={18} />
                            <h3>Ward Allocation</h3>
                        </div>
                        <div className={styles.heatmapPlaceholder}>
                            {/* Heatmap visual representation */}
                            <div className={styles.heatSquare} style={{ opacity: 0.9 }} />
                            <div className={styles.heatSquare} style={{ opacity: 0.6 }} />
                            <div className={styles.heatSquare} style={{ opacity: 0.3 }} />
                            <div className={styles.heatSquare} style={{ opacity: 0.8 }} />
                            <div className={styles.heatSquare} style={{ opacity: 0.4 }} />
                            <div className={styles.heatSquare} style={{ opacity: 0.7 }} />
                        </div>
                    </div>
                </div>

                {/* Applications Table Section */}
                <div className={styles.tablePanel}>
                    <div className={styles.tableActions}>
                        <div className={styles.searchBox}>
                            <Search size={18} />
                            <input 
                                type="text" 
                                placeholder="Search applications..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className={styles.filters}>
                            <button className={styles.filterBtn}><Filter size={16} /> Ward</button>
                            <button className={styles.filterBtn}>Sector</button>
                            <button className={styles.filterBtn}>Type</button>
                        </div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Applicant Name</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>AI Score</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {APPLICATIONS.map((app) => (
                                    <tr key={app.id}>
                                        <td>
                                            <div className={styles.nameCell}>
                                                <span className={styles.appName}>{app.name}</span>
                                                <span className={styles.appId}>{app.id} • {app.ward}</span>
                                            </div>
                                        </td>
                                        <td><span className={styles.typeTag}>{app.type}</span></td>
                                        <td className={styles.amount}>{app.amount}</td>
                                        <td>
                                            <div className={styles.scoreCell}>
                                                <div className={styles.scoreBar}><div style={{ width: `${app.score}%`, background: app.score > 80 ? '#10b981' : app.score > 60 ? '#f59e0b' : '#ef4444' }} /></div>
                                                <span>{app.score}/100</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles[app.status.toLowerCase()]}`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td>
                                            <Link href={`/council/cdf/${app.id}`} className={styles.detailBtn}>
                                                Details <ArrowUpRight size={14} />
                                            </Link>
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
