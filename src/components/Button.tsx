import React from 'react';
// styles
import styled from '@emotion/styled';
import { styles } from 'config/styles';
import { convertStyleObjectToCSS } from 'utils/StyleUtilities';

interface ButtonProps {
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

const Wrapper = styled.button`
    ${convertStyleObjectToCSS(styles.button)};
    font-weight: ${styles.font.fontWeight};
    ${props => styles.color[`${props.color}`]};
    ${props => convertStyleObjectToCSS(styles.size[`${props.size}`])}
`;

const Button: React.FC<ButtonProps> = ({ onClick, text, children, color, size }: ButtonProps) => {
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

export default Button;
