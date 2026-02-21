"use client";

import { Bell, Search, Menu, User } from "lucide-react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

interface HeaderProps {
    onMenuClick: () => void;
    user?: {
        name: string;
        role: string;
    };
    context?: string;
}

export default function Header({ 
    onMenuClick,
    user = { name: "Director PDU", role: "Executive" },
    context = "Dashboard"
}: HeaderProps) {
    const pathname = usePathname();

    // Simple breadcrumb logic based on pathname
    const pathParts = pathname.split('/').filter(Boolean);
    const title = pathParts.length > 1
        ? pathParts[1].charAt(0).toUpperCase() + pathParts[1].slice(1).replace("-", " ")
        : (context === "Constituency" ? "Overview" : "Executive Overview");

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <button className={styles.menuBtn} onClick={onMenuClick}>
                    <Menu size={20} />
                </button>
                <div className={styles.breadcrumb}>
                    <span className={styles.context}>{context}</span>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{title}</span>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.searchBox}>
                    <Search size={16} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className={styles.searchInput}
                    />
                </div>

                <button className={styles.iconBtn}>
                    <Bell size={18} />
                    <span className={styles.notificationDot} />
                </button>

                <div className={styles.profile}>
                    <div className={styles.avatar}>
                        <User size={18} />
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{user.name}</span>
                        <span className={styles.userRole}>{user.role}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
