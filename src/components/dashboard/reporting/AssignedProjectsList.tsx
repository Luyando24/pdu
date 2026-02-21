"use client";

import { Building2, MapPin } from "lucide-react";
import styles from "./AssignedProjectsList.module.css";

// Mock data
const mockProjects = [
    { id: "PRJ-9011", name: "Mwinilunga District Hospital", sector: "Health", location: "Mwinilunga, North-Western", status: "Delayed" },
    { id: "PRJ-8842", name: "Choma–Namwala Water Pipeline", sector: "Water & Sanitation", location: "Choma, Southern", status: "Critical" },
    { id: "PRJ-3551", name: "Ndola-Lusaka Dual Carriageway", sector: "Infrastructure", location: "Multiple", status: "On Track" },
];

interface AssignedProjectsListProps {
    selectedProjectId: string;
    onSelect: (id: string) => void;
}

export default function AssignedProjectsList({ selectedProjectId, onSelect }: AssignedProjectsListProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Assigned Projects</h2>
            <p className={styles.sectionDesc}>Select a project to submit an update report.</p>

            <div className={styles.list}>
                {mockProjects.map(project => {
                    const isSelected = selectedProjectId === project.id;
                    return (
                        <div
                            key={project.id}
                            className={`${styles.card} ${isSelected ? styles.selected : ""}`}
                            onClick={() => onSelect(project.id)}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.id}>{project.id}</span>
                                <span className={`${styles.status} ${styles[project.status.replace(" ", "")]}`}>
                                    {project.status}
                                </span>
                            </div>
                            <h3 className={styles.name}>{project.name}</h3>
                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <Building2 size={12} />
                                    <span>{project.sector}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <MapPin size={12} />
                                    <span>{project.location}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
