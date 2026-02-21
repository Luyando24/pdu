"use client"

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SettingsSidebar from "@/components/dashboard/settings/SettingsSidebar";
import GeneralSettings from "@/components/dashboard/settings/GeneralSettings";
import NotificationSettings from "@/components/dashboard/settings/NotificationSettings";
import styles from "./Settings.module.css";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<"general" | "notifications" | "security">("general");

    return (
        <DashboardLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Platform Settings</h1>
                    <p className={styles.subtitle}>Configure global preferences and system integrations.</p>
                </div>

                <div className={styles.contentWrap}>
                    <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />

                    <div className={styles.mainContent}>
                        {activeTab === "general" && <GeneralSettings />}
                        {activeTab === "notifications" && <NotificationSettings />}
                        {activeTab === "security" && (
                            <div className={styles.placeholder}>
                                <h3>Security Settings</h3>
                                <p>MFA and Session management settings will appear here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
