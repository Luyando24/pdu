"use client";

import { useState } from "react";
import Sidebar, { NavItem } from "../dashboard/Sidebar";
import Header from "../dashboard/Header";
import styles from "./CouncilLayout.module.css";
import { 
    LayoutDashboard, 
    FileText, 
    Briefcase, 
    FolderKanban, 
    DollarSign, 
    Store, 
    MessageSquare, 
    BarChart2, 
    Settings 
} from "lucide-react";

const councilNavItems: NavItem[] = [
    { name: "Dashboard", href: "/council/dashboard", icon: LayoutDashboard },
    { name: "CDF Management", href: "/council/cdf", icon: FileText },
    { name: "Jobs & Opportunities", href: "/council/jobs", icon: Briefcase },
    { name: "Projects", href: "/council/projects", icon: FolderKanban },
    { name: "Revenue", href: "/council/revenue", icon: DollarSign },
    { name: "Businesses", href: "/council/businesses", icon: Store },
    { name: "Citizen Engagement", href: "/council/engagement", icon: MessageSquare },
    { name: "Analytics", href: "/council/analytics", icon: BarChart2 },
    { name: "Settings", href: "/council/settings", icon: Settings },
];

interface CouncilLayoutProps {
    children: React.ReactNode;
}

export default function CouncilLayout({ children }: CouncilLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={styles.layout}>
            <Sidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)}
                navItems={councilNavItems}
                brandTitle="Solwezi Council"
                brandSubtitle="Municipal Digital Hub"
            />

            <div className={styles.main}>
                <Header 
                    onMenuClick={() => setSidebarOpen(true)}
                    user={{ name: "Town Clerk", role: "Solwezi Municipal Council" }}
                    context="Council OS"
                />
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}
