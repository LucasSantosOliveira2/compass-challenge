import * as S from './styles';
import React from 'react';
import { Porcent } from '../../components/Image/Porcent';
import RestaurantImage from '../../assets/images/Restaurant.png'
import { ChangeEvent, useState } from 'react';
import { Item } from '../../components/Item';
import { DishInfo } from '../../components/DishInfo';
import { Column } from '../../components/Image/Column';
import { useLocation } from 'react-router-dom';


export const Items = () => {

    const location = useLocation();
    const restaurant = location.state?.restaurant;
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(Number(event.target.value));
    };

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <S.Container>
                <S.Headling>
                    <S.RestaurantImage src={RestaurantImage} />
                    <S.RestaurantContainer>
                        <S.Title>{restaurant.name}</S.Title>
                        <S.Location>{restaurant.location}</S.Location>
                        <S.Wrapper>
                            <S.Box>
                                <S.Text>{restaurant.rating}</S.Text>
                                <S.Text>100+ ratings </S.Text>
                            </S.Box>
                            <S.Column></S.Column>
                            <S.Box>
                                <S.Text>{restaurant.deliveryTime}</S.Text>
                                <S.Text>Delivery Time </S.Text>
                            </S.Box>
                            <S.Column></S.Column>
                            <S.Box>
                                <S.Text>₹200 </S.Text>
                                <S.Text>Cost for two </S.Text>
                            </S.Box>
                        </S.Wrapper>
                    </S.RestaurantContainer>
                    <S.OffersContainer>
                        <S.OffersTitle>Offers</S.OffersTitle>
                        <S.OfferInfoContainer>
                            <S.OfferInfo>
                                <Porcent />
                                <S.Text>50% off up to ₹100 | Use code TRYNEW</S.Text>
                            </S.OfferInfo>
                            <S.OfferInfo>
                                <Porcent />
                                <S.Text>20% off | Use code PARTY </S.Text>
                            </S.OfferInfo>
                        </S.OfferInfoContainer>
                    </S.OffersContainer>
                </S.Headling>
            </S.Container>
            <S.SecondContainer>
                <S.Bottom>
                    <S.Select name="" onChange={handleSelectChange} value={selectedOption}>
                        <option value="1">Recommended</option>
                        <option value="2">Breakfast Box</option>
                        <option value="3">Lunch Box</option>
                        <option value="4">Combo Box</option>
                        <option value="5">Biriyani Box</option>
                    </S.Select>
                    <S.Options>
                        <S.Option>
                            <h1>
                                Recommended
                            </h1>
                        </S.Option>
                        <S.Option>
                            <h1>
                                Breakfast Box
                            </h1>
                        </S.Option>
                        <S.Option>
                            <h1>
                                Lunch Box
                            </h1>
                        </S.Option>
                        <S.Option>
                            <h1>
                                Combo Box
                            </h1>
                        </S.Option>
                        <S.Option>
                            <h1>
                                Biriyani Box
                            </h1>
                        </S.Option>
                    </S.Options>
                    <S.Line>
                        <Column />
                    </S.Line>
                    <DishInfo />
                    <S.Cart>
                        <S.CartContent>
                            <S.CartText>Cart</S.CartText>
                            <S.CartInfo>2 items</S.CartInfo>
                        </S.CartContent>
                        <Item />
                        <S.CartBottom>
                            <S.CartContent>
                                <S.CartText>Subtotal</S.CartText>
                                <S.CartText>₹799</S.CartText>
                            </S.CartContent>
                            <S.CartInfoPrice>Extra charges may apply</S.CartInfoPrice>
                        </S.CartBottom>
                        <S.Button>Checkout</S.Button>
                    </S.Cart>
                </S.Bottom>
            </S.SecondContainer>
        </section >
    );
}