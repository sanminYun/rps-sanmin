import React from "react";
import {connect} from "react-redux";
import {countDown, startGame, stopGame} from "../actions";
import { store } from '../store';

const Counter = ({isStart = false, time, start,limitTime, totalSet, totalRound, win}) => {
    return (
        <div>
            <h1>Counter Component</h1>
            {
                isStart ?
                    <h2>
                        {time}
                    </h2>
                    :
                    <button
                        className={"btn-start"}
                        onClick={() => {
                            if(limitTime === 0 || totalSet === 0 || totalRound === 0) {
                                return;
                            }

                            if(limitTime <= 0){ //limitTime 은 0보다 커야함함
                                return;
                           }

                            if(win == null) { //경기결과가 나온 경우 시작 X
                                start();
                            }
                        }}
                    >START
                    </button>
            }
        </div>
    )
};



const mapStateToProps = (state, ownProps) => {

    return {
        time: state.time,
        isStart: state.isStart,
        limitTime:state.limitTime,
        totalSet:state.totalSet,
        totalRound:state.totalRound,
        win: state.win,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    //mCounter();
    return {
        start: () => dispatch(startGame(setInterval(() => dispatch(countDown()), 1000 ))),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
