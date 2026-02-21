"use client";

import { useState } from "react";
import Sidebar, { NavItem } from "../dashboard/Sidebar";
import Header from "../dashboard/Header";
import styles from "./ConstituencyLayout.module.css";
import { Home, FolderKanban, FileEdit, Settings, Users } from "lucide-react";

const constituencyNavItems: NavItem[] = [
    { name: "Overview", href: "/constituency", icon: Home },
    { name: "My Projects", href: "/constituency/projects", icon: FolderKanban },
    { name: "Users & Roles", href: "/constituency/users", icon: Users },
    { name: "Submit Report", href: "/constituency/report", icon: FileEdit },
    { name: "Settings", href: "/constituency/settings", icon: Settings },
];

interface ConstituencyLayoutProps {
    children: React.ReactNode;
}

export default function ConstituencyLayout({ children }: ConstituencyLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={styles.layout}>
            <Sidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)}
                navItems={constituencyNavItems}
                brandTitle="CDF Monitor"
                brandSubtitle="Constituency Portal"
            />

            <div className={styles.main}>
                <Header 
                    onMenuClick={() => setSidebarOpen(true)}
                    user={{ name: "Grace Njobvu", role: "MP Matero" }}
                    context="Constituency"
                />
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}
