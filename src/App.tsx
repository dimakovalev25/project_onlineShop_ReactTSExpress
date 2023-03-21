import React from 'react';
import Card, {CardVariant} from "./components/Card";

function App() {
    return (
        <div>
            react TS!
            <Card onclick={(num) => console.log('click', num)} variant={CardVariant.out} width='200px' height='200px'><h2>card1</h2></Card>
            <Card onclick={(num) => console.log('click', num)} variant={CardVariant.primary} width='220px' height='230px'>
                <h2>card2</h2>
                <button>add</button></Card>
        </div>
    );
}

export default App;
