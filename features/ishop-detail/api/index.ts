import { fetchAPI } from "@/shared/lib/api-client";
import { IShopProfile, IShopMembership } from "../types";

/**
 * Get iShop Profile (Public)
 */
export async function getIShopProfile(id: string): Promise<IShopProfile> {
    return fetchAPI<IShopProfile>(`/ishop/${id}`);
}

/**
 * List iShop Memberships (Public)
 */
export async function getIShopMemberships(id: string): Promise<IShopMembership[]> {
    return fetchAPI<IShopMembership[]>(`/ishop/${id}/memberships`);
}
