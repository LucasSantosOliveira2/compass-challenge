import * as S from './styles';
import { Logo } from '../Logo';
import { Facebook } from '../Image/Facebook';
import { Twitter } from '../Image/Twitter';
import { Instagram } from '../Image/Instagram';
import * as React from 'react';


export const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <Logo color={false} titleColor='#FFFFFF' />
                <S.LinksContainer>
                    <li>
                        <S.Links to=''>About us</S.Links>
                    </li>
                    <li>
                        <S.Links to=''>Delivery</S.Links>
                    </li>
                    <li>
                        <S.Links to=''>Help & Support</S.Links>
                    </li>
                    <li>
                        <S.Links to=''>T&C</S.Links>
                    </li>
                </S.LinksContainer>
                <S.Contact>Contact: +91 1234567899</S.Contact>
            </S.Container>
            <S.SocialMedia>
                <Facebook />
                <Instagram />
                <Twitter />
            </S.SocialMedia>
        </S.Footer>
    )
}
