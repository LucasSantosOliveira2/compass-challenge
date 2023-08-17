import * as S from './styles';
import { NavButton } from '../Button/styles';
import { Bag } from '../Image/Bag';
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../Image/Search';
import { Logo } from './../Logo';
import React from "react";


export const Header = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    return (
        <S.Container>
            <Logo color={true} />
            {!isLoginPage && !isRegisterPage && (
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
            )}
        </S.Container>
    );
};
