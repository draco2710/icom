import { IShopProfile } from "../types";

interface ShopInfoProps {
    shop: IShopProfile;
    primaryColor: string;
}

export default function ShopInfo({ shop, primaryColor }: ShopInfoProps) {
    return (
        <>
            {/* About */}
            <div className="px-4 pt-6 pb-2">
                <h3 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold leading-tight tracking-[-0.015em]">
                    Giới thiệu
                </h3>
            </div>
            <div className="px-4 pb-4">
                <p className="text-[var(--text-subtle-light)] dark:text-[var(--text-subtle-dark)] text-base leading-relaxed">
                    {shop.description || "Chưa có mô tả giới thiệu."}
                </p>
            </div>

            {/* Contact Info */}
            <div className="px-4 pt-4 pb-4">
                <div className="flex flex-col gap-2 rounded-xl bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-4 border border-[var(--border-light)] dark:border-[var(--border-dark)]">
                    {shop.street && (
                        <a className="flex items-center gap-4 py-2 group" href="#">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                <span className="material-symbols-outlined text-xl">
                                    location_on
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
                                    {shop.street}, {shop.ward}, {shop.district}
                                </p>
                            </div>
                        </a>
                    )}
                    {shop.street && <div className="h-px w-full bg-[var(--border-light)] dark:bg-[var(--border-dark)] ml-14"></div>}

                    {shop.phone && (
                        <>
                            <a className="flex items-center gap-4 py-2 group" href={`tel:${shop.phone}`}>
                                <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                    <span className="material-symbols-outlined text-xl">
                                        phone
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
                                        {shop.phone}
                                    </p>
                                </div>
                            </a>
                            <div className="h-px w-full bg-[var(--border-light)] dark:bg-[var(--border-dark)] ml-14"></div>
                        </>
                    )}

                    {shop.email && (
                        <>
                            <a className="flex items-center gap-4 py-2 group" href={`mailto:${shop.email}`}>
                                <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                    <span className="material-symbols-outlined text-xl">
                                        email
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
                                        {shop.email}
                                    </p>
                                </div>
                            </a>
                            <div className="h-px w-full bg-[var(--border-light)] dark:bg-[var(--border-dark)] ml-14"></div>
                        </>
                    )}

                    {shop.website && (
                        <a className="flex items-center gap-4 py-2 group" href={shop.website} target="_blank" rel="noopener noreferrer">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                <span className="material-symbols-outlined text-xl">
                                    language
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal truncate">
                                    {shop.website}
                                </p>
                            </div>
                            <span className="material-symbols-outlined text-2xl text-[var(--text-subtle-light)] dark:text-[var(--text-subtle-dark)]">
                                chevron_right
                            </span>
                        </a>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="flex w-full items-center justify-center gap-3 p-4 pt-2 pb-6 mt-auto">
                {shop.phone && (
                    <a
                        href={`tel:${shop.phone}`}
                        className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-base font-bold leading-normal"
                        style={{ color: primaryColor }}
                    >
                        <span className="material-symbols-outlined">
                            call
                        </span>
                        <span>Gọi điện</span>
                    </a>
                )}
                <button
                    className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full text-white text-base font-bold leading-normal"
                    style={{ backgroundColor: primaryColor }}
                >
                    <span className="material-symbols-outlined">
                        directions
                    </span>
                    <span>Chỉ đường</span>
                </button>
            </div>
        </>
    );
}
