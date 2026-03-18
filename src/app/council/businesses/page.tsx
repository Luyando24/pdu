"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./Businesses.module.css";
import { 
    Store, 
    TrendingUp, 
    Users, 
    MapPin, 
    Search, 
    Filter, 
    Award,
    CheckCircle2,
    ShieldCheck,
    ArrowUpRight
} from "lucide-react";
import { useState } from "react";

const BUSINESSES = [
    { id: 1, name: "Solwezi SME Tech Hub", category: "Technology", status: "Verified", engagement: "High", revenue: "ZMW 450K/mo", location: "Central Ward" },
    { id: 2, name: "Kabitaka Poultry Farm", category: "Agriculture", status: "Verified", engagement: "Medium", revenue: "ZMW 120K/mo", location: "Kabitaka" },
    { id: 3, name: "Muliashi Irrigation Pros", category: "Agriculture", status: "Pending", engagement: "Low", revenue: "ZMW 85K/mo", location: "Muliashi" },
    { id: 4, name: "Kyawama Carpentry Coop", category: "Manufacturing", status: "Verified", engagement: "High", revenue: "ZMW 320K/mo", location: "Kyawama" },
];

export default function BusinessesSMEPage() {
    const [selectedBus, setSelectedBus] = useState(BUSINESSES[0]);

    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Local Business & SME Hub</h1>
                        <p className={styles.subtitle}>Supporting the economic engine of our city via ZayaBiz integration.</p>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.verifyBtn}><ShieldCheck size={18} /> Batch Verify SMEs</button>
                    </div>
                </div>

                {/* Dashboard Stats */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}><Store size={24} color="var(--blue-accent)" /></div>
                        <div className={styles.statInfo}>
                            <span className={styles.statLabel}>Registered SMEs</span>
                            <span className={styles.statValue}>1,245</span>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}><ShieldCheck size={24} color="var(--green)" /></div>
                        <div className={styles.statInfo}>
                            <span className={styles.statLabel}>Verified Status</span>
                            <span className={styles.statValue}>82%</span>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}><TrendingUp size={24} color="var(--gold)" /></div>
                        <div className={styles.statInfo}>
                            <span className={styles.statLabel}>Est. Ecosystem Revenue</span>
                            <span className={styles.statValue}>ZMW 24.5M</span>
                        </div>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    {/* Business Directory */}
                    <div className={styles.directoryPanel}>
                        <div className={styles.filters}>
                            <div className={styles.searchBox}>
                                <Search size={18} />
                                <input type="text" placeholder="Search businesses..." />
                            </div>
                            <button className={styles.filterBtn}><Filter size={16} /> Filters</button>
                        </div>

                        <div className={styles.busList}>
                            {BUSINESSES.map((bus) => (
                                <div 
                                    key={bus.id} 
                                    className={`${styles.busCard} ${selectedBus.id === bus.id ? styles.activeBus : ""}`}
                                    onClick={() => setSelectedBus(bus)}
                                >
                                    <div className={styles.busMain}>
                                        <div className={styles.busIcon}><Store size={20} /></div>
                                        <div className={styles.busInfo}>
                                            <h3>{bus.name}</h3>
                                            <p>{bus.category} • {bus.location}</p>
                                        </div>
                                    </div>
                                    <div className={styles.busMeta}>
                                        <span className={`${styles.statusBadge} ${bus.status === 'Verified' ? styles.statusVerified : styles.statusPending}`}>
                                            {bus.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Business Profile Detail */}
                    <div className={styles.profilePanel}>
                        <div className={styles.profileHeader}>
                            <div className={styles.profileLogo}>
                                <Store size={32} />
                            </div>
                            <div className={styles.profileTitle}>
                                <h2>{selectedBus.name}</h2>
                                <p>{selectedBus.category} Sector</p>
                            </div>
                            {selectedBus.status === 'Verified' && <div className={styles.verifiedBadge}><ShieldCheck size={20} /> Verified</div>}
                        </div>

                        <div className={styles.metricsGrid}>
                            <div className={styles.metricBox}>
                                <span className={styles.metricLabel}>Revenue Estimate</span>
                                <span className={styles.metricValue}>{selectedBus.revenue}</span>
                            </div>
                            <div className={styles.metricBox}>
                                <span className={styles.metricLabel}>Engagement Rate</span>
                                <span className={styles.metricValue}>{selectedBus.engagement}</span>
                            </div>
                            <div className={styles.metricBox}>
                                <span className={styles.metricLabel}>Customer Base</span>
                                <span className={styles.metricValue}>1.2K+</span>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>Verification Insights</h3>
                            <div className={styles.insightList}>
                                <div className={styles.insightItem}>
                                    <CheckCircle2 size={16} color="var(--green)" />
                                    <span>Business License Valid</span>
                                </div>
                                <div className={styles.insightItem}>
                                    <CheckCircle2 size={16} color="var(--green)" />
                                    <span>Tax Compliance Verified</span>
                                </div>
                                <div className={styles.insightItem}>
                                    <CheckCircle2 size={16} color="var(--green)" />
                                    <span>Physical Address Verified (Geo-tag)</span>
                                </div>
                            </div>
                        </div>

                        <button className={styles.viewFullBtn}>Open ZayaBiz Profile <ArrowUpRight size={16} /></button>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
