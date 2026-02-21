"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal, CheckCircle2, AlertCircle, Lock } from "lucide-react";
import styles from "./BudgetAllocationTable.module.css";

interface BudgetAllocation {
    id: string;
    constituency: string;
    province: string;
    totalAllocation: number;
    disbursed: number;
    utilized: number;
    status: "Approved" | "Pending" | "Frozen";
}

const mockData: BudgetAllocation[] = [
    { id: "C-101", constituency: "Matero", province: "Lusaka", totalAllocation: 28300000, disbursed: 25000000, utilized: 18500000, status: "Approved" },
    { id: "C-102", constituency: "Kabatwe", province: "Lusaka", totalAllocation: 28300000, disbursed: 20000000, utilized: 12000000, status: "Pending" },
    { id: "C-103", constituency: "Choma Central", province: "Southern", totalAllocation: 28300000, disbursed: 28300000, utilized: 26500000, status: "Approved" },
    { id: "C-104", constituency: "Ndola Central", province: "Copperbelt", totalAllocation: 28300000, disbursed: 15000000, utilized: 5000000, status: "Frozen" },
    { id: "C-105", constituency: "Solwezi West", province: "North-Western", totalAllocation: 28300000, disbursed: 28300000, utilized: 22000000, status: "Approved" },
    { id: "C-106", constituency: "Mongu Central", province: "Western", totalAllocation: 28300000, disbursed: 10000000, utilized: 8000000, status: "Pending" },
    { id: "C-107", constituency: "Chipata Central", province: "Eastern", totalAllocation: 28300000, disbursed: 28300000, utilized: 27000000, status: "Approved" },
];

export default function BudgetAllocationTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");

    const filteredData = mockData.filter(item =>
        (item.constituency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.province.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterStatus === "All" || item.status === filterStatus)
    );

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-ZM', { style: 'currency', currency: 'ZMW' }).format(amount);
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case "Approved": return styles.statusApproved;
            case "Pending": return styles.statusPending;
            case "Frozen": return styles.statusFrozen;
            default: return "";
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Allocation Breakdown</div>
                <div className={styles.controls}>
                    <div className={styles.searchBox}>
                        <Search size={16} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search constituency or province..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className={styles.filterBtn}>
                        <Filter size={16} /> Filter
                    </button>
                </div>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Constituency</th>
                            <th>Province</th>
                            <th>Total Allocation</th>
                            <th>Disbursed</th>
                            <th>Utilization</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row) => {
                            const utilPercent = (row.utilized / row.disbursed) * 100;
                            return (
                                <tr key={row.id}>
                                    <td>
                                        <div style={{ fontWeight: 600 }}>{row.constituency}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{row.id}</div>
                                    </td>
                                    <td>{row.province}</td>
                                    <td className={styles.amount}>{formatCurrency(row.totalAllocation)}</td>
                                    <td className={styles.amount}>{formatCurrency(row.disbursed)}</td>
                                    <td>
                                        <div className={styles.utilization}>
                                            <span className={styles.utilText}>{utilPercent.toFixed(1)}%</span>
                                            <div className={styles.progressBar}>
                                                <div 
                                                    className={styles.progressFill} 
                                                    style={{ width: `${utilPercent}%`, backgroundColor: utilPercent > 90 ? 'var(--green)' : utilPercent > 50 ? 'var(--blue)' : 'var(--red)' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`${styles.status} ${getStatusClass(row.status)}`}>
                                            {row.status === "Approved" && <CheckCircle2 size={12} style={{ marginRight: 4 }} />}
                                            {row.status === "Pending" && <AlertCircle size={12} style={{ marginRight: 4 }} />}
                                            {row.status === "Frozen" && <Lock size={12} style={{ marginRight: 4 }} />}
                                            {row.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className={styles.actionBtn}>Manage</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
