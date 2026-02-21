"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MapSidebar from "@/components/dashboard/map/MapSidebar";
import InteractiveMap from "@/components/dashboard/map/InteractiveMap";
import styles from "./MapPage.module.css";
import { useState } from "react";

export default function GeoIntelligencePage() {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    return (
        <DashboardLayout>
            <div className={styles.container}>
                {/* Sidebar Container */}
                <div className={styles.sidebarWrapper}>
                    <MapSidebar
                        selectedRegion={selectedRegion}
                        onClearRegion={() => setSelectedRegion(null)}
                    />
                </div>

                {/* Map Container */}
                <div className={styles.mapWrapper}>
                    <div className={styles.mapHeader}>
                        <h1 className={styles.title}>Geographic Delivery Intelligence</h1>
                        <p className={styles.subtitle}>
                            {selectedRegion ? `Viewing projects in ${selectedRegion} Province` : "National overview of all active projects"}
                        </p>
                    </div>

                    <div className={styles.mapContent}>
                        <InteractiveMap
                            selectedRegion={selectedRegion}
                            onRegionSelect={setSelectedRegion}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
