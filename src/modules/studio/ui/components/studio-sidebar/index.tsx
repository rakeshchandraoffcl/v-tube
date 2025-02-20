"use client";

import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOutIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StudioSidebarHeader from "./studio-sidebar-header";
export const StudioSidebar = () => {
	const pathName = usePathname();
	return (
		<Sidebar className="pt-16 z-40">
			<StudioSidebarHeader />
			<SidebarContent className="bg-background">
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton
									tooltip="Content"
									asChild
									isActive={pathName === "/studio"}
								>
									<Link href="/studio" className="flex items-center gap-4">
										<VideoIcon className="size-4" />
										<span className="text-sm">Content</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<Separator />
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Exit Studio" asChild>
									<Link href="/" className="flex items-center gap-4">
										<LogOutIcon className="size-4" />
										<span className="text-sm">Exit Studio</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
