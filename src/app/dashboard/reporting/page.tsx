"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AssignedProjectsList from "@/components/dashboard/reporting/AssignedProjectsList";
import SubmissionForm from "@/components/dashboard/reporting/SubmissionForm";
import RecentSubmissions from "@/components/dashboard/reporting/RecentSubmissions";
import styles from "./Reporting.module.css";

export default function ReportingPage() {
    const [selectedProjectId, setSelectedProjectId] = useState<string>("PRJ-9011");

    return (
        <DashboardLayout>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Constituency Reporting Portal</h1>
                    <p className={styles.subtitle}>Submit project updates, financial utilization, and photographic evidence.</p>
                </div>
            </div>

            <div className={styles.grid}>
                {/* Left Column: Context & History */}
                <div className={styles.leftColumn}>
                    <div className={styles.panel}>
                        <AssignedProjectsList
                            selectedProjectId={selectedProjectId}
                            onSelect={setSelectedProjectId}
                        />
                    </div>
                    <div className={`${styles.panel} ${styles.historyPanel}`}>
                        <RecentSubmissions projectId={selectedProjectId} />
                    </div>
                </div>

                {/* Right Column: Submission Form */}
                <div className={styles.rightColumn}>
                    <div className={styles.panel}>
                        <SubmissionForm projectId={selectedProjectId} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
