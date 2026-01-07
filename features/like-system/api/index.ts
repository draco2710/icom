import { fetchAPI } from "@/shared/lib/api-client";
import { LikeResponse } from "../types";

/**
 * Toggle Like
 */
export async function toggleLike(
    icom_id: string,
    shop_id: string,
    visitor_id: string
): Promise<LikeResponse> {
    return fetchAPI<LikeResponse>(`/icom/${icom_id}/likes/${shop_id}`, {
        method: "POST",
        body: JSON.stringify({
            visitor_id: visitor_id,
            source: "icom" // explicit source
        })
    });
}

/**
 * Check Like Status
 */
export async function getLikeStatus(
    icom_id: string,
    shop_id: string,
    visitor_id: string
): Promise<{ liked: boolean }> {
    return fetchAPI<{ liked: boolean }>(`/icom/${icom_id}/likes/${shop_id}/status?visitor_id=${visitor_id}`);
}
