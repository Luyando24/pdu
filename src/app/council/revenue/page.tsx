"use client";

import CouncilLayout from "@/components/council/CouncilLayout";
import styles from "./Revenue.module.css";
import { 
    DollarSign, 
    TrendingUp, 
    BarChart3, 
    PieChart, 
    Calendar, 
    ArrowUpRight, 
    ArrowDownRight,
    CreditCard,
    FileText,
    Download
} from "lucide-react";

const COLLECTIONS = [
    { source: "Market Fees", current: "ZMW 1.2M", change: "+12%", trend: "up" },
    { source: "Licenses", current: "ZMW 850K", change: "+5%", trend: "up" },
    { source: "Property Rates", current: "ZMW 2.4M", change: "-2%", trend: "down" },
    { source: "Other Fees", current: "ZMW 120K", change: "+8%", trend: "up" },
];

const TRANSACTIONS = [
    { id: "TX-9012", payer: "ZamBuild Ltd", amount: "ZMW 15,000", method: "Bank Transfer", date: "Mar 15, 2024", status: "Verified" },
    { id: "TX-9013", payer: "Grace Mulenga", amount: "ZMW 450", method: "Mobile Money", date: "Mar 15, 2024", status: "Verified" },
    { id: "TX-9014", payer: "City Group", amount: "ZMW 8,200", method: "Bank Transfer", date: "Mar 14, 2024", status: "Processing" },
    { id: "TX-9015", payer: "Isaac Banda", amount: "ZMW 1,200", method: "Card", date: "Mar 14, 2024", status: "Verified" },
];

export default function RevenuePaymentsPage() {
    return (
        <CouncilLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>Revenue & Payments</h1>
                        <p className={styles.subtitle}>Fiscal oversight and real-time revenue collection monitoring.</p>
                    </div>
                    <button className={styles.exportBtn}><Download size={18} /> Export Fiscal Report</button>
                </div>

                {/* KPI Row */}
                <div className={styles.kpiGrid}>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon}><BarChart3 size={24} color="var(--green)" /></div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Monthly Revenue</span>
                            <span className={styles.kpiValue}>ZMW 4.57M</span>
                            <span className={styles.kpiTrend}><TrendingUp size={14} /> +8.4% vs last month</span>
                        </div>
                    </div>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon}><CreditCard size={24} color="var(--blue-accent)" /></div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Digital Payments</span>
                            <span className={styles.kpiValue}>78%</span>
                            <span className={styles.kpiTrendNeutral}>Total automation rate</span>
                        </div>
                    </div>
                    <div className={styles.kpiCard}>
                        <div className={styles.kpiIcon}><DollarSign size={24} color="var(--gold)" /></div>
                        <div className={styles.kpiInfo}>
                            <span className={styles.kpiLabel}>Outstanding Rates</span>
                            <span className={styles.kpiValue}>ZMW 1.1M</span>
                            <span className={styles.kpiTrendBad}><ArrowDownRight size={14} /> Recovery needed</span>
                        </div>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    {/* Collections by Source */}
                    <div className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <h2><PieChart size={20} /> Revenue by Source</h2>
                        </div>
                        <div className={styles.sourceGrid}>
                            {COLLECTIONS.map((col, idx) => (
                                <div key={idx} className={styles.sourceItem}>
                                    <div className={styles.sourceMain}>
                                        <span className={styles.sourceName}>{col.source}</span>
                                        <span className={styles.sourceVal}>{col.current}</span>
                                    </div>
                                    <span className={`${styles.sourceTrend} ${styles[col.trend]}`}>
                                        {col.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                        {col.change}
                                    </span>
                                    <div className={styles.sourceBar}><div style={{ width: '70%', background: idx % 2 === 0 ? 'var(--blue-accent)' : 'var(--gold)' }} /></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Transaction Log */}
                    <div className={`${styles.panel} ${styles.logPanel}`}>
                        <div className={styles.panelHeader}>
                            <h2><FileText size={20} /> Recent Transactions</h2>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Payer</th>
                                        <th>Amount</th>
                                        <th>Method</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TRANSACTIONS.map((tx) => (
                                        <tr key={tx.id}>
                                            <td className={styles.payerCell}>
                                                <span className={styles.payerName}>{tx.payer}</span>
                                                <span className={styles.txId}>{tx.id}</span>
                                            </td>
                                            <td className={styles.txAmount}>{tx.amount}</td>
                                            <td className={styles.txMethod}>{tx.method}</td>
                                            <td className={styles.txDate}>{tx.date}</td>
                                            <td>
                                                <span className={`${styles.badge} ${tx.status === 'Verified' ? styles.verified : styles.processing}`}>
                                                    {tx.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </CouncilLayout>
    );
}
