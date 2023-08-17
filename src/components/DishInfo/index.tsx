import * as S from './styles';
import React from 'react';
import Dish from "../../assets/images/Dish.png"

export const DishInfo = () => {
    return (
        <S.DishContainer>
            <S.DishInfo>
                <S.DishName>Brunch for 2 - Veg (Save upto Rs.45)</S.DishName>
                <S.DishPrice>₹599</S.DishPrice>
                <S.DishDescription>Brunch: One meal to rule them all! Grab this mega saver combo with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!</S.DishDescription>
            </S.DishInfo>
            <S.DishImageContainer>
                <S.ImageContainer>
                    <img src={Dish} alt="Dish" />
                </S.ImageContainer>
                <S.StyledButton>Add +</S.StyledButton>
            </S.DishImageContainer>
        </S.DishContainer>
    )

}