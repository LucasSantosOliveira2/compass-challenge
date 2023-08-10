
import * as S from './styles';
import * as React from 'react'; // Importe o React


type BoxTitleProps = {
    title?: string,
}

export const BoxTitle = ({ title }: BoxTitleProps) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
}