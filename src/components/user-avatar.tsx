import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const avatarVariants = cva("", {
	variants: {
		size: {
			default: "size-9",
			xs: "size-4",
			sm: "size-6",
			lg: "size-10",
			xl: "h-[160px] w-[160px]",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
	imageUrl: string;
	name: string;
	className?: string;
	onClick?: () => void;
	alt?: string;
}

export const UserAvatar = ({
	imageUrl,
	alt,
	size,
	onClick,
	className,
}: UserAvatarProps) => {
	return (
		<Avatar
			className={cn(avatarVariants({ size, className }))}
			onClick={onClick}
		>
			<AvatarImage src={imageUrl} alt={alt} />
		</Avatar>
	);
};
