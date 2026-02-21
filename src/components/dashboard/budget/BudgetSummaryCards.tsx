"use client";

import { Wallet, PieChart, TrendingUp, AlertTriangle } from "lucide-react";
import styles from "./BudgetSummaryCards.module.css";

const stats = [
    {
        title: "Total Budget",
        value: "ZMW 4.2B",
        trend: "+12% vs 2023",
        icon: Wallet,
        color: "#3B82F6",
    },
    {
        title: "Funds Allocated",
        value: "ZMW 3.1B",
        trend: "74% of total budget",
        icon: PieChart,
        color: "#22c55e",
    },
    {
        title: "Funds Disbursed",
        value: "ZMW 2.8B",
        trend: "90% of allocated",
        icon: TrendingUp,
        color: "#8B5CF6",
    },
    {
        title: "Pending Approval",
        value: "ZMW 450M",
        trend: "15 constituencies pending",
        icon: AlertTriangle,
        color: "#E5484D",
    },
];

export default function BudgetSummaryCards() {
    return (
        <div className={styles.grid}>
            {stats.map((stat, i) => (
                <div key={i} className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.iconWrap} style={{ color: stat.color, background: `${stat.color}15` }}>
                            <stat.icon size={20} />
                        </div>
                        <span className={styles.title}>{stat.title}</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.value}>{stat.value}</div>
                        <div className={styles.trend}>{stat.trend}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
