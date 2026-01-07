import Link from "next/link";
import { IShopMember } from "@/shared/types";
import LikeButton from "@/features/like-system/components/LikeButton";

interface MemberCardProps {
    member: IShopMember;
    icomId: string;
}

export default function MemberCard({ member, icomId }: MemberCardProps) {
    return (
        <Link
            href={`/ishop/${member.shop_id}`}
            className="group relative flex flex-col bg-white dark:bg-card-dark rounded-2xl shadow-sm can-hover:hover:shadow-xl can-hover:hover:-translate-y-1 transition-all duration-300 border border-transparent can-hover:hover:border-primary/10 overflow-hidden"
        >
            <div
                className="h-44 w-full bg-cover bg-center bg-gray-200 dark:bg-gray-800 relative"
                style={{ backgroundImage: `url('${member.banner || member.logo || "https://placehold.co/400x200"}')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 can-hover:group-hover:opacity-70 transition-opacity"></div>
                {member.rank && (
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider shadow-lg">
                        <span className="material-symbols-outlined text-[12px]">stars</span>
                        {member.rank}
                    </div>
                )}
                {/* Like Button on Image */}
                <div className="absolute top-3 right-3 z-10" onClick={(e) => e.preventDefault()}>
                    <LikeButton
                        icom_id={icomId}
                        shop_id={member.shop_id}
                        className="w-9 h-9 bg-black/30 backdrop-blur-md rounded-full hover:bg-black/50 text-white border border-white/20"
                    />
                </div>
            </div>
            <div className="p-5 relative flex-1 flex flex-col">
                {member.industry && (
                    <div className="absolute -top-3.5 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md capitalize tracking-wide">
                        {member.industry}
                    </div>
                )}
                <div className="mt-2 flex-1">
                    <h4 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark leading-tight line-clamp-1 can-hover:group-hover:text-primary transition-colors">
                        {member.name}
                    </h4>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2 flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">
                            location_on
                        </span>
                        <span className="line-clamp-2 leading-relaxed">
                            {member.district || member.province ? [member.district, member.province].filter(Boolean).join(", ") : "Unknown Location"}
                        </span>
                    </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold text-primary uppercase tracking-wider can-hover:group-hover:underline decoration-2 underline-offset-4">
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </div>
            </div>
        </Link>
    );
}
