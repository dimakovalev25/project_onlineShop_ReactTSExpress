import React, {FC} from "react";
import {ReactNode} from "react";


export enum CardVariant {
    out = 'out',
    primary = 'primary'

}
interface CardProps {
    width: string;
    height: string;
    children?: ReactNode | React.ReactChild;
    variant?: CardVariant;
    func?: () => number;
    onclick?: () => void;
}




const Card: FC<CardProps> = ({width, height, children, variant , func, onclick}) => {
    return (
        <div  onClick={onclick} style={{width, height,  border: variant === CardVariant.out ? '10px solid orangered' : '2px solid orangered'}}>
            {children}

        </div>
    )
}
export default Card;