"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import Link from "next/link";
import styles from "./Projects.module.css";
import { 
    Clock, 
    CheckCircle, 
    AlertCircle, 
    Search,
    Filter,
    Plus,
    Eye
} from "lucide-react";

export const PROJECTS = [
    { 
        id: 1, 
        name: "Kyawama Road Upgrade", 
        budget: "ZMW 12.5M", 
        spent: "ZMW 8.2M", 
        contractor: "ZamBuild Ltd", 
        progress: 65, 
        status: "Ongoing",
        ward: "Solwezi Central",
        category: "Infrastructure",
        milestones: [
            { label: "Site Mobilization", date: "Jan 12", done: true },
            { label: "Excavation", date: "Feb 05", done: true },
            { label: "Paving Phase 1", date: "Mar 20", done: false },
        ]
    },
    { 
        id: 2, 
        name: "Matero Central Market Shelter", 
        budget: "ZMW 4.2M", 
        spent: "ZMW 4.2M", 
        contractor: "City Group", 
        progress: 100, 
        status: "Completed",
        ward: "Kabitaka",
        category: "Market",
        milestones: [
            { label: "Foundation", date: "Dec 10", done: true },
            { label: "Roofing", date: "Jan 15", done: true },
            { label: "Commissioning", date: "Feb 28", done: true },
        ]
    },
    { 
        id: 3, 
        name: "George Clinic Water Reticulation", 
        budget: "ZMW 2.8M", 
        spent: "ZMW 1.1M", 
        contractor: "AquaSafe", 
        progress: 30, 
        status: "Delayed",
        ward: "Kyawama",
        category: "Health",
        milestones: [
            { label: "Pipe Procurement", date: "Feb 01", done: true },
            { label: "Installation", date: "Mar 15", done: false },
        ]
    },
];

export default function ProjectTrackingPage() {
    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Project Tracking</h1>
                        <p className={styles.subtitle}>Comprehensive monitoring of Solwezi infrastructure and community development.</p>
                    </div>
                    <div className={styles.headerActions}>
                        <div className={styles.searchBox}>
                            <Search size={18} />
                            <input type="text" placeholder="Search projects..." />
                        </div>
                        <Link href="/council/projects/new" className={styles.newProjectBtn}>
                            <Plus size={18} /> New project
                        </Link>
                    </div>
                </div>

                <div className={styles.tableCard}>
                    {/* Table Filters */}
                    <div className={styles.tableFilters}>
                        <div className={styles.filterGroup}>
                            <button className={styles.filterBtn}><Filter size={14} /> All Wards</button>
                            <button className={styles.filterBtn}><Filter size={14} /> All Status</button>
                            <button className={styles.filterBtn}><Filter size={14} /> Category</button>
                        </div>
                        <span className={styles.resultsCount}>Showing {PROJECTS.length} projects</span>
                    </div>

                    {/* Project Table */}
                    <div className={styles.tableContainer}>
                        <table className={styles.projectTable}>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Ward</th>
                                    <th>Budget</th>
                                    <th>Contractor</th>
                                    <th>Progress</th>
                                    <th>Status</th>
                                    <th className={styles.textCenter}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PROJECTS.map((project) => (
                                    <tr key={project.id}>
                                        <td>
                                            <div className={styles.projectNameCell}>
                                                <span className={styles.projectMainName}>{project.name}</span>
                                                <span className={styles.projectSubName}>{project.category}</span>
                                            </div>
                                        </td>
                                        <td>{project.ward}</td>
                                        <td className={styles.fontBold}>{project.budget}</td>
                                        <td>{project.contractor}</td>
                                        <td>
                                            <div className={styles.progressCell}>
                                                <div className={styles.progressBarMini}>
                                                    <div style={{ 
                                                        width: `${project.progress}%`, 
                                                        background: project.status === 'Delayed' ? 'var(--red)' : project.status === 'Completed' ? 'var(--green)' : 'var(--gold)' 
                                                    }} />
                                                </div>
                                                <span className={styles.progressValue}>{project.progress}%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase()]}`}>
                                                {project.status === 'Ongoing' && <Clock size={12} />}
                                                {project.status === 'Completed' && <CheckCircle size={12} />}
                                                {project.status === 'Delayed' && <AlertCircle size={12} />}
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className={styles.textCenter}>
                                            <Link href={`/council/projects/${project.id}`} className={styles.viewBtn}>
                                                <Eye size={16} /> View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
