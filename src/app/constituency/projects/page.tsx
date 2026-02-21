"use client"

import ConstituencyLayout from "@/components/constituency/ConstituencyLayout";
import styles from "./MyProjects.module.css";
import { Search, Filter, MoreVertical, FileText } from "lucide-react";
import Link from "next/link";

const mockLocalProjects = [
    { id: 'CDF-24-001', name: 'Matero Level 1 Hospital Expansion', sector: 'Health', budget: 'ZMW 5.2M', phase: 'Construction', status: 'On Track', lastUpdate: '2h ago' },
    { id: 'CDF-24-042', name: 'Zingalume Market Shelter', sector: 'Commerce', budget: 'ZMW 850K', phase: 'Procurement', status: 'Pending Funds', lastUpdate: '1d ago' },
    { id: 'CDF-23-118', name: 'George Clinic Water Reticulation', sector: 'WASH', budget: 'ZMW 1.1M', phase: 'Planning', status: 'Blocked', lastUpdate: '12d ago' },
    { id: 'CDF-24-099', name: 'Desai Community School Desks', sector: 'Education', budget: 'ZMW 300K', phase: 'Delivery', status: 'On Track', lastUpdate: '3d ago' },
    { id: 'CDF-24-105', name: 'Lilanda Road Drainage Clearance', sector: 'Infrastructure', budget: 'ZMW 1.8M', phase: 'Construction', status: 'At Risk', lastUpdate: '5d ago' },
];

export default function MyProjectsPage() {
    return (
        <ConstituencyLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>My Constituency Projects</h1>
                    <p className={styles.subtitle}>Track and update CDF and National projects active in your ward.</p>
                </div>

                <div className={styles.toolbar}>
                    <div className={styles.searchBox}>
                        <Search size={18} className={styles.searchIcon} />
                        <input type="text" placeholder="Search by Project ID or Name..." className={styles.searchInput} />
                    </div>

                    <div className={styles.filters}>
                        <button className={styles.filterBtn}><Filter size={16} /> Filter by Sector</button>
                        <button className={styles.filterBtn}>Status: All</button>
                    </div>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.projectTable}>
                        <thead>
                            <tr>
                                <th>Project ID</th>
                                <th>Project Name</th>
                                <th>Sector</th>
                                <th>Budget Allocation</th>
                                <th>Current Phase</th>
                                <th>Status</th>
                                <th>Last Update</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockLocalProjects.map(p => (
                                <tr key={p.id}>
                                    <td className={styles.cellId}>{p.id}</td>
                                    <td className={styles.cellName}>{p.name}</td>
                                    <td>{p.sector}</td>
                                    <td className={styles.cellBudget}>{p.budget}</td>
                                    <td>{p.phase}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[p.status.replace(' ', '')]}`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className={styles.cellTime}>{p.lastUpdate}</td>
                                    <td className={styles.cellActions}>
                                        <Link href={`/constituency/report?id=${p.id}`} className={styles.actionLink}>
                                            <FileText size={16} /> Update
                                        </Link>
                                        <button className={styles.iconBtn}><MoreVertical size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ConstituencyLayout>
    );
}
