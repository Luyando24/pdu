"use client";

import { Search, Filter, ArrowUpDown, MoreVertical, Building2, MapPin } from "lucide-react";
import styles from "./ProjectsTable.module.css";
import { useState } from "react";

// Mock data
const mockProjects = [
    { id: "PRJ-8842", name: "Choma–Namwala Water Pipeline", sector: "Water & Sanitation", province: "Southern", constituency: "Choma Central", budget: "K 12.4M", status: "Critical", progress: 15, updated: "2h ago" },
    { id: "PRJ-9011", name: "Mwinilunga District Hospital", sector: "Health", province: "North-Western", constituency: "Mwinilunga", budget: "K 24.1M", status: "Delayed", progress: 38, updated: "5h ago" },
    { id: "PRJ-7721", name: "Kafue Gorge Lower Expansion", sector: "Energy", province: "Lusaka", constituency: "Kafue", budget: "K 450M", status: "On Track", progress: 88, updated: "1d ago" },
    { id: "PRJ-1022", name: "Chipata Agriculture Scheme", sector: "Agriculture", province: "Eastern", constituency: "Chipata Central", budget: "K 8.2M", status: "Delayed", progress: 42, updated: "2d ago" },
    { id: "PRJ-3551", name: "Ndola-Lusaka Dual Carriageway", sector: "Infrastructure", province: "Multiple", constituency: "Multiple", budget: "K 1.2B", status: "On Track", progress: 65, updated: "3d ago" },
    { id: "PRJ-2415", name: "Chinsali Girls Technical STEM", sector: "Education", province: "Muchinga", constituency: "Chinsali", budget: "K 15.6M", status: "Completed", progress: 100, updated: "1w ago" },
    { id: "PRJ-6632", name: "Mumbwa Solar Mini-Grid", sector: "Energy", province: "Central", constituency: "Mumbwa", budget: "K 4.5M", status: "Not Started", progress: 0, updated: "1w ago" },
    { id: "PRJ-8819", name: "Mongu Toll Plaza Upgrade", sector: "Infrastructure", province: "Western", constituency: "Mongu Central", budget: "K 9.1M", status: "On Track", progress: 54, updated: "2w ago" },
];

export default function ProjectsTable({ onSelectProject }: { onSelectProject: (id: string) => void }) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className={styles.tableContainer}>
            {/* Toolbar */}
            <div className={styles.toolbar}>
                <div className={styles.searchBox}>
                    <Search size={16} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search projects by name, ID, or location..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.filters}>
                    <button className={styles.filterBtn}>
                        <Filter size={14} />
                        <span>Sector</span>
                    </button>
                    <button className={styles.filterBtn}>
                        <Filter size={14} />
                        <span>Province</span>
                    </button>
                    <button className={styles.filterBtn}>
                        <Filter size={14} />
                        <span>Status</span>
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Project Details</th>
                            <th>Location</th>
                            <th>Budget</th>
                            <th>
                                <div className={styles.sortableHeader}>
                                    Status <ArrowUpDown size={12} />
                                </div>
                            </th>
                            <th>Last Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockProjects.map((project) => (
                            <tr
                                key={project.id}
                                className={styles.row}
                                onClick={() => onSelectProject(project.id)}
                            >
                                <td className={styles.idCell}>{project.id}</td>
                                <td>
                                    <div className={styles.projectCell}>
                                        <span className={styles.projectName}>{project.name}</span>
                                        <div className={styles.sectorWrap}>
                                            <Building2 size={12} />
                                            <span>{project.sector}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.locationCell}>
                                        <MapPin size={12} />
                                        <span>{project.constituency}, {project.province}</span>
                                    </div>
                                </td>
                                <td className={styles.budgetCell}>{project.budget}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles[project.status.replace(" ", "")]}`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td className={styles.updatedCell}>{project.updated}</td>
                                <td>
                                    <button className={styles.actionBtn}>
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination (Mock) */}
            <div className={styles.pagination}>
                <span className={styles.pageInfo}>Showing 1 to 8 of 2,847 projects</span>
                <div className={styles.pageControls}>
                    <button className={styles.pageBtn} disabled>Previous</button>
                    <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                    <button className={styles.pageBtn}>2</button>
                    <button className={styles.pageBtn}>3</button>
                    <span className={styles.pageEllipsis}>...</span>
                    <button className={styles.pageBtn}>Next</button>
                </div>
            </div>
        </div>
    );
}
