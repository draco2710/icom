export interface ActionButton {
    action_id: string;
    type: string;
    title: string;
    url: string;
    icon?: string;
    order?: number;
}

export interface BoardMember {
    member_id: string;
    user_id?: string;
    name: string;
    role: string;
    contact?: string;
    avatar?: string;
    bio?: string;
}

export interface ListResponse<T> {
    members?: T[];
    results?: T[];
    total?: number;
    page?: number;
    limit?: number;
}

export interface IComMemberFilter {
    query?: string;
    industry?: string;
    sub_industry?: string;
    province?: string;
    district?: string;
    ward?: string;
    status?: string;
    rank?: string;
    page?: number;
    limit?: number;
}

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

export interface IShopMember {
    shop_id: string;
    name: string;
    logo?: string;
    banner?: string;
    industry: string;
    sub_industry?: string;
    province?: string;
    district?: string;
    ward?: string;
    rank?: string;
    status: string;
    joined_date?: string;
    lat?: number;
    lng?: number;
    description?: string;
    phone?: string;
    email?: string;
    website?: string;
    role?: string;
    // Extra fields for displaying
    location?: string;
    tag?: string;
    tagBg?: string;
    rating?: string;
}

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

export interface LikeResponse {
    message: string;
    status: "liked" | "unliked";
}
