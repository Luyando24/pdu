"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./Engagement.module.css";
import { 
    MessageSquare, 
    Bell, 
    Send, 
    MapPin, 
    AlertTriangle, 
    CheckCircle, 
    Clock, 
    Search, 
    Filter,
    Smartphone,
    Mail
} from "lucide-react";
import { useState } from "react";

const COMPLAINTS = [
    { id: "C-101", type: "Roads", location: "Kabitaka Dr", status: "Open", message: "Large pothole causing traffic near the market.", date: "1h ago" },
    { id: "C-102", type: "Water", location: "Solwezi Central", status: "In Progress", message: "Pipe burst on main street.", date: "4h ago" },
    { id: "C-103", type: "Waste", location: "Kyawama", status: "Resolved", message: "Trash hasn't been collected in 3 days.", date: "1d ago" },
    { id: "C-104", type: "Lighting", location: "Muliashi", status: "Open", message: "Street lights out near the school.", date: "2d ago" },
];

export default function CitizenEngagementPage() {
    const [complaintFilter, setComplaintFilter] = useState("All");

    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Citizen Engagement</h1>
                        <p className={styles.subtitle}>Direct communication channel for city residents and council updates.</p>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    {/* Complaints Section */}
                    <div className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <h2><AlertTriangle size={20} color="var(--gold)" /> Complaints Dashboard</h2>
                            <div className={styles.headerActions}>
                                <div className={styles.searchBox}>
                                    <Search size={16} />
                                    <input type="text" placeholder="Search stories..." />
                                </div>
                                <button className={styles.filterBtn}><Filter size={16} /></button>
                            </div>
                        </div>

                        <div className={styles.complaintList}>
                            {COMPLAINTS.map((c) => (
                                <div key={c.id} className={styles.complaintCard}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.typeTag}>{c.type}</div>
                                        <span className={`${styles.statusBadge} ${styles[c.status.toLowerCase().replace(" ", "")]}`}>
                                            {c.status}
                                        </span>
                                    </div>
                                    <p className={styles.message}>"{c.message}"</p>
                                    <div className={styles.cardFooter}>
                                        <span><MapPin size={12} /> {c.location}</span>
                                        <span><Clock size={12} /> {c.date}</span>
                                    </div>
                                    <div className={styles.cardActions}>
                                        <button className={styles.actionBtn}>Assign Crew</button>
                                        <button className={styles.actionBtn}>Contact Citizen</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Announcement Tool */}
                    <div className={styles.sideCol}>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h2><Bell size={20} color="var(--blue-accent)" /> Announcement Tool</h2>
                            </div>
                            <div className={styles.toolBody}>
                                <p className={styles.toolDesc}>Broadcast emergency updates or council news to residents via Push & SMS.</p>
                                
                                <div className={styles.formGroup}>
                                    <label>Message Title</label>
                                    <input type="text" placeholder="E.g. Scheduled Maintenance" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Announcement Body</label>
                                    <textarea placeholder="Write your message here..." rows={4}></textarea>
                                </div>

                                <div className={styles.channelRow}>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox" defaultChecked />
                                        <Smartphone size={16} /> Push Notification
                                    </label>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox" defaultChecked />
                                        <MessageSquare size={16} /> SMS Broadcast
                                    </label>
                                </div>

                                <button className={styles.sendBtn}>
                                    <Send size={18} /> Send Announcement
                                </button>
                            </div>
                        </div>

                        {/* Polls Placeholder */}
                        <div className={`${styles.panel} ${styles.pollPanel}`}>
                            <div className={styles.panelHeader}>
                                <h2><CheckCircle size={20} color="var(--green)" /> Active Polls</h2>
                            </div>
                            <div className={styles.pollBody}>
                                <div className={styles.pollItem}>
                                    <h4>New Park Location?</h4>
                                    <div className={styles.pollResults}>
                                        <div className={styles.pollOption}>
                                            <span>Muliashi (72%)</span>
                                            <div className={styles.pollBar}><div style={{ width: '72%' }} /></div>
                                        </div>
                                        <div className={styles.pollOption}>
                                            <span>Kabitaka (28%)</span>
                                            <div className={styles.pollBar}><div style={{ width: '28%' }} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
