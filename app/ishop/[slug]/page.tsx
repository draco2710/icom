"use client";

import { useParams, useRouter } from "next/navigation";
import { mockShops } from "../../data";
import Link from "next/link";

export default function IShopDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const shop = mockShops.find((s) => s.slug === slug);

    if (!shop) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">iShop không tồn tại</h1>
                <button
                    onClick={() => router.push("/")}
                    className="px-6 py-2 bg-primary text-white rounded-full font-bold"
                >
                    Quay lại trang chủ
                </button>
            </div>
        );
    }

    const theme = shop.theme || {
        primary: "#007AFF",
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
                } as any
            }
        >
            <div className="bg-[var(--background-light)] dark:bg-[var(--background-dark)] flex flex-col min-h-screen">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center bg-[var(--background-light)]/80 dark:bg-[var(--background-dark)]/80 p-4 pb-3 backdrop-blur-sm">
                    <button
                        onClick={() => router.back()}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-primary-light dark:text-text-primary-dark"
                    >
                        <span className="material-symbols-outlined text-2xl material-symbols-outlined">
                            arrow_back
                        </span>
                    </button>
                    <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary-light dark:text-text-primary-dark pr-10">
                        Thông tin iShop
                    </h2>
                    <button className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-primary-light dark:text-text-primary-dark">
                        <span className="material-symbols-outlined text-2xl material-symbols-outlined">
                            share
                        </span>
                    </button>
                </div>

                <div className="flex flex-col">
                    {/* Banner */}
                    <div
                        className="h-40 w-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url("${shop.banner}")` }}
                    ></div>

                    {/* Logo and Intro */}
                    <div className="relative bg-[var(--background-light)] dark:bg-[var(--background-dark)] px-4 pb-4">
                        <div className="-mt-12 flex flex-col items-center text-center">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-24 h-24 border-4 border-[var(--background-light)] dark:border-[var(--background-dark)] shadow-md"
                                style={{ backgroundImage: `url("${shop.logo}")` }}
                            ></div>
                            <div className="mt-4">
                                <p className="text-text-primary-light dark:text-text-primary-dark text-[28px] font-bold leading-tight tracking-tight">
                                    {shop.name}
                                </p>
                                <p className="text-[var(--text-subtle-light)] dark:text-[var(--text-subtle-dark)] text-base font-normal leading-normal mt-1">
                                    {shop.description}
                                </p>
                                <Link
                                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 py-1.5 px-3 text-sm font-semibold text-[var(--primary)]"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-base material-symbols-outlined">
                                        storefront
                                    </span>
                                    <span>Xem trang Hội Cafe Sài Gòn</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex justify-center gap-2 px-4 pb-2 flex-wrap">
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--primary)]/20 px-3">
                        <p className="text-[var(--primary)] text-sm font-medium leading-normal">
                            {shop.tag}
                        </p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--primary)]/20 px-3">
                        <p className="text-[var(--primary)] text-sm font-medium leading-normal">
                            {shop.location}
                        </p>
                    </div>
                </div>

                {/* About */}
                <div className="px-4 pt-6 pb-2">
                    <h3 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold leading-tight tracking-[-0.015em]">
                        Giới thiệu
                    </h3>
                </div>
                <div className="px-4 pb-4">
                    <p className="text-[var(--text-subtle-light)] dark:text-[var(--text-subtle-dark)] text-base leading-relaxed">
                        {shop.description}
                    </p>
                </div>

                {/* Contact Info */}
                <div className="px-4 pt-4 pb-4">
                    <div className="flex flex-col gap-2 rounded-xl bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-4 border border-[var(--border-light)] dark:border-[var(--border-dark)]">
                        <a className="flex items-center gap-4 py-2 group" href="#">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                <span className="material-symbols-outlined text-xl material-symbols-outlined">
                                    location_on
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
                                    {shop.address}
                                </p>
                            </div>
                        </a>
                        <div className="h-px w-full bg-[var(--border-light)] dark:bg-[var(--border-dark)] ml-14"></div>
                        <a className="flex items-center gap-4 py-2 group" href="#">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                <span className="material-symbols-outlined text-xl material-symbols-outlined">
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
                        <a className="flex items-center gap-4 py-2 group" href="#">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                <span className="material-symbols-outlined text-xl material-symbols-outlined">
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
                        <a className="flex items-center gap-4 py-2 group" href="#">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                <span className="material-symbols-outlined text-xl material-symbols-outlined">
                                    language
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
                                    {shop.website}
                                </p>
                            </div>
                            <span className="material-symbols-outlined text-2xl text-[var(--text-subtle-light)] dark:text-[var(--text-subtle-dark)] material-symbols-outlined">
                                chevron_right
                            </span>
                        </a>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex w-full items-center justify-center gap-3 p-4 pt-2 pb-6 mt-auto">
                    <button
                        className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-base font-bold leading-normal"
                        style={{ color: theme.primary }}
                    >
                        <span className="material-symbols-outlined material-symbols-outlined">
                            call
                        </span>
                        <span>Gọi điện</span>
                    </button>
                    <button
                        className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full text-white text-base font-bold leading-normal"
                        style={{ backgroundColor: theme.primary }}
                    >
                        <span className="material-symbols-outlined material-symbols-outlined">
                            directions
                        </span>
                        <span>Chỉ đường</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
