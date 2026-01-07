"use client";

import { useState, useEffect } from "react";
import { toggleLike, getLikeStatus } from "../api";

interface LikeButtonProps {
    icom_id: string;
    shop_id: string;
    className?: string;
    initialLiked?: boolean; // Optional if we had this data
}

export default function LikeButton({ icom_id, shop_id, className, initialLiked = false }: LikeButtonProps) {
    const [liked, setLiked] = useState(initialLiked);
    const [loading, setLoading] = useState(false);
    const [visitor_id, setVisitorId] = useState<string | null>(null);

    useEffect(() => {
        // Initialize visitor_id from localStorage or create new one
        let vid = localStorage.getItem("visitor_id");
        if (!vid) {
            vid = crypto.randomUUID();
            localStorage.setItem("visitor_id", vid);
        }
        setVisitorId(vid);

        // Fetch status if we have IDs
        if (vid && icom_id && shop_id) {
            getLikeStatus(icom_id, shop_id, vid)
                .then((res) => setLiked(res.liked))
                .catch((err) => console.error("Failed to check like status", err));
        }
    }, [icom_id, shop_id]);

    const handleLike = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent navigating if inside a Link

        if (!visitor_id || loading) return;

        setLoading(true);
        // Optimistic update
        const previousState = liked;
        setLiked(!liked);

        try {
            const res = await toggleLike(icom_id, shop_id, visitor_id);
            if (res.status === "liked") {
                setLiked(true);
            } else {
                setLiked(false);
            }
        } catch (error) {
            console.error("Like failed", error);
            setLiked(previousState); // Revert on error
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleLike}
            className={`flex items-center justify-center transition-all active:scale-95 ${className || ""}`}
            disabled={loading}
        >
            <span
                className={`material-symbols-outlined text-2xl transition-colors ${liked
                    ? "text-red-500 font-variation-settings-fill"
                    : "text-gray-400 can-hover:group-hover:text-red-400"
                    }`}
                style={{ fontVariationSettings: liked ? "'FILL' 1" : "'FILL' 0" }}
            >
                favorite
            </span>
        </button>
    );
}
