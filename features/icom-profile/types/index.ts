import { ActionButton, BoardMember } from "@/shared/types";

export interface IComProfile {
    id: string;
    card_type: "ICOM";
    name: string;
    full_name?: string;
    slogan?: string;
    description?: string;
    logo?: string;
    banner?: string;
    theme_color?: string;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    allowed_industries?: string; // JSON string
    operating_areas?: string; // JSON string
    status: "ACTIVE" | "INACTIVE" | "PENDING";
    require_approval?: string | boolean; // "true"/"false" or boolean
    auto_activate?: string | boolean;
    max_members?: number;
    total_members?: number;
    active_members?: number;
    created?: string;
    modified?: string;
    board?: BoardMember[];
    actions?: ActionButton[];
}

export interface MetadataItem {
    name: string;
    count: number;
}

export interface IComMetadata {
    industries: MetadataItem[];
    sub_industries: MetadataItem[];
    areas: MetadataItem[];
}
