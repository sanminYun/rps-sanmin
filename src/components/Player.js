import React from "react";
import {connect} from "react-redux";
import {selectRps, stopGame} from "../actions";

const Player = ({onSelect, isStart}) => {
    return(
        <div>
            <h1>Player</h1>
            <button
                className={"btn-rps"}
                onClick={
                    () => {
                        if(!isStart) return;
                        onSelect("가위");
                    }
                }

            >가위
            </button>
            <button
                className={"btn-rps"}
                onClick={
                    () => {
                        if(!isStart) return;
                        onSelect("바위");
                    }
                }
            >바위
            </button>
            <button
                className={"btn-rps"}
                onClick={
                    () => {
                        if(!isStart) return;
                        onSelect("보");
                    }
                }
            >보
            </button>
        </div>
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSelect: rps => {
            dispatch(selectRps(rps));
            dispatch(stopGame());
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    return {
        // ...ownProps,
        isStart: state.isStart,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);