"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, FileText, Map, BarChart3, Users, Settings, X, LogOut, LucideIcon, Wallet } from "lucide-react";
import styles from "./Sidebar.module.css";
import ThemeToggle from "../ThemeToggle";

export interface NavItem {
    name: string;
    href: string;
    icon: LucideIcon;
    badge?: string | number;
}

const defaultNavItems: NavItem[] = [
    { name: "Executive Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "National Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Constituency Reporting", href: "/dashboard/reporting", icon: FileText },
    { name: "Budget Allocation", href: "/dashboard/budget", icon: Wallet },
    { name: "Geo Intelligence", href: "/dashboard/map", icon: Map },
    { name: "Performance Scorecards", href: "/dashboard/scorecards", icon: BarChart3 },
    { name: "Users & Roles", href: "/dashboard/users", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    navItems?: NavItem[];
    brandTitle?: string;
    brandSubtitle?: string;
}

export default function Sidebar({
    isOpen,
    onClose,
    navItems = defaultNavItems,
    brandTitle = "ZNDMP",
    brandSubtitle = "Executive Dashboard"
}: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} onClick={onClose} />

            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
                <div className={styles.header}>
                    <div className={styles.brand}>
                        <div className={styles.logoIcon}>
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="#198754" />
                                <path d="M8 16h16M8 10h16M8 22h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="24" cy="22" r="3.5" fill="#F5A623" />
                            </svg>
                        </div>
                        <div>
                            <span className={styles.brandName}>{brandTitle}</span>
                            <span className={styles.brandSub}>{brandSubtitle}</span>
                        </div>
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <nav className={styles.nav}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                                onClick={() => onClose()}
                            >
                                <Icon size={18} className={styles.navIcon} />
                                <span>{item.name}</span>
                                {item.badge && <span className={styles.badge}>{item.badge}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.footer}>
                    <div className={styles.themeWrap}>
                        <span className={styles.themeLabel}>Theme</span>
                        <ThemeToggle />
                    </div>
                    <Link href="/" className={styles.logoutBtn}>
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
