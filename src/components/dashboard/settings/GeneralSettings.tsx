import styles from "../../../app/dashboard/settings/Settings.module.css";

export default function GeneralSettings() {
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Platform Configuration</h2>
            <p className={styles.sectionDesc}>Manage global settings for the ZNDMP platform.</p>

            <div className={styles.formGroup}>
                <label className={styles.label}>System Name</label>
                <input
                    type="text"
                    className={styles.input}
                    defaultValue="Zambia National Delivery & Monitoring Platform"
                />
            </div>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Active Fiscal Year</label>
                    <select className={styles.select} defaultValue="2025">
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Default Currency</label>
                    <select className={styles.select} defaultValue="ZMW" disabled>
                        <option value="ZMW">ZMW - Zambian Kwacha</option>
                    </select>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Support Email</label>
                <input
                    type="email"
                    className={styles.input}
                    defaultValue="support@pdu.gov.zm"
                    placeholder="support@example.com"
                />
                <span className={styles.hint}>Used for system-generated help links and footers.</span>
            </div>

            <div className={styles.divider} />

            <h3 className={styles.subHeading}>Regional Defaults</h3>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Default Map Province</label>
                    <select className={styles.select} defaultValue="all">
                        <option value="all">National (All)</option>
                        <option value="lusaka">Lusaka</option>
                        <option value="copperbelt">Copperbelt</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Distance Unit</label>
                    <select className={styles.select} defaultValue="km">
                        <option value="km">Kilometers (km)</option>
                        <option value="m">Miles (m)</option>
                    </select>
                </div>
            </div>

            <div className={styles.actionsBox}>
                <button className={styles.saveBtn}>Save General Settings</button>
            </div>
        </div>
    );
}
