import { fetchAPI } from "@/shared/lib/api-client";
import { ListResponse, IShopMember } from "@/shared/types";
import { IComProfile, IComMetadata } from "../types";

/**
 * Get iCom Profile by ID
 */
export async function getIComProfile(id: string): Promise<IComProfile> {
    return fetchAPI<IComProfile>(`/icom/${id}`);
}

/**
 * Get iCom Members (Paginated)
 */
export async function getIComMembers(
    id: string,
    page: number = 1,
    limit: number = 20
): Promise<ListResponse<IShopMember>> {
    return fetchAPI<ListResponse<IShopMember>>(`/icom/${id}/members?page=${page}&limit=${limit}`);
}

/**
 * Search iCom Members
 */
export async function searchIComMembers(
    id: string,
    query: string,
    page: number = 1,
    limit: number = 20
): Promise<ListResponse<IShopMember>> {
    return fetchAPI<ListResponse<IShopMember>>(
        `/icom/${id}/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
    );
}

/**
 * Get iCom Metadata (filter suggestions)
 */
export async function getIComMetadata(id: string): Promise<IComMetadata> {
    return fetchAPI<IComMetadata>(`/icom/${id}/metadata`);
}
