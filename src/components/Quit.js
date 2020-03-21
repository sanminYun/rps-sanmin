import {quit} from "../actions";
import {connect} from "react-redux";
import React from "react";

const Quit = ({quit}) => {
    return(
        <button
            className={"btn-quit"}
            onClick={quit}
        >
            Quit
        </button>
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        quit: () => dispatch(quit()),
    }
};

export default connect(null, mapDispatchToProps)(Quit);