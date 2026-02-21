"use client";

import styles from "./DashboardLayout.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={styles.layout}>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className={styles.main}>
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}
