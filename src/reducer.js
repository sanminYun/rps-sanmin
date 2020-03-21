import {ActionCreators} from "./actions";
import {DecideResult, Result, SelectRandomRps} from "./js/common";

const initialState = {
    isStart:false,
    win:null,
    mCounter:null,
    time:0,
    rps:"", //유저의 가위바위보
    computerRps:"", //컴퓨터 가위바위보
    result: "", //가위바위보 결과
    resultForDisplay:"",
    totalSet:0,
    totalRound:0,
    limitTime:0,
    playerRoundWin:0, //라운드 승리 횟수
    playerSetWin: 0, //세트 승리 횟수
    computerRoundWin:0, //라운드 승리 횟수
    computerSetWin: 0, //세트 승리 횟수

};


const reducer = (state = initialState, action) => {
    //console.log(store.getState());
    console.log(action.type);
    switch (action.type) {
        case ActionCreators.START:
            return {
                ...state,
                isStart:action.isStart,
                time: state.limitTime,
                mCounter:action.mCounter,
            };
        case ActionCreators.STOP:
            clearInterval(state.mCounter);
            return{
                ...state,
                isStart:action.isStart,
                mCounter:null,
            };
        case ActionCreators.COUNT_DOWN:
            if(state.time === 1){ //시간이 다 지나면 ClearInterval
                clearInterval(state.mCounter);
                if(state.computerRoundWin + 1 === state.totalRound){ //승리하여 라운드가 승리 라운드에 도달 시 세트 승
                    if(state.computerSetWin + 1 === state.totalSet){ //승리하여 세트가 승리 세트에 도달 시 게임 승리
                        console.log("게임 패배");
                        return{
                            ...state,
                            computerSetWin: state.computerSetWin + 1,
                            computerRoundWin: 0, //0으로 초기화
                            playerRoundWin: 0,
                            win:false,
                            resultForDisplay:"시간 초과로 게임 패배",
                            time:0,
                            mCounter: null,
                            isStart:false,

                        }
                    }
                    return{ //세트 패배
                        ...state,
                        computerSetWin: state.computerSetWin + 1,
                        computerRoundWin: 0, //0으로 초기화
                        playerRoundWin: 0,
                        resultForDisplay: "시간 초과로 세트 패배",
                        time:0,
                        mCounter: null,
                        isStart:false,
                    }

                }
                return { //라운드 패배
                    ...state,
                    computerRoundWin: state.computerRoundWin + 1,
                    resultForDisplay: "시간 초과로 라운드 패배",
                    time:0,
                    mCounter: null,
                    isStart:false,
                };
            }

            return{
                ...state,
                time:parseInt(state.time) - 1,
                mCounter: state.time === 1 ? null : state.mCounter,
                //time:parseInt(state.time) -1,
            };


        case ActionCreators.SELECT:
            //console.log(state);
            let computerRps = SelectRandomRps();
            let result = DecideResult(action.rps, computerRps);
            let resultForDisplay = `${action.rps} vs ${computerRps} 로 ${result}`;

            if(result === Result.PLAYER_WIN) {
                let playerRoundWin = state.playerRoundWin + 1;
                let playerSetWin = state.playerSetWin;
                if(playerRoundWin === state.totalRound){ //승리하여 라운드가 승리 라운드에 도달 시 세트 승
                    playerRoundWin = 0;
                    playerSetWin += 1;
                    if(playerSetWin === state.totalSet){ //승리하여 세트가 승리 세트에 도달 시 게임 승리
                        // console.log("게임 승리");
                        return{
                            ...state,
                            playerSetWin: playerSetWin,
                            playerRoundWin: playerRoundWin, //0으로 초기화
                            computerRoundWin: 0,
                            win:true,
                            resultForDisplay:"게임 승리"
                        }
                    }

                    return{
                        ...state,
                        playerSetWin: playerSetWin,
                        playerRoundWin: playerRoundWin, //0으로 초기화
                        computerRoundWin: 0,
                        resultForDisplay,
                    }

                }
                return {
                    ...state,
                    playerRoundWin: playerRoundWin,
                    resultForDisplay
                };
            } else if (result === Result.PLAYER_LOSE) {
                let computerRoundWin = state.computerRoundWin + 1;
                let computerSetWin = state.computerSetWin;
                if(computerRoundWin === state.totalRound){ //승리하여 라운드가 승리 라운드에 도달 시 세트 승
                    computerRoundWin = 0;
                    computerSetWin += 1;
                    if(computerSetWin === state.totalSet){ //승리하여 세트가 승리 세트에 도달 시 게임 승리
                        // console.log("게임 패배");
                        return{
                            ...state,
                            win:false,
                            computerSetWin: computerSetWin,
                            computerRoundWin: computerRoundWin, //0으로 초기화
                            playerRoundWin: 0,
                            resultForDisplay:"게임 패배"
                        }
                    }

                    return{
                        ...state,
                        computerSetWin: computerSetWin,
                        computerRoundWin: computerRoundWin, //0으로 초기화
                        playerRoundWin: 0,
                        resultForDisplay,
                    }

                }
                return {
                    ...state,
                    computerRoundWin: computerRoundWin,
                    resultForDisplay
                };
            } else if(result === Result.DRAW) {
                return {
                    ...state,
                    rps:"",
                    computerRps:"",
                    resultForDisplay
                };

            } else { //결과가 잘못 계산되어짐
                return {
                    ...state,
                };
            }

        case ActionCreators.SETTING_SET:
            return {
                ...state,
                totalSet:action.totalSet,
            };
        case ActionCreators.SETTING_LIMIT_TIME:
            return {
                ...state,
                limitTime:action.limitTime,
            };
        case ActionCreators.SETTING_ROUND:
            return {
                ...state,
                totalRound:action.totalRound,
            };
        case ActionCreators.QUIT:
            if(state.mCounter !== null){
                clearInterval(state.mCounter);
            }
            return{
                ...initialState,
            };
        case ActionCreators.RETRY:
            if(state.mCounter !== null){
                clearInterval(state.mCounter);
            }
            return{
                ...initialState,
                totalSet:state.totalSet,
                totalRound:state.totalRound,
                limitTime:state.limitTime,

            };
        default:
            return {...state}
    }
};

export default reducer