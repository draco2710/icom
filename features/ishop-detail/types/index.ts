export interface IShopProfile {
    id: string;
    card_type: "ISHOP";
    name: string;
    description?: string;
    logo?: string;
    banner?: string;
    image_urls?: string;
    province?: string;
    district?: string;
    ward?: string;
    street?: string;
    lat?: number;
    lng?: number;
    phone?: string;
    email?: string;
    website?: string;
    industry: string;
    sub_industry?: string;
    status: string;
    created?: string;
    theme_color?: string;
}

export interface IShopMembership {
    shop_id: string;
    icom_id: string;
    icom_name: string;
    rank?: string;
    status: string;
    joined_date?: string;
    role?: string;
    benefits?: string;
}
