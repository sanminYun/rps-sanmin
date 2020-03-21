import React from 'react';
import ScoreBoard from "./components/ScoreBoard";
import Player from "./components/Player";
import Counter from "./components/Counter";
import Result from "./components/Result";
import Retry from "./components/Retry";
import Quit from "./components/Quit";
import Setting from "./components/Setting";


function App() {
    return (
        <div className={"container"}>
            <Setting />
            <ScoreBoard/>
            <Player isAuto={false}/>
            <Counter />
            <Result/>
            <div>
                <Retry/>
                <Quit/>
            </div>
        </div>
    );
}

export default App;
