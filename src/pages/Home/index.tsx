import React, { useState, useEffect, useRef } from "react";
import * as S from './styles';
import useAxios from "../../hook/useAxios";
import { CardRestaurant } from "../../components/CardRestaurant";
import Image from "../../assets/images/r.png"
import BananaImage from "../../assets//images/Banana.png"
import AppleImage from "../../assets//images/Apple.png"
import CarouselOne from "../../assets/images/Rectangle1.png"
import CarouselTwo from "../../assets/images/Rectangle2.png"
import CarouselThree from "../../assets/images/Rectangle3.png"


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

    const carouselImages = [CarouselOne, CarouselTwo, CarouselThree];
    const carousel = useRef<null | HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
        }, 2900);

        return () => {
            clearInterval(interval);
        };
    }, [carouselImages.length]);

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
                    </S.CardContainer>
                )}
            </S.SecondContainer>
        </S.Container >
    );
};
