import * as S from './styles';
import { NavButton } from '../Button/styles';
import { Bag } from '../Image/Bag';
import { Search } from '../Image/Search';
import { Logo } from './../Logo';

export const Header = () => {
    return (
        <S.Container>
            <Logo color={true} />
            <S.SecondContainer>
                <S.InputContainer>
                    <S.Input type="text" placeholder='Enter item or restaurant you are looking for' />
                    <Search />
                </S.InputContainer>
                <Bag />
                <NavButton>
                    Sign In
                </NavButton>
            </S.SecondContainer>
        </S.Container>
    );
};
