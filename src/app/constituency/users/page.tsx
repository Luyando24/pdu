"use client";

import { useState } from "react";
import ConstituencyLayout from "@/components/constituency/ConstituencyLayout";
import UsersDirectory from "@/components/dashboard/users/UsersDirectory";
import RoleManagementPanel from "@/components/dashboard/users/RoleManagementPanel";

export default function ConstituencyUsersPage() {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    const handleClosePanel = () => {
        setSelectedUser(null);
    };

    return (
        <ConstituencyLayout>
            <div style={{ position: "relative", height: "calc(100vh - 84px)", overflow: "hidden", margin: "-24px" }}>
                <UsersDirectory onSelectUser={setSelectedUser} selectedUser={selectedUser} />

                {selectedUser && (
                    <RoleManagementPanel
                        userId={selectedUser}
                        onClose={handleClosePanel}
                    />
                )}
            </div>
        </ConstituencyLayout>
    );
}
