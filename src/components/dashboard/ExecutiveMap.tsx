"use client";

import styles from "./ExecutiveMap.module.css";
import ZambiaMap from "../ZambiaMap"; // Reusing the map from landing page

export default function ExecutiveMap() {
    return (
        <div className={styles.widget}>
            <div className={styles.header}>
                <div className={styles.titleWrap}>
                    <h3 className={styles.title}>National Delivery Map</h3>
                    <span className={styles.subtitle}>Geographic distribution of projects</span>
                </div>
                <div className={styles.actions}>
                    <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
                    <button className={styles.filterBtn}>At Risk</button>
                    <button className={styles.filterBtn}>Delayed</button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.mapWrap}>
                    <ZambiaMap />
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.statsList}>
                        <div className={styles.statItem}>
                            <div className={styles.statLabel}>Highest Density</div>
                            <div className={styles.statValue}>Lusaka Province</div>
                            <div className={styles.statSub}>482 active projects</div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statLabel}>Highest Risk</div>
                            <div className={styles.statValue}>Southern Province</div>
                            <div className={styles.statSub}>24 delayed projects</div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statLabel}>Best Performance</div>
                            <div className={styles.statValue}>Copperbelt</div>
                            <div className={styles.statSub}>88% on-track rate</div>
                        </div>
                    </div>

                    <button className={styles.viewFullMapBtn}>Open Full Map Intelligence</button>
                </div>
            </div>
        </div>
    );
}
