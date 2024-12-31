import "@/assets/main.css";
import ZenIcon from "@/components/zen-icon";
import { useState } from "react";

export default function ZenUI() {
	const [searchQuery, setSearchQuery] = useState("");
	const [error, setError] = useState("");

	const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (!searchQuery.trim()) {
				setError("Please enter a search term");
				return;
			}
			setError("");
			const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
				searchQuery
			)}`;
			window.location.href = searchUrl;
		}
	};

	return (
		<div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-50">
			<h1 className="text-4xl font-bold mb-8 text-slate-800 flex items-center gap-3">
				<ZenIcon />
				What are you looking for?
			</h1>
			<div className="w-full max-w-2xl px-4">
				<input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onKeyDown={handleSearch}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-full px-6 py-4 text-lg rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
				/>
				{error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
			</div>
		</div>
	);
}
