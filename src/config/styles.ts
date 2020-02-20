import './variables.css';

export const styles = {
    font: {
        fontWeight: 'bold',
    },
    size: {
        small: {
            fontSize: 0.8,
            letterSpacing: 0.15,
        },
        medium: {
            fontSize: 1.2,
            letterSpacing: 0.3,
        },
        large: {
            fontSize: 1.5,
            letterSpacing: 0.55,
        },
    },
    button: {
        border: 'none',
        borderRadius: 0.33,
        cursor: 'pointer',
        padding: '10px 20px',
        textTransform: 'uppercase',
    },
    color: {
        primary: {
            background: 'var(--primary-background)',
            color: 'var(--primary-color)',
        },
        secondary: {
            background: 'var(--secondary-background)',
            color: 'var(--secondary-color)',
        },
        error: {
            background: 'var(--error-background)',
            color: 'var(--error-color)',
        },
    },
};
