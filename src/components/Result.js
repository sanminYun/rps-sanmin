import React from "react";
import {connect} from "react-redux";

const Result = ({resultForDisplay}) => {
    return(
        <div>
            <h1>Result Component</h1>
            <div>{resultForDisplay}</div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    return{
        // userSelect:state.rps,
        // computerSelect:state.computerRps,
        // result:state.result,
        resultForDisplay: state.resultForDisplay,
    }
};

export default connect(mapStateToProps)(Result);