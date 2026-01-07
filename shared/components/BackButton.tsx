"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className }: { className?: string }) {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className={className || "flex size-10 shrink-0 items-center justify-center rounded-full text-text-primary-light dark:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/10 transition-colors"}
        >
            <span className="material-symbols-outlined text-2xl material-symbols-outlined">
                arrow_back
            </span>
        </button>
    );
}
