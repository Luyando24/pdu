"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProjectsTable from "@/components/dashboard/projects/ProjectsTable";
import ProjectDetailsPanel from "@/components/dashboard/projects/ProjectDetailsPanel";
import styles from "./Projects.module.css";

export default function ProjectsPage() {
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    return (
        <DashboardLayout>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>National Projects Console</h1>
                    <p className={styles.subtitle}>View, filter, and manage all active development projects.</p>
                </div>
                <div className={styles.actions}>
                    <button className="btn-primary">Add New Project</button>
                </div>
            </div>

            <div className={styles.container}>
                <div className={`${styles.tableWrap} ${selectedProjectId ? styles.panelOpen : ""}`}>
                    <ProjectsTable onSelectProject={setSelectedProjectId} />
                </div>

                <ProjectDetailsPanel
                    projectId={selectedProjectId}
                    onClose={() => setSelectedProjectId(null)}
                />
            </div>
        </DashboardLayout>
    );
}
