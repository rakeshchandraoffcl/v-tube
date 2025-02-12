import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
	return (
		<Button
			variant="outline"
			className="rounded-full shadow-none px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 border"
		>
			<UserCircleIcon />
			Sign In
		</Button>
	);
};
