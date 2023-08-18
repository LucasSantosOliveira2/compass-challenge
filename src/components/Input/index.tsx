
import * as S from './styles';
import React, { ChangeEvent } from 'react';


export interface InputProps {
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    text?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    autoComplete?: string;
}

export const Input: React.FC<InputProps> = (props) => {
    return (
        <S.Container>
            <S.Label htmlFor={props.name}>{props.label}</S.Label>
            <S.Input
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
                autoComplete={props.autoComplete}
            />
        </S.Container>
    );
}
