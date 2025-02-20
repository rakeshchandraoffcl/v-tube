"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
	return (
		<>
			<SignedOut>
				<SignInButton mode="modal">
					<Button
						variant="outline"
						className="rounded-full shadow-none px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 border"
					>
						<UserCircleIcon />
						Sign In
					</Button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton>
					<UserButton.MenuItems>
						<UserButton.Link
							label="Studio"
							href="/studio"
							labelIcon={<ClapperboardIcon className="size-4" />}
						/>
					</UserButton.MenuItems>
				</UserButton>
			</SignedIn>
		</>
	);
};
