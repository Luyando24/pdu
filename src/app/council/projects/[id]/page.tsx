"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./ProjectDetail.module.css";
import { 
    ChevronLeft, 
    Clock, 
    CheckCircle, 
    AlertCircle, 
    MapPin, 
    DollarSign, 
    TrendingUp,
    Calendar,
    Briefcase,
    Building2,
    Check
} from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "../page";
import { use } from "react";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const projectId = parseInt(resolvedParams.id);
    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];

    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/council/projects" className={styles.backBtn}>
                        <ChevronLeft size={20} /> Back to Hub
                    </Link>
                    <div className={styles.headerTitle}>
                        <div className={styles.titleGroup}>
                            <h1 className={styles.title}>{project.name}</h1>
                            <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase()]}`}>
                                {project.status}
                            </span>
                        </div>
                        <p className={styles.subtitle}>Project ID: #PRJ-00{project.id} • Registered under Solwezi Municipal Council</p>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        {/* Progress Tracker */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>Delivery Progress</h3>
                                <span className={styles.progressPct}>{project.progress}%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div style={{ 
                                    width: `${project.progress}%`, 
                                    background: project.status === 'Delayed' ? 'var(--red)' : 'var(--green)' 
                                }} />
                            </div>
                            <div className={styles.milestones}>
                                {project.milestones.map((ms, i) => (
                                    <div key={i} className={`${styles.milestoneItem} ${ms.done ? styles.done : ""}`}>
                                        <div className={styles.msStatus}>
                                            {ms.done ? <Check size={14} /> : <div className={styles.dot} />}
                                        </div>
                                        <div className={styles.msInfo}>
                                            <h4>{ms.label}</h4>
                                            <span>{ms.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Financial Analytics */}
                        <div className={styles.statsGrid}>
                            <div className={styles.card}>
                                <div className={styles.statIcon} style={{ background: 'var(--green-glow)', color: 'var(--green)' }}>
                                    <DollarSign size={20} />
                                </div>
                                <div className={styles.statInfo}>
                                    <label>Total Budget</label>
                                    <span className={styles.statVal}>{project.budget}</span>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.statIcon} style={{ background: 'var(--gold-glow)', color: 'var(--gold)' }}>
                                    <TrendingUp size={20} />
                                </div>
                                <div className={styles.statInfo}>
                                    <label>Actual Spend</label>
                                    <span className={styles.statVal}>{project.spent}</span>
                                </div>
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>Project Scope & Impact</h3>
                            </div>
                            <p className={styles.description}>
                                This project focuses on enhancing the local infrastructure within the {project.ward} ward. 
                                It is part of the 2024/2025 CDF allocation aimed at improving community services and 
                                economic accessibility. The initiative is being executed by {project.contractor} under 
                                strict quality supervision by the Solwezi Municipal Council engineering department.
                            </p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>Infrastructure</span>
                                <span className={styles.tag}>CDF Funded</span>
                                <span className={styles.tag}>Priority 1</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        {/* Quick Info */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>Operational Info</h3>
                            </div>
                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <MapPin size={18} className={styles.infoIcon} />
                                    <div>
                                        <label>Location</label>
                                        <span>{project.ward} Ward, Solwezi</span>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <Building2 size={18} className={styles.infoIcon} />
                                    <div>
                                        <label>Contractor</label>
                                        <span>{project.contractor}</span>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <Calendar size={18} className={styles.infoIcon} />
                                    <div>
                                        <label>Expected Comletion</label>
                                        <span>Dec 15, 2026</span>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <Briefcase size={18} className={styles.infoIcon} />
                                    <div>
                                        <label>Funding Source</label>
                                        <span>Constituency Development Fund</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reliability Score */}
                        <div className={styles.card}>
                            <div className={styles.reliabilityGroup}>
                                <div className={styles.scoreCircle}>
                                    <span className={styles.score}>A+</span>
                                </div>
                                <div>
                                    <h4>Reliability Rating</h4>
                                    <p>High confidence in delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
