import * as S from './styles';
import { LogoImage } from './../Image/LogoImage';
import React from "react";


type LogoProps = {
    color?: boolean,
    titleColor?: string,
}

export const Logo = ({ color, titleColor }: LogoProps) => {
    return (
        <S.StyledLink to="/">
            <S.LogoContainer>
                <LogoImage isPrimary={color} />
                <S.LogoTitle style={{ color: titleColor }}> Fitme</S.LogoTitle>
            </S.LogoContainer >
        </S.StyledLink>
    )
};
