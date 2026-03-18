import { Search, Filter, Shield, MoreVertical, MoreHorizontal } from "lucide-react";
import styles from "./UsersDirectory.module.css";
import { useState } from "react";

interface User {
    id: string;
    name: string;
    role: string;
    location: string;
    status: "Active" | "Pending" | "Suspended";
    lastActive: string;
    initials: string;
}

const MOCK_USERS: User[] = [
    { id: "U-1001", name: "Mwansa Chomba", role: "Executive Director", location: "National PDU", status: "Active", lastActive: "10 mins ago", initials: "MC" },
    { id: "U-1002", name: "Sarah Lungu", role: "Provincial Analyst", location: "Lusaka Province", status: "Active", lastActive: "2 hours ago", initials: "SL" },
    { id: "U-1003", name: "David Banda", role: "District Commissioner", location: "Choma District", status: "Active", lastActive: "1 day ago", initials: "DB" },
    { id: "U-1004", name: "Grace Njobvu", role: "Constituency Officer", location: "Matero Constituency", status: "Pending", lastActive: "Never", initials: "GN" },
    { id: "U-1005", name: "Elias Tembo", role: "System Admin", location: "National PDU", status: "Active", lastActive: "Just now", initials: "ET" },
    { id: "U-1006", name: "Joseph Phiri", role: "Contractor Rep", location: "Copperbelt", status: "Suspended", lastActive: "2 weeks ago", initials: "JP" },
    { id: "U-1007", name: "Mary Musonda", role: "Provincial Minister", location: "Southern Province", status: "Active", lastActive: "5 hours ago", initials: "MM" },
    { id: "U-1008", name: "Peter Mulenga", role: "Data Entry Clerk", location: "Ndola District", status: "Active", lastActive: "1 hour ago", initials: "PM" },
];

interface UsersDirectoryProps {
    onSelectUser: (userId: string) => void;
    selectedUser: string | null;
}

export default function UsersDirectory({ onSelectUser, selectedUser }: UsersDirectoryProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = MOCK_USERS.filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInvite = () => {
        const email = prompt("Enter the email address of the user you want to invite:");
        if (email) {
            alert(`Invitation sent to ${email}. They will receive an email shortly with instructions to set up their account.`);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleWrap}>
                    <h1 className={styles.title}>Users & Roles</h1>
                    <p className={styles.subtitle}>Manage platform access and jurisdictional hierarchies.</p>
                </div>
                <button className={styles.addBtn} onClick={handleInvite}>
                    <Shield size={14} /> Invite User
                </button>
            </div>

            <div className={styles.toolbar}>
                <div className={styles.searchBox}>
                    <Search size={16} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search users by name, role, or ID..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className={styles.filters}>
                    <div className={styles.filterBtn}>
                        <Filter size={14} /> Role
                    </div>
                    <div className={styles.filterBtn}>
                        <Filter size={14} /> Location
                    </div>
                    <div className={styles.filterBtn}>
                        <Filter size={14} /> Status
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {filteredUsers.map(user => (
                    <div
                        key={user.id}
                        className={`${styles.userCard} ${selectedUser === user.id ? styles.selected : ""}`}
                        onClick={() => onSelectUser(user.id)}
                    >
                        <div className={styles.cardHeader}>
                            <div className={`${styles.avatar} ${styles[user.status]}`}>
                                {user.initials}
                            </div>
                            <button className={styles.moreBtn}>
                                <MoreHorizontal size={16} />
                            </button>
                        </div>

                        <div className={styles.userInfo}>
                            <h3 className={styles.userName}>{user.name}</h3>
                            <span className={styles.userRole}>{user.role}</span>
                        </div>

                        <div className={styles.cardFooter}>
                            <div className={styles.footerItem}>
                                <span className={styles.fLabel}>Location</span>
                                <span className={styles.fVal}>{user.location}</span>
                            </div>
                            <div className={styles.footerItem}>
                                <span className={styles.fLabel}>Status</span>
                                <span className={`${styles.statusBadge} ${styles[user.status]}`}>{user.status}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredUsers.length === 0 && (
                    <div className={styles.emptyState}>No users found matching "{searchTerm}"</div>
                )}
            </div>
        </div>
    );
}
