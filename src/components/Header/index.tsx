import * as S from './styles';
import { NavButton } from '../Button/styles';
import { Bag } from '../Image/Bag';
import { Link } from 'react-router-dom';
import { Search } from '../Image/Search';
import { Logo } from './../Logo';
import React from "react";


export const Header = () => {
    return (
        <S.Container>
            <Logo color={true} />
            <S.SecondContainer>
                <S.InputContainer>
                    <S.InputDisplay>
                        <S.Input type="text" placeholder='Enter item or restaurant you are looking for' />
                    </S.InputDisplay>
                    <Search />
                </S.InputContainer>
                <S.InputDisplay>
                    <Bag />
                </S.InputDisplay>
                <Link to="/login">
                    <NavButton>
                        Sign In
                    </NavButton>
                </Link>

            </S.SecondContainer>
        </S.Container>
    );
};
