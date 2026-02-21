import { Building2, Map, Users, Download, Calendar } from "lucide-react";
import styles from "./ScorecardControls.module.css";

interface ScorecardControlsProps {
    activeTab: "ministry" | "provincial" | "contractor";
    onTabChange: (tab: "ministry" | "provincial" | "contractor") => void;
}

export default function ScorecardControls({ activeTab, onTabChange }: ScorecardControlsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.topRow}>
                <div>
                    <h1 className={styles.title}>Performance Scorecards</h1>
                    <p className={styles.subtitle}>Comparative delivery metrics and accountability rankings.</p>
                </div>

                <div className={styles.actions}>
                    <div className={styles.dateSelector}>
                        <Calendar size={14} className={styles.icon} />
                        <select className={styles.select}>
                            <option>FY 2025 - YTD</option>
                            <option>Q3 2024</option>
                            <option>Q2 2024</option>
                        </select>
                    </div>
                    <button className={styles.exportBtn}>
                        <Download size={14} />
                        Export Report
                    </button>
                </div>
            </div>

            <div className={styles.tabsContainer}>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === "ministry" ? styles.active : ""}`}
                        onClick={() => onTabChange("ministry")}
                    >
                        <Building2 size={16} />
                        Ministry Performance
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === "provincial" ? styles.active : ""}`}
                        onClick={() => onTabChange("provincial")}
                    >
                        <Map size={16} />
                        Provincial Rankings
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === "contractor" ? styles.active : ""}`}
                        onClick={() => onTabChange("contractor")}
                    >
                        <Users size={16} />
                        Top Contractors
                    </button>
                </div>
            </div>
        </div>
    );
}
