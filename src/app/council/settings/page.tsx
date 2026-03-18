"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./Settings.module.css";
import { 
    Users, 
    Shield, 
    Lock, 
    Bell, 
    Eye, 
    UserPlus, 
    MoreVertical,
    CheckCircle2,
    Settings as SettingsIcon,
    Smartphone,
    Globe
} from "lucide-react";

const ROLES = [
    { name: "Admin", users: 2, permissions: "Full Access", color: "#ef4444" },
    { name: "Finance Officer", users: 4, permissions: "Revenue & CDF", color: "#3b82f6" },
    { name: "Project Manager", users: 12, permissions: "Projects & Feed", color: "#10b981" },
    { name: "Public Viewer", users: "All Citizens", permissions: "Read-only", color: "#64748b" },
];

export default function AdminSettingsPage() {
    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Admin & System Settings</h1>
                        <p className={styles.subtitle}>Configure user roles, permissions, and global council preferences.</p>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    {/* Role Management */}
                    <div className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <h2><Shield size={20} color="var(--blue-accent)" /> User Roles & Permissions</h2>
                            <button className={styles.addBtn}><UserPlus size={16} /> Add Role</button>
                        </div>
                        <div className={styles.roleList}>
                            {ROLES.map((role, idx) => (
                                <div key={idx} className={styles.roleCard}>
                                    <div className={styles.roleHeader}>
                                        <div className={styles.roleIcon} style={{ background: `${role.color}15`, color: role.color }}>
                                            <Users size={18} />
                                        </div>
                                        <div className={styles.roleTitle}>
                                            <h3>{role.name}</h3>
                                            <span>{role.users} Users assigned</span>
                                        </div>
                                        <button className={styles.iconBtn}><MoreVertical size={16} /></button>
                                    </div>
                                    <div className={styles.roleFooter}>
                                        <span className={styles.permLabel}>Permissions:</span>
                                        <span className={styles.permVal}>{role.permissions}</span>
                                    </div>
                                    <div className={styles.permGrid}>
                                        <div className={styles.permItem}><CheckCircle2 size={14} color="#10b981" /> Dashboard Access</div>
                                        <div className={styles.permItem}><CheckCircle2 size={14} color="#10b981" /> Audit Logs</div>
                                        {role.name === 'Admin' && <div className={styles.permItem}><CheckCircle2 size={14} color="#10b981" /> System Config</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* System Configuration */}
                    <div className={styles.sideCol}>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h2><SettingsIcon size={20} /> Council Configuration</h2>
                            </div>
                            <div className={styles.configBody}>
                                <div className={styles.configOption}>
                                    <div className={styles.configInfo}>
                                        <Globe size={18} />
                                        <div>
                                            <h4>Public Transparency</h4>
                                            <p>Allow citizens to view project progress without login.</p>
                                        </div>
                                    </div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" defaultChecked />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>

                                <div className={styles.configOption}>
                                    <div className={styles.configInfo}>
                                        <Lock size={18} />
                                        <div>
                                            <h4>Secure Audit Log</h4>
                                            <p>Require 2FA for all administrative changes.</p>
                                        </div>
                                    </div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>

                                <div className={styles.configOption}>
                                    <div className={styles.configInfo}>
                                        <Bell size={18} />
                                        <div>
                                            <h4>SMS Gateway</h4>
                                            <p>Enable automated SMS alerts for project milestones.</p>
                                        </div>
                                    </div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" defaultChecked />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.panel} ${styles.dangerPanel}`}>
                            <div className={styles.panelHeader}>
                                <h2 style={{ color: 'var(--red)' }}><AlertTriangle size={18} /> Danger Zone</h2>
                            </div>
                            <div className={styles.configBody}>
                                <button className={styles.dangerBtn}>Archive All 2023 Reports</button>
                                <button className={styles.dangerBtn}>Reset System Logs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}

const AlertTriangle = ({ size, ...props }: any) => (
    <svg 
        width={size} height={size} viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
        strokeLinejoin="round" {...props}>
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
    </svg>
);
