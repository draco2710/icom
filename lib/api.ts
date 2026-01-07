import { fetchAPI } from "@/shared/lib/api-client";
import { BoardMember } from "@/shared/types";

/**
 * Get iCom Board Members
 */
export async function getIComBoard(id: string): Promise<BoardMember[]> {
    return fetchAPI<BoardMember[]>(`/icom/${id}/board`);
}
