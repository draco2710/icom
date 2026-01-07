"use client";

import { useState, useEffect } from "react";
import { IShopMember } from "@/shared/types";
import { searchIComMembers, getIComMembers } from "../api";
import { IComMetadata } from "../types";
import MemberCard from "./MemberCard";
import MemberMap from "./MemberMap";

interface MemberExploreSectionProps {
    icomId: string;
    initialMembers: IShopMember[];
    metadata: IComMetadata;
}

export default function MemberExploreSection({ icomId, initialMembers, metadata }: MemberExploreSectionProps) {
    const [members, setMembers] = useState<IShopMember[]>(initialMembers);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [viewMode, setViewMode] = useState<"list" | "map">("list");

    // Search/Filter Handler
    useEffect(() => {
        if (!hasInteracted) return;

        const timer = setTimeout(async () => {
            try {
                setIsSearching(true);
                let res;
                // Use search API for both search and filter
                if (searchQuery || activeFilter) {
                    res = await searchIComMembers(icomId, searchQuery || activeFilter || "");
                } else {
                    res = await getIComMembers(icomId);
                }

                setMembers(res.members || []);
            } catch (err) {
                console.error("Search failed", err);
            } finally {
                setIsSearching(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery, activeFilter, icomId, initialMembers, hasInteracted]);

    const handleFilterClick = (filter: string) => {
        if (activeFilter === filter) {
            setActiveFilter(null);
        } else {
            setActiveFilter(filter);
            setSearchQuery(""); // Clear search when selecting a filter

            // Auto switch to map if it's an area filter
            const isArea = metadata.areas.some(a => a.name === filter);
            if (isArea) {
                setViewMode("map");
            }
        }
    };

    // Combine all filter suggestions
    const allFilters = [
        ...metadata.industries,
        ...metadata.sub_industries,
        ...metadata.areas,
    ];

    return (
        <main className="flex-1 min-w-0">
            {/* Search Bar */}
            <div className="relative w-full group mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl">
                        search
                    </span>
                </div>
                <input
                    className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-card-dark border-0 rounded-2xl text-base shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    placeholder="Tìm kiếm iShop..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setActiveFilter(null);
                        setHasInteracted(true);
                    }}
                />
                {isSearching && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent shadow-none"></div>
                    </div>
                )}
            </div>

            {/* Categories / Suggestions */}
            <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                    <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark mr-1">
                        Filter:
                    </span>
                    {allFilters.map((filter) => (
                        <button
                            key={filter.name}
                            onClick={() => {
                                handleFilterClick(filter.name);
                                setHasInteracted(true);
                            }}
                            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border ${activeFilter === filter.name
                                ? "bg-primary text-white border-primary shadow-md"
                                : "bg-white dark:bg-card-dark border-gray-200 dark:border-gray-700 text-text-primary-light dark:text-text-primary-dark hover:border-primary/50 hover:text-primary"
                                }`}
                        >
                            {filter.name} ({filter.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Members List/Map Section */}
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                        {searchQuery ? `Kết quả cho "${searchQuery}"` : activeFilter ? `Filter: ${activeFilter}` : "IShop Members"}
                    </h3>

                    <div className="flex items-center gap-4">
                        {(searchQuery || activeFilter) && (
                            <span className="text-sm text-gray-500 font-medium hidden md:block">{members.length} results</span>
                        )}

                        {/* View Toggle */}
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                            <button
                                onClick={() => setViewMode("list")}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${viewMode === "list" ? "bg-white dark:bg-gray-700 shadow-sm text-primary" : "text-gray-500"}`}
                            >
                                <span className="material-symbols-outlined text-lg">grid_view</span>
                                <span className="hidden sm:inline">List</span>
                            </button>
                            <button
                                onClick={() => setViewMode("map")}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${viewMode === "map" ? "bg-white dark:bg-gray-700 shadow-sm text-primary" : "text-gray-500"}`}
                            >
                                <span className="material-symbols-outlined text-lg">map</span>
                                <span className="hidden sm:inline">Map</span>
                            </button>
                        </div>
                    </div>
                </div>

                {viewMode === "map" ? (
                    <MemberMap members={members} />
                ) : members.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {members.map((item) => (
                            <MemberCard key={item.shop_id} member={item} icomId={icomId} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center bg-gray-50 dark:bg-card-dark/50 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
                        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600">
                            storefront
                        </span>
                        <p className="mt-4 text-gray-500 font-medium">No iShops found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveFilter(null); }}
                            className="mt-4 text-primary font-bold hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
