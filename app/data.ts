export interface IShop {
    id: string;
    slug: string;
    name: string;
    tag: string;
    tagBg: string;
    location: string;
    rating: string;
    image: string;
    banner: string;
    logo: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    theme?: {
        primary: string;
        backgroundLight: string;
        backgroundDark: string;
        surfaceLight: string;
        surfaceDark: string;
        borderLight: string;
        borderDark: string;
        textSubtleLight: string;
        textSubtleDark: string;
    };
}

export interface ICom {
    name: string;
    description: string;
    logo: string;
    shops: IShop[];
}

export const mockShops: IShop[] = [
    {
        id: "1",
        slug: "gourmet-burger-joint",
        name: "Gourmet Burger Joint",
        tag: "F&B",
        tagBg: "bg-primary-blue",
        location: "District 1",
        rating: "4.8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBptQnc3fhp0rWDACiLPAEO7K23w_IUCKJE4piEOCcaSFjhE9v5V4EpW3EXWMHyIejswFv3ZwnKq-5EMcGXVVvTAkCr3JNdztAVn4e2DH3qePdf-1NPah2HG_2hDblHimad-8gFiY6bKxBBPVWV_5YduxgthpD83Dtm6udIAG_RzJGtDPQVgUXBgXGsZTm85uL3X3GtyYwVtH4yk8YAFK50gdDfrtDm7kW4xqJJjxXGFZhzmD2-xAIs1kg8oFoXDZOu6tzYy-J0cjg",
        banner: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsoIIc0fNNOm4gwARZx8uPBvbj-PkbTT2rbcandT9oOmCgtBcd-cCDI35qmYsuDAyqyfjyIbZIHT69nRx1Ka9P-BdzIqMCYAtN2EtmxRlMgaPr2-iyZ5uw0eiUICjqiEcigknLogZl4lRxf2TvZ8H5yuM0em5-I4z7p0y33lFe83Xmj_IjyW5tDpsJmsF7CFffxIzRj6zlzmUC21zP87e-H_OlSrP1LIdrXkUcUDM_wtVI7kGmJ0x6Dd8MsR2_WF2IvCx7WFY-prk",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdEfNEWa8MQMum4GKrPJJIZ1UbhANSWpqpqPZ3gOfSWzvS4fekApvCUeyktmg13vQn_c6BJxV5KuDiLH-JkAev4holKTFfmf-VGmNPcr0aiZVWU7OARx2gQIm8F_HCtF8VReYP14JKhEjqKkPpsuDKcb6Y1FOo7RxxgUuJKCpLmGh431q_Ra-RlArL9rRBis1HH6kzQjCKwLF9k85IP5WZ06J8fKg7yUW_MZR7XoHdeZcy0Lpsl8cV1JoSbq7s0PooLz6IMIWo7wk",
        description: "Savour the finest gourmet burgers in town, crafted with premium ingredients and passion.",
        address: "123 Lê Lợi, District 1, HCM",
        phone: "0123 456 789",
        email: "info@gourmetburger.vn",
        website: "gourmetburger.vn"
    },
    {
        id: "2",
        slug: "organic-market",
        name: "Organic Market",
        tag: "Retail",
        tagBg: "bg-gray-800",
        location: "District 3",
        rating: "4.9",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0URsisdf26jgpJOHbyiesqCRKHyEG2yuwFQURay00nL-ZegZE1ApYb6kKVGSJT3pqBzJJ4UWUD68t3UYeNX2pkOs7drZ9ksj7Ee6vIX2hl-rZCyDjrohYkPjnPJd7FrMgX9b47rzwB7Ni4L1YR_BaHFmBeK9BUoMLafQx_d6bRc3neRYDMXGSMH6BffM4D0qKMS_gxtDz4xwQJuakSWEWErWdrpyqKmK5pjAwL1HiJDv8QfGsuu6lw4H3BzD7ldjyEUi07CvLj6w",
        banner: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsoIIc0fNNOm4gwARZx8uPBvbj-PkbTT2rbcandT9oOmCgtBcd-cCDI35qmYsuDAyqyfjyIbZIHT69nRx1Ka9P-BdzIqMCYAtN2EtmxRlMgaPr2-iyZ5uw0eiUICjqiEcigknLogZl4lRxf2TvZ8H5yuM0em5-I4z7p0y33lFe83Xmj_IjyW5tDpsJmsF7CFffxIzRj6zlzmUC21zP87e-H_OlSrP1LIdrXkUcUDM_wtVI7kGmJ0x6Dd8MsR2_WF2IvCx7WFY-prk",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdEfNEWa8MQMum4GKrPJJIZ1UbhANSWpqpqPZ3gOfSWzvS4fekApvCUeyktmg13vQn_c6BJxV5KuDiLH-JkAev4holKTFfmf-VGmNPcr0aiZVWU7OARx2gQIm8F_HCtF8VReYP14JKhEjqKkPpsuDKcb6Y1FOo7RxxgUuJKCpLmGh431q_Ra-RlArL9rRBis1HH6kzQjCKwLF9k85IP5WZ06J8fKg7yUW_MZR7XoHdeZcy0Lpsl8cV1JoSbq7s0PooLz6IMIWo7wk",
        description: "Your local destination for fresh, organic, and sustainable products.",
        address: "456 Võ Văn Tần, District 3, HCM",
        phone: "0987 654 321",
        email: "hello@organicmarket.com",
        website: "organicmarket.com"
    },
    {
        id: "3",
        slug: "the-coffee-house",
        name: "The Coffee House",
        tag: "F&B",
        tagBg: "bg-primary",
        location: "District 1",
        rating: "4.7",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU9RRaUDS1Tt8d0oxxbZ17eMkyCFxrzj_WqSCoHc9njCoLckKA1VFpZn5hvid_hhOaG-tPo_CqoipkAnegvGvq2wUjSMnwiOPCgGA83UvdGmLyKeIN-1Qc1-SGKe_cQSgFferZQKCLOrspa6LofmAlmCjXUH0hmJTaOy321Si6B9FdtubItdPUHOjE1WrhyZAiUDS3R6RO0R_cySy9d6M7mVJioumb7oZa_4J-V_aJrmHdbHEh5AmdI-XiqIDFaWNevh-tPhPdk98",
        banner: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsoIIc0fNNOm4gwARZx8uPBvbj-PkbTT2rbcandT9oOmCgtBcd-cCDI35qmYsuDAyqyfjyIbZIHT69nRx1Ka9P-BdzIqMCYAtN2EtmxRlMgaPr2-iyZ5uw0eiUICjqiEcigknLogZl4lRxf2TvZ8H5yuM0em5-I4z7p0y33lFe83Xmj_IjyW5tDpsJmsF7CFffxIzRj6zlzmUC21zP87e-H_OlSrP1LIdrXkUcUDM_wtVI7kGmJ0x6Dd8MsR2_WF2IvCx7WFY-prk",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdEfNEWa8MQMum4GKrPJJIZ1UbhANSWpqpqPZ3gOfSWzvS4fekApvCUeyktmg13vQn_c6BJxV5KuDiLH-JkAev4holKTFfmf-VGmNPcr0aiZVWU7OARx2gQIm8F_HCtF8VReYP14JKhEjqKkPpsuDKcb6Y1FOo7RxxgUuJKCpLmGh431q_Ra-RlArL9rRBis1HH6kzQjCKwLF9k85IP5WZ06J8fKg7yUW_MZR7XoHdeZcy0Lpsl8cV1JoSbq7s0PooLz6IMIWo7wk",
        description: "The Coffee House là một chuỗi cửa hàng cà phê nổi tiếng tại Việt Nam, mang đến không gian thoải mái và sản phẩm chất lượng cao. Chúng tôi tự hào phục vụ những hạt cà phê hảo hạng cùng các loại trà và bánh ngọt thơm ngon.",
        address: "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. HCM",
        phone: "0987 654 321",
        email: "support@thecoffeehouse.vn",
        website: "thecoffeehouse.com",
        theme: {
            primary: "#e06f1f",
            backgroundLight: "#f8f7f6",
            backgroundDark: "#211811",
            surfaceLight: "#ffffff",
            surfaceDark: "#2a221b",
            borderLight: "#f3ece8",
            borderDark: "#3a3129",
            textSubtleLight: "#956d50",
            textSubtleDark: "#a39990",
        }
    }
];

export const mockICom: ICom = {
    name: "iCom Name",
    description: "Connecting Local Businesses",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcLVBYIQoAsrylAzQNJjvOP5DvInECdrV0DvJ4kDbgH8ofCoLns7Af7Wm-ZsddTx9nBjkCLe7mgdUv154K4pR_6EEpKOs67SMI1z50xfvrVzh5ZQuYA7VE4w4xIp1IiTNpuJFbGvlz01O5XE4Hiuh2UooKSpVgG4VKhoVACairTPCJtK9fD2rQsL7DvtL57hP5erWk5gNfde8-Xg2Kbh89KyaPRJs1iHlbWKkwEFQyKdGzV5g03H-8mntHQQ_zTIEFO6gGRU9MYYI",
    shops: mockShops
};
