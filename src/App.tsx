import React from 'react';
import Card, {CardVariant} from "./components/Card";

function App() {
    return (
        <div>
            react TS!
            <Card onclick={() => console.log('click')} variant={CardVariant.out} width='200px' height='200px'><h2>card1</h2></Card>
            <Card func={() => 5} variant={CardVariant.primary} width='220px' height='230px'>
                <h2>card2</h2>
                <button>add</button></Card>
        </div>
    );
}

export default App;
