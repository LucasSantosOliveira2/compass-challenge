import * as S from './styles';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Facebook } from '../Image/Facebook';
import { Twitter } from '../Image/Twitter';
import { Instagram } from '../Image/Instagram';

export const Footer = () => {
    return (
        <S.Footer>
            <Logo color={false} titleColor='#FFFFFF' />
            <ul>
                <li>
                    <Link to=''>About us</Link>
                </li>
                <li>
                    <Link to=''>Delivery</Link>
                </li>
                <li>
                    <Link to=''>Help & Support</Link>
                </li>
                <li>
                    <Link to=''>T&C</Link>
                </li>
            </ul>
            <p>Contact: +91 1234567899</p>
            <div>
                <Facebook />
                <Instagram />
                <Twitter />
            </div>
        </S.Footer>
    )
}
