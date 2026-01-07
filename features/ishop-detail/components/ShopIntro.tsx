import Link from "next/link";
import { IShopProfile, IShopMembership } from "../types";

interface ShopIntroProps {
    shop: IShopProfile;
    memberships: IShopMembership[];
}

export default function ShopIntro({ shop, memberships }: ShopIntroProps) {
    return (
        <div className="flex flex-col">
            {/* Banner */}
            <div
                className="h-40 w-full bg-cover bg-center bg-no-repeat bg-gray-200"
                style={{ backgroundImage: `url("${shop.banner || "https://placehold.co/600x200"}")` }}
            ></div>

            {/* Logo and Intro */}
            <div className="relative bg-[var(--background-light)] dark:bg-[var(--background-dark)] px-4 pb-4">
                <div className="-mt-12 flex flex-col items-center text-center">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-24 h-24 border-4 border-[var(--background-light)] dark:border-[var(--background-dark)] shadow-md bg-white"
                        style={{ backgroundImage: `url("${shop.logo || "https://placehold.co/100"}")` }}
                    ></div>
                    <div className="mt-4">
                        <p className="text-text-primary-light dark:text-text-primary-dark text-[28px] font-bold leading-tight tracking-tight">
                            {shop.name}
                        </p>
                        <p className="text-[var(--text-subtle-light)] dark:text-[var(--text-subtle-dark)] text-base font-normal leading-normal mt-1">
                            {shop.description}
                        </p>

                        {/* Memberships links */}
                        {memberships.length > 0 && (
                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                                {memberships.map((membership) => (
                                    <Link
                                        key={membership.icom_id}
                                        className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 py-1.5 px-3 text-sm font-semibold text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors"
                                        href={`/icom/${membership.icom_id}`}
                                    >
                                        <span className="material-symbols-outlined text-base">
                                            groups
                                        </span>
                                        <span>Xem trang {membership.icom_name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
