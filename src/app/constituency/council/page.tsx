"use client";

import ConstituencyLayout from "@/components/constituency/ConstituencyLayout";
import styles from "@/components/constituency/CouncilModule.module.css";
import { Users, Calendar, FileText, Download, UserPlus, MoreVertical } from "lucide-react";

const MEMBERS = [
    { id: 1, name: "Hon. Grace Njobvu", role: "Mayor / MP", ward: "Matero", initials: "GN" },
    { id: 2, name: "Cllr. Moses Banda", role: "Deputy Mayor", ward: "Kapwepwe", initials: "MB" },
    { id: 3, name: "Cllr. Sarah Phiri", role: "Committee Chair", ward: "Lima", initials: "SP" },
    { id: 4, name: "Cllr. John Lungu", role: "Member", ward: "Muchinga", initials: "JL" },
    { id: 5, name: "Cllr. Mary Tembo", role: "Member", ward: "Desai", initials: "MT" },
    { id: 6, name: "Cllr. Peter Chanda", role: "Member", ward: "Zingalume", initials: "PC" },
];

const MEETINGS = [
    { id: 1, title: "Quarterly Council Meeting", date: "24", month: "Mar", type: "Full Council", status: "Upcoming" },
    { id: 2, title: "Planning & Development Committee", date: "15", month: "Mar", type: "Committee", status: "Upcoming" },
    { id: 3, title: "Budget & Finance Review", date: "02", month: "Mar", type: "Special", status: "Completed" },
    { id: 4, title: "Health & Environment Session", date: "22", month: "Feb", type: "Committee", status: "Completed" },
];

const RESOLUTIONS = [
    { id: "RES-2024-012", title: "Market Shelter Rehabilitation", date: "Feb 10, 2024", status: "Implementation" },
    { id: "RES-2024-009", title: "Street Lighting Expansion Phase 1", date: "Jan 15, 2024", status: "Passed" },
    { id: "RES-2023-142", title: "Community School Desk Procurement", date: "Dec 05, 2023", status: "Passed" },
];

export default function MunicipalCouncilPage() {
    return (
        <ConstituencyLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Municipal Council Portal</h1>
                    <p className={styles.subtitle}>Matero Constituency Governance & Legislative Oversight</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.leftCol}>
                        {/* Council Members Section */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}><Users size={20} /> Council Members</h2>
                                <button className={styles.iconBtn}><UserPlus size={18} /></button>
                            </div>
                            <div className={styles.membersGrid}>
                                {MEMBERS.map(member => (
                                    <div key={member.id} className={styles.memberCard}>
                                        <div className={styles.avatar}>{member.initials}</div>
                                        <div className={styles.memberInfo}>
                                            <h4>{member.name}</h4>
                                            <p>{member.role} • {member.ward} Ward</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Resolutions Tracker */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}><FileText size={20} /> Council Resolutions Tracker</h2>
                                <button className={styles.iconBtn}><Download size={18} /></button>
                            </div>
                            <table className={styles.resolutionTable}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Resolution Title</th>
                                        <th>Date Passed</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {RESOLUTIONS.map(res => (
                                        <tr key={res.id}>
                                            <td style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{res.id}</td>
                                            <td style={{ fontWeight: 700 }}>{res.title}</td>
                                            <td>{res.date}</td>
                                            <td>
                                                <span className={`${styles.statusBadge} ${res.status === 'Passed' ? styles.statusPassed : styles.statusImplementation}`}>
                                                    {res.status}
                                                </span>
                                            </td>
                                            <td><button className={styles.iconBtn}><MoreVertical size={16} /></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        {/* Meetings & Minutes */}
                        <div className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}><Calendar size={20} /> Meetings & Minutes</h2>
                            </div>
                            <div className={styles.meetingList}>
                                {MEETINGS.map(meeting => (
                                    <div key={meeting.id} className={styles.meetingItem}>
                                        <div className={styles.dateBox}>
                                            <span className={styles.day}>{meeting.date}</span>
                                            <span className={styles.month}>{meeting.month}</span>
                                        </div>
                                        <div className={styles.meetingDetails}>
                                            <span className={`${styles.badge} ${meeting.status === 'Upcoming' ? styles.badgeUpcoming : styles.badgeCompleted}`}>
                                                {meeting.status}
                                            </span>
                                            <h4>{meeting.title}</h4>
                                            <p>{meeting.type} Meeting</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ConstituencyLayout>
    );
}
