import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
	return (
		<form className="flex flex-1 max-w-[600px]">
			<div className="relative flex flex-1">
				<input
					type="text"
					placeholder="Search"
					className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500 "
				/>
			</div>
			<button
				type="submit"
				className="rounded-r-full border rounded-l-none bg-gray-100 text-gray-600 px-5 py-2.5 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<SearchIcon className="size-5" />
			</button>
		</form>
	);
};
