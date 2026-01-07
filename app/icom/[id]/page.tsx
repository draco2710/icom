import { getIComProfile, getIComMembers, getIComMetadata } from "@/features/icom-profile/api";
import IComHeader from "@/features/icom-profile/components/IComHeader";
import ProfileSidebar from "@/features/icom-profile/components/ProfileSidebar";
import MemberExploreSection from "@/features/icom-profile/components/MemberExploreSection";
import Link from "next/link";

export default async function IComPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let profile;
    let membersData;
    let metadata;
    let errorMessage: string | null = null;

    try {
        // Parallel fetch for speed
        const [p, m, meta] = await Promise.all([
            getIComProfile(id),
            getIComMembers(id),
            getIComMetadata(id),
        ]);
        profile = p;
        membersData = m;
        metadata = meta;
    } catch (err: unknown) {
        console.error("Failed to fetch iCom data:", err);
        errorMessage = err instanceof Error ? err.message : "Failed to load data";
    }

    if (errorMessage || !profile || !membersData || !metadata) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-background-light dark:bg-background-dark">
                <h2 className="text-xl font-bold text-red-500 mb-2">Error Loading Page</h2>
                <p className="text-gray-600 dark:text-gray-400">{errorMessage || "Data not found"}</p>
                <Link
                    href="/"
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-sans"
            style={{ "--primary": profile.theme_color || "#007AFF" } as React.CSSProperties}
        >
            <IComHeader name={profile.name} />

            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-10">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    <ProfileSidebar profile={profile} />

                    <MemberExploreSection
                        icomId={id}
                        initialMembers={membersData.members || []}
                        metadata={metadata}
                    />
                </div>
            </div>
        </div>
    );
}
