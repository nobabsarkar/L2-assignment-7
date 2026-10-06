"use client";

import Logo from "@/assets/svg/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { adminRoutes } from "@/routes/admin.routes";
import { citezenRoutes } from "@/routes/citezen.routes";
import { serviceWorkerRoutes } from "@/routes/service-worker.routes";
import { UserRole } from "@/types/user.type";
import { sidebarItems } from "@/types/sidebar.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarRoutes: Partial<Record<UserRole, sidebarItems>> = {
  SUPER_ADMIN: adminRoutes,
  ADMIN: adminRoutes,
  CITIZEN: citezenRoutes,
  SERVICE_WORKER: serviceWorkerRoutes,
};

export function DashboardSidebar({ role }: { role: UserRole }) {
  const pathname = usePathname();

  const routes: sidebarItems = sidebarRoutes[role] ?? [];

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="border-r">
      {/* Logo */}
      <SidebarHeader className="border-b">
        <Link
          href="/"
          className="
            flex h-12 items-center gap-2 rounded-lg px-2
            transition-colors
            hover:bg-sidebar-accent
            hover:text-sidebar-accent-foreground
          "
        >
          <Logo />

          <span className="text-lg font-bold tracking-tight group-data-[collapsible=icon]:hidden">
            CityCare
          </span>
        </Link>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="px-2 py-4">
        {routes.map((group) => (
          <SidebarGroup key={group.title} className="p-0">
            <SidebarGroupLabel
              className="
                mb-2 px-2
                text-[11px]
                font-semibold
                uppercase
                tracking-wider
                text-muted-foreground
                group-data-[collapsible=icon]:hidden
              "
            >
              {group.title}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {group.items.map((item) => {
                  const isActive =
                    pathname === item.url ||
                    pathname.startsWith(`${item.url}/`);

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        render={<Link href={item.url} />}
                        isActive={isActive}
                        tooltip={item.title}
                        className="
                        cursor-pointer
                          h-10
                          rounded-lg
                          px-3
                          transition-all
                          duration-200

                          /* Normal */
                          text-muted-foreground

                          /* Hover */
                          hover:bg-primary/10
                          hover:text-primary

                          /* Active */
                          data-[active=true]:bg-primary
                          data-[active=true]:text-primary-foreground
                          data-[active=true]:shadow-sm

                          /* Active hover */
                          data-[active=true]:hover:bg-primary
                          data-[active=true]:hover:text-primary-foreground

                          /* Collapsed sidebar */
                          group-data-[collapsible=icon]:justify-center
                          group-data-[collapsible=icon]:px-0
                        "
                      >
                        {/* <Link href={item.url} className="truncate font-medium"> */}
                        {item.title}
                        {/* </Link> */}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
