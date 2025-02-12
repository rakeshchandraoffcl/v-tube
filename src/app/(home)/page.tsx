import Image from "next/image";
const page = () => {
	return (
		<div>
			<Image src="/logo.svg" alt="logo" width={50} height={50} />
			<p className="text-xl font-semibold">V-tube</p>
		</div>
	);
};
export default page;
