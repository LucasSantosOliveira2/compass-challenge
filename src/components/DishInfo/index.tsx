import * as S from './styles';
import React from 'react';
import Dish from "../../assets/images/Dish.png"

type DishProps = {
    name?: string,
    price?: number,
    description?: string,
    image?: string
    onAddToCart?: () => void
}


export const DishInfo = ({ name, price, description, onAddToCart }: DishProps) => {
    return (
        <S.DishContainer>
            <S.DishInfo>
                <S.DishName>{name}</S.DishName>
                <S.DishPrice>₹{price}</S.DishPrice>
                <S.DishDescription>{description}</S.DishDescription>
            </S.DishInfo>
            <S.DishImageContainer>
                <S.ImageContainer>
                    <img src={Dish} alt="Dish" />
                </S.ImageContainer>
                <S.StyledButton onClick={onAddToCart}>Add +</S.StyledButton>
            </S.DishImageContainer>
        </S.DishContainer>
    )

}