"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./AppDetail.module.css";
import { 
    ChevronLeft, 
    FileText, 
    User, 
    Calendar, 
    MapPin, 
    CheckCircle, 
    XCircle,
    Download,
    Eye,
    AlertCircle,
    PieChart,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ApplicationDetailPage() {
    const params = useParams();
    const id = params.id as string || "CDF-24-001";

    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Link href="/council/cdf" className={styles.backLink}>
                        <ArrowLeft size={18} /> Back to Applications
                    </Link>
                    <div className={styles.headerMain}>
                        <div className={styles.titleInfo}>
                            <h1 className={styles.title}>Application: {id}</h1>
                            <span className={styles.badge}>Status: Pending Review</span>
                        </div>
                        <div className={styles.headerActions}>
                            <button className={styles.rejectBtn}><XCircle size={18} /> Reject</button>
                            <button className={styles.approveBtn}><CheckCircle size={18} /> Approve Application</button>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {/* Left: Profile & Data */}
                    <div className={styles.mainCol}>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h2><User size={20} /> Applicant Profile</h2>
                            </div>
                            <div className={styles.profileBody}>
                                <div className={styles.avatar}>KN</div>
                                <div className={styles.profileInfo}>
                                    <h3>Kabitaka Youth Poultry Group</h3>
                                    <p>Cooperative • Kabitaka Ward • Established 2022</p>
                                    <div className={styles.metaGrid}>
                                        <div className={styles.metaItem}>
                                            <span className={styles.metaLabel}>Representative</span>
                                            <span className={styles.metaVal}>Kelvin Nyundu</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <span className={styles.metaLabel}>Contact</span>
                                            <span className={styles.metaVal}>+260 977 123 456</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <span className={styles.metaLabel}>Members</span>
                                            <span className={styles.metaVal}>12 (All under 35)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h2><FileText size={20} /> Project Proposal & Documents</h2>
                            </div>
                            <div className={styles.docBody}>
                                <div className={styles.proposalBrief}>
                                    <h4>Expansion of Poultry Production</h4>
                                    <p>The group seeks ZMW 150,000 to construct two additional broiler houses and install a solar-powered borehole for water supply. This will increase production from 5,000 to 12,000 birds per cycle.</p>
                                </div>
                                <div className={styles.docList}>
                                    <div className={styles.docItem}>
                                        <div className={styles.docIcon}><FileText size={20} /></div>
                                        <div className={styles.docInfo}>
                                            <span>Full Project Proposal.pdf</span>
                                            <span>2.4 MB</span>
                                        </div>
                                        <button className={styles.viewBtn}><Eye size={16} /></button>
                                        <button className={styles.viewBtn}><Download size={16} /></button>
                                    </div>
                                    <div className={styles.docItem}>
                                        <div className={styles.docIcon}><FileText size={20} /></div>
                                        <div className={styles.docInfo}>
                                            <span>Certificate of Registration.pdf</span>
                                            <span>1.1 MB</span>
                                        </div>
                                        <button className={styles.viewBtn}><Eye size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: AI Score & Risk */}
                    <div className={styles.sideCol}>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h2>AI Verification Score</h2>
                            </div>
                            <div className={styles.scoreBody}>
                                <div className={styles.bigScore}>
                                    <span className={styles.scoreNum}>88</span>
                                    <span className={styles.scoreTotal}>/100</span>
                                </div>
                                <p className={styles.scoreBadge}>High Potential</p>
                                <div className={styles.scoreDecomposition}>
                                    <div className={styles.scoreRow}>
                                        <span>Social Impact</span>
                                        <span>95%</span>
                                    </div>
                                    <div className={styles.scoreRow}>
                                        <span>Financial Viability</span>
                                        <span>82%</span>
                                    </div>
                                    <div className={styles.scoreRow}>
                                        <span>Risk Level</span>
                                        <span style={{ color: 'var(--green)' }}>Low</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.panel} ${styles.riskPanel}`}>
                            <div className={styles.panelHeader}>
                                <h2><AlertCircle size={18} /> Fraud Detection Analysis</h2>
                            </div>
                            <div className={styles.riskBody}>
                                <div className={styles.checkItem}>
                                    <CheckCircle size={16} color="var(--green)" />
                                    <span>No duplicate names found in other grants</span>
                                </div>
                                <div className={styles.checkItem}>
                                    <CheckCircle size={16} color="var(--green)" />
                                    <span>Phone number verified (since 2018)</span>
                                </div>
                                <div className={styles.checkItem}>
                                    <CheckCircle size={16} color="var(--green)" />
                                    <span>Physical site verified via Geo-tag</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
