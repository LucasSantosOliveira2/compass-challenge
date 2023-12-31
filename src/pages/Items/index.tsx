import * as S from './styles';
import React from 'react';
import { Porcent } from '../../components/Image/Porcent';
import RestaurantImage from '../../assets/images/Restaurant.png'
import { ChangeEvent, useState, useEffect } from 'react';
import { Item } from '../../components/Item';
import { DishInfo } from '../../components/DishInfo';
import { Column } from '../../components/Image/Column';
import { useLocation } from 'react-router-dom';
import { Restaurant, Dish } from '../../types/user';
import { Search } from '../../components/Image/Search';
import { WhiteStar } from '../../components/Image/WhiteStar';
import axios from 'axios';

export const Items = () => {

    const location = useLocation();
    const restaurant = location.state?.restaurant;
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [restaurantDetails, setRestaurantDetails] = useState<Restaurant | null>(null);
    const [cartItems, setCartItems] = useState<Dish[]>([]);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [subtotal, setSubtotal] = useState(0);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(Number(event.target.value));
    };

    const handleAddToCart = (dish: Dish) => {
        const updatedDish = { ...dish, quantity: 1 };
        setCartItems(prevCartItems => [...prevCartItems, updatedDish]);

        const newSubtotal = cartItems.reduce((total: number, item: Dish) => total + (item.price * item.quantity), 0) + (dish.price * 1);
        setSubtotal(Number(newSubtotal.toFixed(2)));
    };
    const handleQuantityChange = (itemName: string, newQuantity: number) => {
        let updatedCart: Dish[] = [];

        if (newQuantity <= 1) {
            updatedCart = cartItems.filter(item => item.name !== itemName);
        } else {
            updatedCart = cartItems.map(item => {
                if (item.name === itemName) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        }

        setCartItems(updatedCart);

        const newSubtotal = updatedCart.reduce((total, item) => total + (item.price * item.quantity), 0);
        setSubtotal(Number(newSubtotal.toFixed(2)));
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            if (restaurant) {
                const headers = {
                    "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
                    "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
                    "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
                };

                const id = restaurant.objectId;
                const query = `
                        query GetRestaurantById {
                            fitMe(id: "${id}") {
                                name
                                image
                                location
                                topDishes {
                                    ...AllDishes
                                }
                            }
                        }
                        fragment AllDishes on Dish {
                            name
                            description
                            image
                            price
                        }
                    `;


                try {
                    const response = await axios.post(
                        "https://parseapi.back4app.com/graphql",
                        { query },
                        { headers }
                    );
                    setRestaurantDetails(response.data.data.fitMe);
                } catch (error) {
                    console.error("Error fetching restaurant details:", error);
                }
            }
        };

        fetchRestaurantDetails();
    }, [restaurant]);

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <S.ItemsContainer>
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
            <S.FavoriteContainer>
                <S.InputContainer>
                    <S.Input type="text" placeholder='Search for dish' />
                    <Search />
                </S.InputContainer>
                <S.FavoriteButton onClick={handleFavoriteClick}>
                    <WhiteStar isFavorite={isFavorite} />Favourite
                </S.FavoriteButton>
            </S.FavoriteContainer>
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
                    <S.DishContainer >
                        {restaurantDetails?.topDishes.map((dish, index) => (
                            <DishInfo
                                key={index}
                                name={dish.name}
                                price={dish.price}
                                description={dish.description}
                                onAddToCart={() => handleAddToCart(dish)}
                            />

                        ))}
                    </S.DishContainer>
                    <S.Cart>
                        <S.CartContent>
                            <S.CartText>Cart</S.CartText>
                            <S.CartInfo>{cartItems.length} items</S.CartInfo>
                        </S.CartContent>
                        {cartItems.map((item, index) => (
                            <Item
                                key={index}
                                name={item.name}
                                price={item.price}
                                restaurant={restaurant.name}
                                onQuantityChange={handleQuantityChange}
                            />
                        ))}
                        <S.CartBottom>
                            <S.CartContent>
                                <S.CartText>Subtotal</S.CartText>
                                <S.CartText>₹{subtotal}</S.CartText>
                            </S.CartContent>
                            <S.CartInfoPrice>Extra charges may apply</S.CartInfoPrice>
                        </S.CartBottom>
                        <S.Button>Checkout</S.Button>
                    </S.Cart>
                </S.Bottom>
            </S.SecondContainer>
        </S.ItemsContainer >
    );
}