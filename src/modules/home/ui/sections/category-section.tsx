"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategorySectionProps {
	categoryId?: string;
}

export const CategorySection = ({ categoryId }: CategorySectionProps) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundary fallback={<div>Error</div>}>
				<CategorySectionContent categoryId={categoryId} />
			</ErrorBoundary>
		</Suspense>
	);
};

const CategorySectionContent = ({ categoryId }: CategorySectionProps) => {
	const [categories] = trpc.categories.getMany.useSuspenseQuery();
	const carouselData = categories.map((category) => ({
		value: category.id,
		label: category.name,
	}));
	return (
		<div className="flex flex-col gap-y-6">
			<FilterCarousel value={categoryId} data={carouselData} />
		</div>
	);
};
