import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICards from "@/components/dashboard/KPICards";
import ExecutiveMap from "@/components/dashboard/ExecutiveMap";
import SectorBreakdown from "@/components/dashboard/SectorBreakdown";
import AlertsFeed from "@/components/dashboard/AlertsFeed";
import styles from "./Dashboard.module.css";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Welcome back, Director</h1>
                    <p className={styles.subtitle}>Here is the national delivery status for {new Date().toLocaleDateString("en-ZM", { day: "numeric", month: "long", year: "numeric" })}.</p>
                </div>
                <div className={styles.actions}>
                    <button className="btn-ghost">Export Report</button>
                    <button className="btn-primary">New Action Directive</button>
                </div>
            </div>

            <KPICards />

            <div className={styles.grid}>
                <div className={styles.mainSpan}>
                    <ExecutiveMap />
                </div>

                <div className={styles.sideSpan}>
                    <AlertsFeed />
                </div>

                <div className={styles.fullSpan}>
                    <SectorBreakdown />
                </div>
            </div>
        </DashboardLayout>
    );
}
