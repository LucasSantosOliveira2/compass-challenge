import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosInstance, Method } from "axios";

type Restaurant = {
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
}


interface useAxiosProps {
    url: string;
    method?: Method;
    headers?: AxiosRequestConfig["headers"];
}

const useAxios = ({ url, method = "GET", headers }: useAxiosProps) => {
    const [data, setData] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        const axiosInstance: AxiosInstance = axios.create({
            baseURL: url,
            headers: headers
        });

        try {
            const response = await axiosInstance.request({ method });
            const responseData = response.data;
            setData(responseData.results || []);
            setError(null);
        } catch (error) {
            setError("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error };
};

export default useAxios;
