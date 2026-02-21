import styles from "./SectorBreakdown.module.css";
import { Briefcase, HeartPulse, GraduationCap, Zap, Droplets, Tractor } from "lucide-react";

const sectors = [
    { name: "Infrastructure (Roads)", count: 840, budget: "K 12B", color: "#64748B", icon: Briefcase, progress: 45 },
    { name: "Health", count: 620, budget: "K 8.4B", color: "#EF4444", icon: HeartPulse, progress: 38 },
    { name: "Education", count: 580, budget: "K 6.2B", color: "#3B82F6", icon: GraduationCap, progress: 62 },
    { name: "Energy", count: 310, budget: "K 4.1B", color: "#EAB308", icon: Zap, progress: 28 },
    { name: "Water & Sanitation", count: 290, budget: "K 3.8B", color: "#06B6D4", icon: Droplets, progress: 51 },
    { name: "Agriculture", count: 207, budget: "K 2.5B", color: "#22C55E", icon: Tractor, progress: 15 },
];

export default function SectorBreakdown() {
    return (
        <div className={styles.widget}>
            <div className={styles.header}>
                <h3 className={styles.title}>Project Distribution by Sector</h3>
            </div>

            <div className={styles.content}>
                <div className={styles.list}>
                    {sectors.map((sector) => {
                        const Icon = sector.icon;
                        return (
                            <div key={sector.name} className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <div className={styles.nameWrap}>
                                        <div className={styles.iconBox} style={{ color: sector.color, backgroundColor: `${sector.color}20` }}>
                                            <Icon size={14} />
                                        </div>
                                        <span className={styles.name}>{sector.name}</span>
                                    </div>
                                    <div className={styles.stats}>
                                        <span className={styles.count}>{sector.count} projects</span>
                                        <span className={styles.budget}>· {sector.budget}</span>
                                    </div>
                                </div>

                                <div className={styles.barWrap}>
                                    <div className={styles.barBg}>
                                        <div
                                            className={styles.barFill}
                                            style={{ width: `${sector.progress}%`, backgroundColor: sector.color }}
                                        />
                                    </div>
                                    <span className={styles.progressText}>{sector.progress}% Complete</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button className={styles.viewDetailedBtn}>View Full Sector Report</button>
        </div>
    );
}
