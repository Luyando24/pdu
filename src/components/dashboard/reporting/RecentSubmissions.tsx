import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import styles from "./RecentSubmissions.module.css";

// Mock history data
const mockHistory = [
    { id: "REP-1049", date: "14 Oct 2025", status: "Verified", author: "Eng. Phiri" },
    { id: "REP-0922", date: "02 Sep 2025", status: "Pending Review", author: "Eng. Phiri" },
    { id: "REP-0814", date: "15 Aug 2025", status: "Flagged", author: "SysAdmin" }
];

export default function RecentSubmissions({ projectId }: { projectId: string }) {
    if (!projectId) return null;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Submission History</h3>

            <div className={styles.timeline}>
                {mockHistory.map((report, index) => (
                    <div key={report.id} className={styles.item}>
                        <div className={styles.indicatorWrap}>
                            <div className={`${styles.dot} ${styles[report.status.replace(" ", "")]}`} />
                            {index !== mockHistory.length - 1 && <div className={styles.line} />}
                        </div>

                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.date}>{report.date}</span>
                                <span className={styles.badge}>{report.id}</span>
                            </div>
                            <div className={styles.meta}>
                                Submitted by {report.author}
                            </div>
                            <div className={`${styles.statusLabel} ${styles[report.status.replace(" ", "")]}`}>
                                {report.status === "Verified" && <CheckCircle2 size={12} />}
                                {report.status === "Pending Review" && <Clock size={12} />}
                                {report.status === "Flagged" && <AlertCircle size={12} />}
                                {report.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.viewAll}>View Full Log</button>
        </div>
    );
}
