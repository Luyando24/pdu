"use client";

import { TrendingUp, FolderOpen, AlertOctagon, CheckCircle2 } from "lucide-react";
import styles from "./KPICards.module.css";

const kpis = [
    {
        title: "Total National Projects",
        value: "2,847",
        trend: "+12 this week",
        trendUp: true,
        icon: FolderOpen,
        color: "var(--blue-accent)",
        bg: "rgba(59, 130, 246, 0.15)",
    },
    {
        title: "National Completion Rate",
        value: "42.3%",
        trend: "+2.1% from last month",
        trendUp: true,
        icon: TrendingUp,
        color: "var(--green)",
        bg: "var(--green-glow)",
    },
    {
        title: "Projects Completed",
        value: "1,204",
        trend: "+45 this quarter",
        trendUp: true,
        icon: CheckCircle2,
        color: "var(--green)",
        bg: "var(--green-glow)",
    },
    {
        title: "Projects At Risk / Delayed",
        value: "128",
        trend: "-5 this month",
        trendUp: true, // Decreasing risk is good
        icon: AlertOctagon,
        color: "var(--red)",
        bg: "var(--red-glow)",
    },
];

export default function KPICards() {
    return (
        <div className={styles.grid}>
            {kpis.map((kpi) => {
                const Icon = kpi.icon;
                return (
                    <div key={kpi.title} className={styles.card}>
                        <div className={styles.header}>
                            <div
                                className={styles.iconWrap}
                                style={{ color: kpi.color, backgroundColor: kpi.bg }}
                            >
                                <Icon size={20} />
                            </div>
                            <span className={styles.title}>{kpi.title}</span>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.value}>{kpi.value}</div>
                            <div className={`${styles.trend} ${kpi.trendUp ? styles.trendGood : styles.trendBad}`}>
                                {kpi.trend}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
