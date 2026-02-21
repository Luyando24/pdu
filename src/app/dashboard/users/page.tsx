"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import UsersDirectory from "@/components/dashboard/users/UsersDirectory";
import RoleManagementPanel from "@/components/dashboard/users/RoleManagementPanel";

export default function UsersPage() {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    const handleClosePanel = () => {
        setSelectedUser(null);
    };

    return (
        <DashboardLayout>
            <div style={{ position: "relative", height: "calc(100vh - 84px)", overflow: "hidden", margin: "-24px" }}>
                <UsersDirectory onSelectUser={setSelectedUser} selectedUser={selectedUser} />

                <RoleManagementPanel
                    userId={selectedUser}
                    onClose={handleClosePanel}
                />
            </div>
        </DashboardLayout>
    );
}
