import { SidebarHeader } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const StudioSidebarHeader = () => {
	const { user } = useUser();
	if (!user)
		return (
			<SidebarHeader className="flex items-center justify-center pb-4">
				<Skeleton className="size-[112px] rounded-full" />
				<div className="flex flex-col items-center mt-2 gap-y-1">
					<Skeleton className="size-4 w-24 h-4" />
					<Skeleton className="size-4 w-24 h-4" />
				</div>
			</SidebarHeader>
		);
	return (
		<SidebarHeader className="flex items-center justify-center pb-4">
			<Link href="/users/current">
				<UserAvatar
					imageUrl={user?.imageUrl}
					name={user?.fullName ?? "User"}
					size="xl"
				/>
			</Link>
			<div className="flex flex-col items-center mt-2">
				<p className="text-sm font-medium">Your Profile</p>
				<p className="text-xs text-muted-foreground">{user.fullName}</p>
			</div>
		</SidebarHeader>
	);
};
export default StudioSidebarHeader;
