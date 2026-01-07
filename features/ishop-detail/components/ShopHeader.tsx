import BackButton from "@/shared/components/BackButton";
import LikeButton from "@/features/like-system/components/LikeButton";

interface ShopHeaderProps {
    primary_icom_id: string | null;
    shop_id: string;
}

export default function ShopHeader({ primary_icom_id, shop_id }: ShopHeaderProps) {
    return (
        <div className="sticky top-0 z-10 flex items-center bg-[var(--background-light)]/80 dark:bg-[var(--background-dark)]/80 p-4 pb-3 backdrop-blur-sm">
            <BackButton />
            <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary-light dark:text-text-primary-dark pr-10 truncate">
                Thông tin iShop
            </h2>
            {/* Like Button (if iCom context exists) */}
            {primary_icom_id && (
                <div className="mr-2">
                    <LikeButton
                        icom_id={primary_icom_id}
                        shop_id={shop_id}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-primary-light dark:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    />
                </div>
            )}
            <button className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-primary-light dark:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-2xl">
                    share
                </span>
            </button>
        </div>
    );
}
