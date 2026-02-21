import { X, ShieldAlert, Key, Building, MapPin, CheckCircle2 } from "lucide-react";
import styles from "./RoleManagementPanel.module.css";
import { useState } from "react";

interface RoleManagementPanelProps {
    userId: string | null;
    onClose: () => void;
}

export default function RoleManagementPanel({ userId, onClose }: RoleManagementPanelProps) {
    // Simple local state for toggle switches to make it feel interactive
    const [permissions, setPermissions] = useState({
        viewExecutive: false,
        editProjects: true,
        submitReports: true,
        manageUsers: false,
        approveBudgets: false
    });

    const togglePerm = (key: keyof typeof permissions) => {
        setPermissions(prev => ({ ...prev, [key]: !prev[key] }));
    };

    if (!userId) return null;

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.panel}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Role Management</h2>
                        <p className={styles.subtitle}>ID: {userId}</p>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className={styles.scrollContent}>

                    <div className={styles.section}>
                        <div className={styles.profileCard}>
                            <div className={styles.avatar}>MC</div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.pName}>Mwansa Chomba</h3>
                                <span className={styles.pRole}>Executive Director</span>
                                <span className={styles.pEmail}>m.chomba@pdu.gov.zm</span>
                            </div>
                        </div>
                        <div className={styles.statusBox}>
                            <span className={styles.activeDot} /> Account Active
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Jurisdiction Assignment</h4>
                        <div className={styles.assignmentBlock}>
                            <div className={styles.assignRow}>
                                <Building size={16} className={styles.icon} />
                                <div className={styles.assignDetails}>
                                    <span className={styles.aLabel}>Ministry / Agency</span>
                                    <span className={styles.aVal}>Presidential Delivery Unit</span>
                                </div>
                                <button className={styles.editBtn}>Edit</button>
                            </div>
                            <div className={styles.assignRow}>
                                <MapPin size={16} className={styles.icon} />
                                <div className={styles.assignDetails}>
                                    <span className={styles.aLabel}>Geographic Scope</span>
                                    <span className={styles.aVal}>National (All Provinces)</span>
                                </div>
                                <button className={styles.editBtn}>Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h4 className={styles.sectionTitle}>Access Controls</h4>
                            <ShieldAlert size={16} className={styles.iconMuted} />
                        </div>

                        <div className={styles.togglesList}>
                            <label className={styles.toggleRow}>
                                <div className={styles.toggleInfo}>
                                    <span className={styles.tName}>View Executive Dashboard</span>
                                    <span className={styles.tDesc}>Access high-level KPI summaries and alerts.</span>
                                </div>
                                <input
                                    type="checkbox"
                                    className={styles.toggleInput}
                                    checked={permissions.viewExecutive}
                                    onChange={() => togglePerm('viewExecutive')}
                                />
                                <div className={styles.toggleSwitch} />
                            </label>

                            <label className={styles.toggleRow}>
                                <div className={styles.toggleInfo}>
                                    <span className={styles.tName}>Edit Project Data</span>
                                    <span className={styles.tDesc}>Create, update, or delete national project records.</span>
                                </div>
                                <input
                                    type="checkbox"
                                    className={styles.toggleInput}
                                    checked={permissions.editProjects}
                                    onChange={() => togglePerm('editProjects')}
                                />
                                <div className={styles.toggleSwitch} />
                            </label>

                            <label className={styles.toggleRow}>
                                <div className={styles.toggleInfo}>
                                    <span className={styles.tName}>Submit Field Reports</span>
                                    <span className={styles.tDesc}>Access the Constituency Reporting forms.</span>
                                </div>
                                <input
                                    type="checkbox"
                                    className={styles.toggleInput}
                                    checked={permissions.submitReports}
                                    onChange={() => togglePerm('submitReports')}
                                />
                                <div className={styles.toggleSwitch} />
                            </label>

                            <label className={styles.toggleRow}>
                                <div className={styles.toggleInfo}>
                                    <span className={styles.tName}>Approve Budgets</span>
                                    <span className={styles.tDesc}>Authorize financial disbursements for projects.</span>
                                </div>
                                <input
                                    type="checkbox"
                                    className={styles.toggleInput}
                                    checked={permissions.approveBudgets}
                                    onChange={() => togglePerm('approveBudgets')}
                                />
                                <div className={styles.toggleSwitch} />
                            </label>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Security</h4>
                        <button className={styles.resetBtn}>
                            <Key size={14} /> Send Password Reset Link
                        </button>
                        <button className={styles.suspendBtn}>
                            Suspend Account
                        </button>
                    </div>

                </div>

                <div className={styles.footer}>
                    <button className={styles.saveBtn}>
                        <CheckCircle2 size={16} />
                        Save Changes
                    </button>
                </div>
            </div>
        </>
    );
}
