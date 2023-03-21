import React, {FC, useState} from "react";
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
    onclick: (num: number) => void;
}




const Card: FC<CardProps> = ({width, height, children, variant ,  onclick}) => {


    const [state, setState] = useState(0)

    return (
        <div  onClick={() => onclick(state)} style={{width, height,  border: variant === CardVariant.out ? '10px solid orangered' : '2px solid orangered'}}>
            {children}

        </div>
    )
}
export default Card;