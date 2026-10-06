/** biome-ignore-all lint/correctness/noChildrenProp: <explanation> */
/** biome-ignore-all lint/a11y/useValidAriaRole: <explanation> */
import DashboardShell from "@/components/(dashboard)/dashboard-shell";
import RoleGuard from "@/components/auth/role-guard";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <RoleGuard roles={["CITEZEN"]}>
      <DashboardShell role="CITEZEN">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default layout;
