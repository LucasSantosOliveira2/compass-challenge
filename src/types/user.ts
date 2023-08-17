export type User = {
    name: string,
    username: string,
    email: string,
    password?: string,
}

export type Restaurant = {
    createdAt: string;
    deliveryTime: string;
    image: string;
    isExpensive: boolean;
    location: string;
    name: string;
    rating: number;
    topDishes: {
        // Defina a estrutura dos pratos principais aqui, se necessário
    }[];
    updatedAt: string;
    slug: string;
}
