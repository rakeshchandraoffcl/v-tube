"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategorySectionProps {
	categoryId?: string;
}

const CategoryLoader = () => {
	return <FilterCarousel isLoading value={null} data={[]} />;
};

export const CategorySection = ({ categoryId }: CategorySectionProps) => {
	return (
		<Suspense fallback={<CategoryLoader />}>
			<ErrorBoundary fallback={<CategoryLoader />}>
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
	return <FilterCarousel isLoading value={categoryId} data={carouselData} />;
};
