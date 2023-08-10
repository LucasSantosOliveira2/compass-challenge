import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #808080;
    width: 100%;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props => props.theme.colors.black)};
`