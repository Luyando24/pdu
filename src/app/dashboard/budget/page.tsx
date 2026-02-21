"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BudgetSummaryCards from "@/components/dashboard/budget/BudgetSummaryCards";
import BudgetAllocationTable from "@/components/dashboard/budget/BudgetAllocationTable";

export default function BudgetPage() {
    return (
        <DashboardLayout>
            <div style={{ padding: "0 0 24px 0" }}>
                <h1 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "8px", color: "var(--text-primary)" }}>Budget Allocation</h1>
                <p style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>Manage and monitor CDF fund distribution across all 156 constituencies.</p>
                
                <BudgetSummaryCards />
                
                <div style={{ marginTop: "32px" }}>
                    <BudgetAllocationTable />
                </div>
            </div>
        </DashboardLayout>
    );
}
