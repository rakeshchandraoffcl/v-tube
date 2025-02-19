"use client";

import { trpc } from "@/trpc/client";

export const HomeClient = () => {
	const [data] = trpc.categories.getMany.useSuspenseQuery();
	return (
		<div>
			{data.map((category) => (
				<div key={category.id}>{category.name}</div>
			))}
		</div>
	);
};
