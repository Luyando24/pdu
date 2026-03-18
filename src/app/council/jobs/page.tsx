"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./Jobs.module.css";
import { 
    Briefcase, 
    GraduationCap, 
    Coins, 
    Landmark, 
    Search, 
    Filter, 
    Users, 
    CheckCircle2, 
    Clock, 
    ArrowUpRight,
    MapPin,
    Building2,
    Calendar,
    Target,
    X,
    Upload
} from "lucide-react";
import { useState } from "react";

const OPPORTUNITIES = [
    { 
        id: 1, 
        title: "Civil Engineer - Road Works", 
        type: "Job", 
        category: "Engineering",
        provider: "Solwezi Municipal Council",
        status: "Active", 
        applicants: 45, 
        match: 92,
        location: "Solwezi Central"
    },
    { 
        id: 2, 
        title: "STEM Undergraduate Scholarship", 
        type: "Scholarship", 
        category: "Education",
        provider: "Copperbelt Energy Corp",
        status: "Closing Soon", 
        applicants: 120, 
        match: 85,
        location: "National"
    },
    { 
        id: 3, 
        title: "Agribusiness SME Loan", 
        type: "Loan", 
        category: "Finance",
        provider: "Zambia National Bank",
        status: "Active", 
        applicants: 88, 
        match: 78,
        location: "North-Western Province"
    },
    { 
        id: 4, 
        title: "Youth Tech Innovation Grant", 
        type: "Grant", 
        category: "Technology",
        provider: "Smart Zambia",
        status: "New", 
        applicants: 12, 
        match: 95,
        location: "Solwezi Tech Hub"
    },
    { 
        id: 5, 
        title: "Heavy Equipment Operator", 
        type: "Job", 
        category: "Construction",
        provider: "Kansanshi Mine",
        status: "Active", 
        applicants: 34, 
        match: 88,
        location: "Kansanshi"
    }
];

export default function JobsOpportunitiesPage() {
    const [filter, setFilter] = useState("All");
    const [selectedOpp, setSelectedOpp] = useState(OPPORTUNITIES[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredOpps = filter === "All" ? OPPORTUNITIES : OPPORTUNITIES.filter(o => o.type === filter);

    const getTypeIcon = (type: string) => {
        switch(type) {
            case 'Job': return <Briefcase size={18} />;
            case 'Scholarship': return <GraduationCap size={18} />;
            case 'Grant': return <Coins size={18} />;
            case 'Loan': return <Landmark size={18} />;
            default: return <Target size={18} />;
        }
    };

    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Opportunities Hub</h1>
                        <p className={styles.subtitle}>Jobs, scholarships, grants, and loans for Solwezi residents.</p>
                    </div>
                    <button className={styles.postBtn} onClick={() => setIsModalOpen(true)}>+ Post New Opportunity</button>
                </div>

                <div className={styles.dashboard}>
                    {/* Listings Column */}
                    <div className={styles.listingsCol}>
                        <div className={styles.filters}>
                            <div className={styles.searchBox}>
                                <Search size={20} />
                                <input type="text" placeholder="Search opportunities..." />
                            </div>
                            <div className={styles.categoryFilters}>
                                {["All", "Job", "Scholarship", "Grant", "Loan"].map((cat) => (
                                    <button 
                                        key={cat}
                                        className={`${styles.catBtn} ${filter === cat ? styles.activeCat : ""}`}
                                        onClick={() => setFilter(cat)}
                                    >
                                        {cat}s
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.oppList}>
                            {filteredOpps.map((opp) => (
                                <div 
                                    key={opp.id} 
                                    className={`${styles.oppCard} ${selectedOpp.id === opp.id ? styles.activeCard : ""}`}
                                    onClick={() => setSelectedOpp(opp)}
                                >
                                    <div className={styles.oppHeader}>
                                        <div className={styles.oppBrand}>
                                            <div className={`${styles.oppIcon} ${styles[opp.type.toLowerCase()]}`}>
                                                {getTypeIcon(opp.type)}
                                            </div>
                                            <div>
                                                <h3>{opp.title}</h3>
                                                <p><Building2 size={12} /> {opp.provider}</p>
                                            </div>
                                        </div>
                                        <div className={styles.oppStatus}>
                                            <span className={styles.statusLabel}>{opp.status}</span>
                                        </div>
                                    </div>
                                    <div className={styles.oppMeta}>
                                        <span><MapPin size={14} /> {opp.location}</span>
                                        <span><Users size={14} /> {opp.applicants} Applicants</span>
                                        <div className={styles.matchBadge}>
                                            <Target size={12} /> {opp.match}% Match
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Matching & Analytics Column */}
                    <div className={styles.detailCol}>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h2>Smart Match Analysis</h2>
                                <p>Automated resident-to-opportunity mapping</p>
                            </div>
                            <div className={styles.matchScore}>
                                <div className={styles.scoreCircle}>
                                    <svg viewBox="0 0 36 36">
                                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--blue-accent)" strokeWidth="3" strokeDasharray={`${selectedOpp.match}, 100`} strokeLinecap="round" />
                                    </svg>
                                    <div className={styles.scoreContent}>
                                        <span className={styles.percent}>{selectedOpp.match}%</span>
                                        <span className={styles.label}>Match</span>
                                    </div>
                                </div>
                                <div className={styles.scoreInsights}>
                                    <div className={styles.insight}>
                                        <span className={styles.insLabel}>Skill Match</span>
                                        <div className={styles.insBar}><div style={{ width: '85%' }} /></div>
                                    </div>
                                    <div className={styles.insight}>
                                        <span className={styles.insLabel}>Ward Priority</span>
                                        <div className={styles.insBar}><div style={{ width: '100%' }} /></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.topCandidates}>
                                <h3>Top Qualified Residents</h3>
                                <div className={styles.candidateList}>
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={styles.candidateItem}>
                                            <div className={styles.candInfo}>
                                                <span className={styles.candName}>Resident #{1024 + i}</span>
                                                <span className={styles.candWard}>Solwezi Central • {90-i}% match</span>
                                            </div>
                                            <button className={styles.actionBtn}>Review</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className={styles.primaryAction}>Notify Matched Candidates <ArrowUpRight size={18} /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Opportunity Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div>
                                <h2>Post New Opportunity</h2>
                                <p>Broadcasting to all Solwezi residents</p>
                            </div>
                            <button className={styles.closeModal} onClick={() => setIsModalOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <form className={styles.form}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label>Opportunity Type</label>
                                    <select>
                                        <option>Job</option>
                                        <option>Scholarship</option>
                                        <option>Grant</option>
                                        <option>Loan</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Category</label>
                                    <input type="text" placeholder="e.g. Engineering, Agriculture" />
                                </div>
                                <div className={`${styles.formGroup} ${styles.full}`}>
                                    <label>Title</label>
                                    <input type="text" placeholder="e.g. Senior Civil Engineer" />
                                </div>
                                <div className={`${styles.formGroup} ${styles.full}`}>
                                    <label>Opportunity Provider</label>
                                    <input type="text" placeholder="e.g. Solwezi Municipal Council" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Closing Date</label>
                                    <input type="date" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Target Ward</label>
                                    <input type="text" placeholder="e.g. Solwezi Central" />
                                </div>
                                <div className={`${styles.formGroup} ${styles.full}`}>
                                    <label>Description & Requirements</label>
                                    <textarea rows={4} placeholder="Briefly describe the opportunity and key requirements..."></textarea>
                                </div>
                            </div>
                            <button type="button" className={styles.submitBtn}>
                                <Upload size={18} /> Publish Opportunity
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </CouncilLayout>
    );
}
