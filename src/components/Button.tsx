import React from 'react';
// styles
import styled from '@emotion/styled';
import { font, primaryColors, shape } from 'config/styles';

const Wrapper = styled.button`
    ${font};
    ${primaryColors};
    ${shape};
`;

interface ButtonProps {
    color: string;
    disabled: boolean;
    fullWidth: boolean;
    href: string;
    icon: any;
    iconPosition: 'start' | 'end';
    loading: boolean;
    onClick: any;
    shape: 'circle' | 'round' | 'square';
    size: 'small' | 'medium' | 'large';
    text: string;
    variant: 'text' | 'outlined' | 'contained';
}

const Button: React.FC<ButtonProps> = ({ onClick, text }: ButtonProps) => {
    return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

Button.defaultProps = {
    color: 'primary',
    disabled: false,
    fullWidth: false,
    loading: false,
    iconPosition: 'start',
    shape: 'square',
    size: 'medium',
    text: '',
    variant: 'contained',
};

export default Button;
