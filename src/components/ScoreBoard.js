import React from "react";
import {connect} from 'react-redux';

const ScoreBoard = ({playerRoundWin, computerRoundWin, playerSetWin, computerSetWin}) => {
    return(
        <div className={"sb-container"}>
            <h1>
                Score Board
            </h1>
            <div className={"sb"}>
                <strong>player set</strong> {playerSetWin} : {computerSetWin} <strong>computer set</strong>
            </div>
            <div className={"sb"}>
                <strong>player round</strong> {playerRoundWin} : {computerRoundWin} <strong>computer round</strong>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        playerRoundWin: state.playerRoundWin,
        computerRoundWin: state.computerRoundWin,
        playerSetWin: state.playerSetWin,
        computerSetWin:state.computerSetWin,
    }
};

export default connect(mapStateToProps)(ScoreBoard);