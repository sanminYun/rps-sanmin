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
            <div className={"description"}>
                세팅 Input들에 1이상의 자연수를 입력합니다. <br />
                세팅에 값을 입력하지 않으면 START 할 수 없습니다. <br />
                스타트를 누른 후 카운터가 작동하면 "가위","바위","보" 를 선택할 수 있습니다. <br />
                Retry 버튼을 누르면 세팅 값이 초기화 되지 않고 결과만 초기화 됩니다. <br/>
                Quit 버튼을 누르면 결과 및 세팅값이 초기화 됩니다. <br/>
            </div>
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
