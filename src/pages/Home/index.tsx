import React from "react";
import useAxios from "../../hook/useAxios";
import { CardRestaurant } from "../../components/CardRestaurant";
import Image from "../../assets/images/r.png"

export const Home: React.FC = () => {
    const apiUrl = "https://parseapi.back4app.com/classes/FitMe";
    const apiHeaders = {
        "X-Parse-Application-Id": "lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh",
        "X-Parse-REST-API-Key": "8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08",
        "content-type": "application/json"
    };

    const { data, loading, error } = useAxios({
        url: apiUrl,
        method: "GET",
        headers: apiHeaders
    });

    return (
        <div>
            <h1>Home</h1>
            <h2>Restaurants</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    {data.map((restaurant, index) => (
                        <CardRestaurant
                            key={index}
                            name={restaurant.name}
                            location={restaurant.location}
                            rating={restaurant.rating}
                            deliveryTime={restaurant.deliveryTime}
                            image={Image}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
