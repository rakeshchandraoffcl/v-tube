"use client";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

interface FilterCarouselProps {
	value?: string | null;
	isLoading?: boolean;
	onSelect?: (value: string | null) => void;
	data: {
		value: string;
		label: string;
	}[];
}

export const FilterCarousel = ({
	value,
	isLoading,
	onSelect,
	data,
}: FilterCarouselProps) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<div className="relative w-full">
			<div
				className={cn(
					"absolute left-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none",
					current === 1 && "hidden"
				)}
			/>
			<Carousel
				opts={{
					align: "start",
					dragFree: true,
				}}
				className="w-full px-12"
				plugins={[
					WheelGesturesPlugin({
						forceWheelAxis: "x",
					}),
				]}
				setApi={setApi}
			>
				<CarouselContent className="-ml-3">
					{!isLoading && (
						<CarouselItem className="pl-3 basis-auto">
							<Badge
								variant={!value ? "default" : "outline"}
								className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
							>
								All
							</Badge>
						</CarouselItem>
					)}
					{isLoading &&
						Array.from({ length: 14 }).map((_, index) => (
							<CarouselItem key={index} className="pl-3 basis-auto">
								<Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px]"></Skeleton>
							</CarouselItem>
						))}
					{!isLoading &&
						data.map((item) => (
							<CarouselItem key={item.value} className="pl-3 basis-auto">
								<Badge
									variant={value === item.value ? "default" : "outline"}
									className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
									onClick={() => onSelect?.(item.value)}
								>
									{item.label}
								</Badge>
							</CarouselItem>
						))}
				</CarouselContent>
				<CarouselNext className="absolute right-0" />
				<CarouselPrevious className="absolute left-0" />
			</Carousel>
			<div
				className={cn(
					"absolute right-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none",
					current === count && "hidden"
				)}
			/>
		</div>
	);
};
