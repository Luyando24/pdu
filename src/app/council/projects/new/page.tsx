"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./NewProject.module.css";
import { 
    ChevronLeft, 
    Upload, 
    Calendar, 
    MapPin, 
    FolderKanban, 
    DollarSign, 
    HardHat,
    Target
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
    const router = useRouter();

    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/council/projects" className={styles.backBtn}>
                        <ChevronLeft size={20} /> Back to Projects
                    </Link>
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Initialize New Project</h1>
                        <p className={styles.subtitle}>Registering a new community development initiative for Solwezi Council.</p>
                    </div>
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.formCard}>
                        <form className={styles.form}>
                            <div className={styles.section}>
                                <div className={styles.sectionHeader}>
                                    <FolderKanban size={20} className={styles.sectionIcon} />
                                    <h3>Core Project Details</h3>
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={`${styles.formGroup} ${styles.full}`}>
                                        <label>Project Name</label>
                                        <input type="text" placeholder="e.g. Kapijimpanga Clinic Expansion" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Ward</label>
                                        <div className={styles.selectWrapper}>
                                            <MapPin size={16} className={styles.inputIcon} />
                                            <select className={styles.select}>
                                                <option>Solwezi Central</option>
                                                <option>Kabitaka</option>
                                                <option>Kyawama</option>
                                                <option>Kimasala</option>
                                                <option>Sandangombe</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Category</label>
                                        <div className={styles.selectWrapper}>
                                            <Target size={16} className={styles.inputIcon} />
                                            <select className={styles.select}>
                                                <option>Roads & Infrastructure</option>
                                                <option>Health</option>
                                                <option>Education</option>
                                                <option>Water & Sanitation</option>
                                                <option>Community Social</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.section}>
                                <div className={styles.sectionHeader}>
                                    <DollarSign size={20} className={styles.sectionIcon} />
                                    <h3>Financials & Logistics</h3>
                                </div>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label>Total Budget (ZMW)</label>
                                        <input type="text" placeholder="e.g. 5,000,000" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Contractor</label>
                                        <div className={styles.inputWithIcon}>
                                            <HardHat size={16} className={styles.inputIcon} />
                                            <input type="text" placeholder="e.g. Coppercore Construction" />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Expected Start Date</label>
                                        <div className={styles.inputWithIcon}>
                                            <Calendar size={16} className={styles.inputIcon} />
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Expected Completion Date</label>
                                        <div className={styles.inputWithIcon}>
                                            <Calendar size={16} className={styles.inputIcon} />
                                            <input type="date" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.section}>
                                <div className={styles.sectionHeader}>
                                    <Target size={20} className={styles.sectionIcon} />
                                    <h3>Objectives & Scope</h3>
                                </div>
                                <div className={`${styles.formGroup} ${styles.full}`}>
                                    <label>Project Scope & Objectives</label>
                                    <textarea rows={6} placeholder="Detailed description of project impact and key milestones..."></textarea>
                                </div>
                            </div>

                            <div className={styles.footer}>
                                <button type="button" className={styles.cancelBtn} onClick={() => router.back()}>Cancel</button>
                                <button type="button" className={styles.submitBtn}>
                                    <Upload size={18} /> Initialize Project
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.guidelineCard}>
                            <h4>Project Guidelines</h4>
                            <ul>
                                <li>Ensure budget estimates are inclusive of VAT.</li>
                                <li>Wards must be verified against current boundaries.</li>
                                <li>Completion dates are estimates and can be adjusted.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
