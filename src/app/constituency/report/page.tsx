"use client"

import ConstituencyLayout from "@/components/constituency/ConstituencyLayout";
import SubmissionForm from "@/components/dashboard/reporting/SubmissionForm";
import styles from "./ReportPage.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReportContent() {
    const searchParams = useSearchParams();
    const projectId = searchParams?.get('id') || 'Select a Project';

    return (
        <div className={styles.container}>
            <div className={styles.topNav}>
                <Link href="/constituency/projects" className={styles.backLink}>
                    <ArrowLeft size={16} /> Back to My Projects
                </Link>
            </div>

            <div className={styles.header}>
                <h1 className={styles.title}>Submit Field Report</h1>
                <p className={styles.subtitle}>
                    Updating physical progress and attaching photographic evidence for <strong>{projectId}</strong>.
                </p>
            </div>

            <div className={styles.formWrapper}>
                <SubmissionForm projectId={projectId} />
            </div>
        </div>
    );
}

export default function ConstituencyReportPage() {
    return (
        <ConstituencyLayout>
            <Suspense fallback={<div className={styles.container}>Loading form...</div>}>
                <ReportContent />
            </Suspense>
        </ConstituencyLayout>
    );
}
