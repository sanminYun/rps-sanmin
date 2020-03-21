// export const SETTING_ROUND = 'SETTING_ROUND';
// export const SETTING_SET = 'SETTING_SET';
// export const SETTING_LIMIT_TIME = 'SETTING_LIMIT_TIME';
// export const SELECT = 'SELECT';
// export const START = 'START';
// export const STOP = 'STOP';
// export const COUNT_DOWN = 'COUNT_DOWN';
// export const RETRY = 'RETRY';
// export const QUIT = 'QUIT';
// export const UPDATE = 'UPDATE';

export const ActionCreators = {
    TIME_OVER:'TIME_OVER',
    SETTING_ROUND: 'SETTING_ROUND',
    SETTING_SET:'SETTING_SET',
    SETTING_LIMIT_TIME:'SETTING_LIMIT_TIME',
    SELECT:'SELECT',
    START:'START',
    STOP:'STOP',
    COUNT_DOWN:'COUNT_DOWN',
    RETRY:'RETRY',
    QUIT:'QUIT',
    UPDATE:'UPDATE',
    LOSE:'LOSE',
    WIN:'WIN',
    DRAW:'DRAW',
};

export const selectRps = rps => {
    return{
        type:ActionCreators.SELECT,
        rps,
    }
};

export const startGame = (mCounter) => {
    return {
        type: ActionCreators.START,
        isStart:true,
        mCounter,
    }
};

export const countDown = () => {
    return{
        type: ActionCreators.COUNT_DOWN,
    }
};

export const stopGame = () => {

    return {
        type: ActionCreators.STOP,
        isStart:false,
    }
};

export const settingSet = (value) => {
    return {
        type: ActionCreators.SETTING_SET,
        totalSet:parseInt(value),
    }
};
export const settingRound = (value) => {
    return {
        type: ActionCreators.SETTING_ROUND,
        totalRound:parseInt(value),
    }
};
export const settingLimitTime = (value) => {
    return {
        type: ActionCreators.SETTING_LIMIT_TIME,
        limitTime:parseInt(value),
    }
};

export const retry = () => {
    return{
        type: ActionCreators.RETRY,
    }
};
export const quit = () => {
    return{
        type: ActionCreators.QUIT,
    }
};