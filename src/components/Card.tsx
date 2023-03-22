import React from 'react';


export enum CardVariant {
    border = 'border',
    primary = 'primary'
}

interface CardProps {
    children?: React.ReactNode
    width: string;
    height: string;
    variant: CardVariant;
    onClick: () => void;
}


const Card = ({width, height, children, variant, onClick}: CardProps) => {
    return (
        <>
            <div
                onClick={onClick}
                style={{
                    width,
                    height,
                    background: "orange",
                    marginTop: '1rem',
                    border: variant === CardVariant.border ? '2px solid black' : '2px solid red'
                }}>{children}</div>

        </>
    );
};

export default Card;
