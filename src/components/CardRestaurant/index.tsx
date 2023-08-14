

import { Time } from './../Image/Time/index';
import * as S from './styles';
import { Star } from '../Image/Star';


type CardProps = {
    name: string,
    deliveryTime: string;
    location: string;
    rating: number;
    image?: string;
}


export const CardRestaurant = ({ name, location, rating, deliveryTime, image }: CardProps) => {
    const isRatingHigh = rating > 4;
    return (
        <S.Container>
            <S.Image src={image} alt={image} />
            <S.Wrapper>
                <S.Title>{name}</S.Title>
                <S.SecondContainer>
                    <S.Location>{location}</S.Location>
                    <S.SecondContainer> <Star isPrimary={isRatingHigh} /><S.Info>{rating}</S.Info></S.SecondContainer>
                </S.SecondContainer>
            </S.Wrapper>
            <S.SecondContainer><Time /> <S.Info>{deliveryTime}</S.Info></S.SecondContainer>

        </S.Container>
    )
}