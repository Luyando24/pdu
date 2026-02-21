"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ScorecardControls from "@/components/dashboard/scorecards/ScorecardControls";
import MinistryScorecard from "@/components/dashboard/scorecards/MinistryScorecard";
import ProvincialScorecard from "@/components/dashboard/scorecards/ProvincialScorecard";

export default function ScorecardsPage() {
    const [activeTab, setActiveTab] = useState<"ministry" | "provincial" | "contractor">("ministry");

    return (
        <DashboardLayout>
            <div style={{ maxWidth: "1200px" }}>
                <ScorecardControls activeTab={activeTab} onTabChange={setActiveTab} />

                {activeTab === "ministry" && <MinistryScorecard />}
                {activeTab === "provincial" && <ProvincialScorecard />}

                {activeTab === "contractor" && (
                    <div style={{ padding: '60px', textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 var(--radius-md) var(--radius-md)' }}>
                        <h3 style={{ color: 'var(--text-secondary)' }}>Contractor Scorecards in Development</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>This view will rank top-tier contractors by delivery speed and financial compliance.</p>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
