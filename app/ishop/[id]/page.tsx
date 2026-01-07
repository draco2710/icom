import Link from "next/link";
import { getIShopProfile, getIShopMemberships } from "@/features/ishop-detail/api";
import { IShopProfile, IShopMembership } from "@/features/ishop-detail/types";
import ShopHeader from "@/features/ishop-detail/components/ShopHeader";
import ShopIntro from "@/features/ishop-detail/components/ShopIntro";
import ShopInfo from "@/features/ishop-detail/components/ShopInfo";

export default async function IShopDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let shop: IShopProfile | null = null;
    let memberships: IShopMembership[] = [];
    let error: string | null = null;

    try {
        const [shopData, membershipsData] = await Promise.all([
            getIShopProfile(id),
            getIShopMemberships(id)
        ]);
        shop = shopData;
        memberships = membershipsData;
    } catch (err: unknown) {
        console.error("Failed to fetch iShop:", err);
        error = err instanceof Error ? err.message : "Failed to load shop";
    }

    if (error || !shop) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">{error || "iShop không tồn tại"}</h1>
                <Link
                    href="/"
                    className="px-6 py-2 bg-primary text-white rounded-full font-bold"
                >
                    Quay lại trang chủ
                </Link>
            </div>
        );
    }

    // Determine context for "Like" button (use first iCom membership)
    const primaryIComId = memberships.length > 0 ? memberships[0].icom_id : null;
    const primaryColor = shop.theme_color || "#007AFF";

    // Theme object for CSS variables
    const theme = {
        primary: primaryColor,
        backgroundLight: "#FAFAFA",
        backgroundDark: "#000000",
        surfaceLight: "#ffffff",
        surfaceDark: "#1c1c1e",
        borderLight: "#eeeeee",
        borderDark: "#333333",
        textSubtleLight: "#6B7280",
        textSubtleDark: "#8e8e93",
    };

    return (
        <div
            className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden transition-colors duration-300"
            style={
                {
                    "--primary": theme.primary,
                    "--background-light": theme.backgroundLight,
                    "--background-dark": theme.backgroundDark,
                    "--surface-light": theme.surfaceLight,
                    "--surface-dark": theme.surfaceDark,
                    "--border-light": theme.borderLight,
                    "--border-dark": theme.borderDark,
                    "--text-subtle-light": theme.textSubtleLight,
                    "--text-subtle-dark": theme.textSubtleDark,
                } as any // eslint-disable-line @typescript-eslint/no-explicit-any
            }
        >
            <div className="bg-[var(--background-light)] dark:bg-[var(--background-dark)] flex flex-col min-h-screen">
                <ShopHeader primary_icom_id={primaryIComId} shop_id={shop.id} />

                <ShopIntro shop={shop} memberships={memberships} />

                {/* Tags Section */}
                <div className="flex justify-center gap-2 px-4 pb-2 flex-wrap">
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--primary)]/20 px-3">
                        <p className="text-[var(--primary)] text-sm font-medium leading-normal capitalize">
                            {shop.industry}
                        </p>
                    </div>
                    {shop.province && (
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--primary)]/20 px-3">
                            <p className="text-[var(--primary)] text-sm font-medium leading-normal">
                                {shop.province}
                            </p>
                        </div>
                    )}
                </div>

                <ShopInfo shop={shop} primaryColor={primaryColor} />
            </div>
        </div>
    );
}
