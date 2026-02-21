import { Mail, Smartphone, AlertTriangle } from "lucide-react";
import styles from "../../../app/dashboard/settings/Settings.module.css";
import { useState } from "react";

export default function NotificationSettings() {
    const [prefs, setPrefs] = useState({
        atRiskEmail: true,
        atRiskSms: true,
        newReportEmail: false,
        newReportSms: false,
        weeklyDigest: true,
    });

    const togglePref = (key: keyof typeof prefs) => {
        setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Notification Preferences</h2>
            <p className={styles.sectionDesc}>Manage how you receive alerts and system updates.</p>

            <div className={styles.notificationGroup}>
                <div className={styles.nHeader}>
                    <AlertTriangle size={18} className={styles.iconRed} />
                    <div className={styles.nText}>
                        <h4>Project At-Risk Alerts</h4>
                        <p>Immediate notifications when a project falls behind schedule or encounters critical blockers.</p>
                    </div>
                </div>
                <div className={styles.nControls}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={prefs.atRiskEmail}
                            onChange={() => togglePref('atRiskEmail')}
                        />
                        <Mail size={14} /> Email
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={prefs.atRiskSms}
                            onChange={() => togglePref('atRiskSms')}
                        />
                        <Smartphone size={14} /> SMS
                    </label>
                </div>
            </div>

            <div className={styles.notificationGroup}>
                <div className={styles.nHeader}>
                    <div className={styles.iconSquare}>📝</div>
                    <div className={styles.nText}>
                        <h4>Constituency Reports</h4>
                        <p>Get notified when new field reports are submitted by constituency officers.</p>
                    </div>
                </div>
                <div className={styles.nControls}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={prefs.newReportEmail}
                            onChange={() => togglePref('newReportEmail')}
                        />
                        <Mail size={14} /> Email
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={prefs.newReportSms}
                            onChange={() => togglePref('newReportSms')}
                        />
                        <Smartphone size={14} /> SMS
                    </label>
                </div>
            </div>

            <div className={styles.notificationGroup}>
                <div className={styles.nHeader}>
                    <div className={styles.iconSquare}>📊</div>
                    <div className={styles.nText}>
                        <h4>Weekly Performance Digest</h4>
                        <p>A high-level summary of national project progress sent every Monday morning.</p>
                    </div>
                </div>
                <div className={styles.nControls}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={prefs.weeklyDigest}
                            onChange={() => togglePref('weeklyDigest')}
                        />
                        <Mail size={14} /> Email Only
                    </label>
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.formGroup}>
                <label className={styles.label}>SMS Notification Number</label>
                <input type="tel" className={styles.input} defaultValue="+260 97 123 4567" />
                <span className={styles.hint}>Ensure this number is capable of receiving SMS.</span>
            </div>

            <div className={styles.actionsBox}>
                <button className={styles.saveBtn}>Save Preferences</button>
            </div>

        </div>
    );
}
