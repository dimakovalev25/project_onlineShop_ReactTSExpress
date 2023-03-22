import React, {FC} from 'react';

interface TitleProps {
    children: React.ReactNode;
    type: 'h1' | 'h2' | 'h3'
}

const Title: FC<TitleProps> = ({children, type}) => {

    switch (type){
        case "h1":
            return <h1>{children}</h1>
        case "h2":
            return <h2>{children}</h2>
        case "h3":
            return <h3>{children}</h3>
        default:
            return <></>
    }

};

export default Title;
