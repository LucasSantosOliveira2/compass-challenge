export type User = {
    name: string,
    username: string,
    email: string,
    password?: string,
}

export type Restaurant = {
    objectId: string,
    createdAt: string;
    deliveryTime: string;
    image: string;
    isExpensive: boolean;
    location: string;
    name: string;
    rating: number;
    updatedAt: string;
    slug: string;
}
