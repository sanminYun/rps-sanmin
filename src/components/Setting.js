import React from "react";
import {connect} from "react-redux";
import {settingLimitTime, settingRound, settingSet} from "../actions";


const Setting = ({settingSet, settingRound, settingLimitTime, set,round,limitTime}) => {
    return (
        <div>
            <h1>Setting</h1>
            <label>게임 승리조건(세트 횟수)</label>
            <input
                type={"number"}
                id={"set"}
                onChange={settingSet}
                value={set}
            />

            <label>세트 승리조건(라운드 횟수)</label>
            <input
                type={"number"}
                id={"round"}
                onChange={settingRound}
                value={round}
            />

            <label>타이머 MAX시간</label>
            <input
                type={"number"}
                id={"limitTime"}
                onChange={settingLimitTime}
                value={limitTime}
            />
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        set:state.totalSet,
        round:state.totalRound,
        limitTime: state.limitTime,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        settingSet: e => {
            dispatch(settingSet(parseInt(e.target.value)));
        },
        settingRound: e => {
            dispatch(settingRound(parseInt(e.target.value)));
        },
        settingLimitTime: e => {
            dispatch(settingLimitTime(parseInt(e.target.value)));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);