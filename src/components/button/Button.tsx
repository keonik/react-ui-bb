import React from 'react';
// styles
import styled from '@emotion/styled';
import { styles } from 'config/styles';
import { convertStyleObjectToCSS } from 'utils/StyleUtilities';

export interface ButtonProps {
    children?: any;
    color: 'primary' | 'secondary' | 'error';
    disabled: boolean;
    fullWidth: boolean;
    icon: any;
    iconPosition: 'start' | 'end';
    loading: boolean;
    onClick: (event: React.MouseEvent) => void;
    shape: 'circle' | 'round' | 'square';
    size: 'small' | 'medium' | 'large';
    text: string;
    variant: 'text' | 'outlined' | 'contained';
}

const float = '2px';
const Wrapper = styled.button`
    ${convertStyleObjectToCSS(styles.button)};
    font-weight: ${styles.font.fontWeight};
    ${(props): string => styles.color[`${props.color}`]};
    ${(props): string => convertStyleObjectToCSS(styles.size[`${props.size}`])};
    outline: none;
    transition: transform 0.5s cubic-bezier(0.1, 1.51, 1, 1.22);
    &:hover {
        -webkit-transform: translateY(-${float});
        transform: translateY(-${float});
    }
    &:active {
        -webkit-transform: translateY(${float});
        transform: translateY(${float});
    }
`;

export const Button: React.FC<ButtonProps> = ({
    onClick,
    text,
    children,
    color,
    size,
}: ButtonProps) => {
    return (
        <Wrapper color={color} onClick={onClick} size={size}>
            {children}
            {text}
        </Wrapper>
    );
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
