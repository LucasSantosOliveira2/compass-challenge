import { useState } from "react";
import * as S from './styles';
import { IncrementIcon } from "../Image/IncrementICon";
import { DecrementIcon } from "../Image/DecrementICon";

type ItemProps = {
    restaurant?: string,
    name: string,
    price: number,
    onQuantityChange: (name: string, attQuantity: number) => void,
}

export const Item = ({ name, price, restaurant, onQuantityChange }: ItemProps) => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        setCounter(counter + 1);
        if (restaurant) {
            onQuantityChange(name!, counter + 1);
        }
    };

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            if (restaurant) {
                onQuantityChange(name!, counter - 1);
            }
        }
    };

    return (
        <S.Container>
            <S.RestaurantName>from <span>{restaurant}</span></S.RestaurantName>
            <S.ItemSeleciontContainer>
                <S.DishContainer>
                    <S.NameDish>{name}</S.NameDish>
                    <S.Price>₹{Number((price * counter).toFixed(2)).toLocaleString()}</S.Price>
                </S.DishContainer>
                <S.CounterContainer>
                    <S.CounterImage onClick={decrement}>
                        <DecrementIcon />
                    </S.CounterImage >
                    <S.Number>{counter}</S.Number>
                    <S.CounterImage onClick={increment}>
                        <IncrementIcon />
                    </S.CounterImage>
                </S.CounterContainer>
            </S.ItemSeleciontContainer>
        </S.Container>
    )
}
