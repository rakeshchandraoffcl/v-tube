"use client";

import { trpc } from "@/trpc/client";

const page = () => {
	const { data } = trpc.hello.useQuery({ text: "client" });
	return (
		<div>
			<h1>Main section</h1>
			<p>{data?.greeting}</p>
		</div>
	);
};
export default page;
