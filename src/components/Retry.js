import React from "react";
import { connect } from "react-redux";
import {retry} from "../actions";

const Retry = ({retry}) => {
    return(
        <button
            className={"btn-retry"}
            onClick={retry}
        >
            Retry
        </button>
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        retry: () => dispatch(retry()),
    }
};

export default connect(null, mapDispatchToProps)(Retry);