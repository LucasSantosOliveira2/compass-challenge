import { useState } from "react";
import * as S from './styles';
import { IncrementIcon } from "../Image/IncrementICon";
import { DecrementIcon } from "../Image/DecrementICon";

type ItemProps = {
    name?: string
    price?: number
}

export const Item = ({ name }: ItemProps) => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };
    return (
        <S.Container>
            <S.RestaurantName>from <span>Lunch box</span></S.RestaurantName>
            <S.ItemSeleciontContainer>
                <S.DishContainer>
                    <S.NameDish>Brunch for 2 - Veg</S.NameDish>
                    <S.Price>₹599</S.Price>
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

