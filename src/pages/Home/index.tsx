import React, { useState, useEffect, useRef, useMemo } from "react";
import * as S from './styles';
import { CardRestaurant } from "../../components/CardRestaurant";
import Image from "../../assets/images/r.png"
import BananaImage from "../../assets//images/Banana.png"
import AppleImage from "../../assets//images/Apple.png"
import CarouselOne from "../../assets/images/Rectangle1.png"
import CarouselTwo from "../../assets/images/Rectangle2.png"
import CarouselThree from "../../assets/images/Rectangle3.png"
import axios from 'axios';
import { Restaurant } from "../../types/user";


export const Home = () => {
    const carousel = useRef<null | HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const carouselImages = useMemo(
        () => [CarouselOne, CarouselTwo, CarouselThree],
        []
    );

    function transformURL(name: string): string {
        return name.toLowerCase().replace(/\s+/g, "-");
    }


    useEffect(() => {
        const fetchRestaurants = async () => {
            const headers = {
                "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
                "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
                "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
            };

            const query = `
                query GetAllRestaurants {
                    fitMes {
                        count
                        edges {
                            node {
                                objectId
                                name
                                rating
                                deliveryTime
                                location
                                image
                            }
                        }
                    }
                }
            `;

            try {
                const response = await axios.post(
                    "https://parseapi.back4app.com/graphql",
                    { query },
                    { headers }
                );

                const fitMesData = response.data.data.fitMes;
                const restaurantsWithSlugs = fitMesData.edges.map((edge: any) => {
                    const restaurant = edge.node;
                    restaurant.slug = transformURL(restaurant.name);
                    return restaurant;
                });
                setRestaurants(restaurantsWithSlugs);
                setLoading(false);
            } catch (error) {
                setError("Error fetching restaurants");
                setLoading(false);
            }
        };

        if (restaurants.length === 0) {
            fetchRestaurants();
        }


    }, [restaurants]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
        }, 2900);

        return () => {
            clearInterval(interval);
        };
    }, [carouselImages]);

    return (
        <S.Container>
            <S.Headling>
                <S.Wrapper>
                    <S.Description>Premium <span>quality</span></S.Description>
                    <S.Description>
                        Food for your <S.Animation> <S.Banana src={BananaImage} /> </S.Animation>
                        <span> health</span>
                        <S.AnimationBackground> <S.Apple src={AppleImage} /></S.AnimationBackground>
                        <span> & Daily Life</span>
                    </S.Description>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</S.Text>
                </S.Wrapper>
                <S.CarouselContainer ref={carousel} whileTap={{ cursor: "grabbing" }}>
                    <S.Inner
                        animate={{
                            x: -((currentSlide * 260) % (carouselImages.length * 500)),
                        }}
                        transition={{
                            duration: 0.5,
                            type: "tween",
                            ease: "linear",
                        }}
                    >
                        {carouselImages.map((image, index) => (
                            <S.ImageCarousel key={index}
                                src={image}
                                style={{
                                    opacity:
                                        index === currentSlide
                                            ? 1
                                            : index === (currentSlide + 1) % carouselImages.length
                                                ? 1
                                                : 0,
                                    transform: `scale(${index === currentSlide ? 1.2 : 1})`,
                                    transition: "transform 0.3s ease-in-out, opacity 0.1s ease-in-out",
                                }}
                            />
                        ))}
                    </S.Inner>
                </S.CarouselContainer>
            </S.Headling>
            <S.SecondContainer>
                <S.Title>Restaurants</S.Title>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <S.CardContainer>
                        {restaurants.map((restaurant, index) => (
                            <S.StyledLink
                                key={index}
                                to={`/${restaurant.slug}`}
                                state={{ restaurant }}
                            >
                                <CardRestaurant
                                    key={index}
                                    name={restaurant.name}
                                    location={restaurant.location}
                                    rating={restaurant.rating}
                                    deliveryTime={restaurant.deliveryTime}
                                    image={Image}
                                />
                            </S.StyledLink>
                        ))}
                    </S.CardContainer>
                )}
            </S.SecondContainer>
        </S.Container >
    )
}
