"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
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
	const router = useRouter();
	const carouselData = categories.map((category) => ({
		value: category.id,
		label: category.name,
	}));
	const onSelect = (value: string | null) => {
		const url = new URL(window.location.href);
		if (value) {
			url.searchParams.set("categoryId", value);
		} else {
			url.searchParams.delete("categoryId");
		}
		router.push(url.toString());
	};
	return (
		<FilterCarousel
			value={categoryId}
			data={carouselData}
			onSelect={onSelect}
		/>
	);
};
