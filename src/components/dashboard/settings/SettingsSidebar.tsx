import { Settings, Bell, Shield, Webhook } from "lucide-react";
import styles from "./SettingsSidebar.module.css";

interface SettingsSidebarProps {
    activeTab: "general" | "notifications" | "security";
    onTabChange: (tab: "general" | "notifications" | "security") => void;
}

export default function SettingsSidebar({ activeTab, onTabChange }: SettingsSidebarProps) {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.navList}>
                <li>
                    <button
                        className={`${styles.navItem} ${activeTab === 'general' ? styles.active : ''}`}
                        onClick={() => onTabChange('general')}
                    >
                        <Settings size={18} />
                        <span>General Settings</span>
                    </button>
                </li>
                <li>
                    <button
                        className={`${styles.navItem} ${activeTab === 'notifications' ? styles.active : ''}`}
                        onClick={() => onTabChange('notifications')}
                    >
                        <Bell size={18} />
                        <span>Notifications</span>
                    </button>
                </li>
                <li>
                    <button
                        className={`${styles.navItem} ${activeTab === 'security' ? styles.active : ''}`}
                        onClick={() => onTabChange('security')}
                    >
                        <Shield size={18} />
                        <span>Security & MFA</span>
                    </button>
                </li>
                <li>
                    <div className={styles.divider} />
                </li>
                <li>
                    <button className={styles.navItemDisabled} disabled>
                        <Webhook size={18} />
                        <span>API Integrations (Coming Soon)</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
