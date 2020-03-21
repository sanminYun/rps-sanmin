//랜덤으로 가위바위보를 뽑음
export const SelectRandomRps = () => {
    const rps = ['바위', '보', '가위'];
    return rps[Math.floor(Math.random() * 3)];
};

//누가 이겼는지 검사하는 함수
export const DecideResult = (playerInput, computerInput) => {
    if(playerInput === computerInput) return Result.DRAW; //같은 경우 DRAW

    if(playerInput === '바위') { //플레이어가 바위를 선택한 경우
        if(computerInput === '보') { //컴퓨터가 보면 Lose
            return Result.PLAYER_LOSE;
        } else if(computerInput === '가위') { //컴퓨터가 가위면 win
            return Result.PLAYER_WIN;
        } else {
            console.error("rps 입력값이 잘못되었습니다.");
            return null;
        }
    } else if (playerInput === '보') { //플레이어가 보를 선택한 경우
        if(computerInput === '바위') { //컴퓨터가 바위면면 Win
            return Result.PLAYER_WIN;
        } else if(computerInput === '가위') { //컴퓨터가 가위면 LOSE
            return Result.PLAYER_LOSE;
        } else {
            console.error("rps 입력값이 잘못되었습니다.");
            return null;
        }
    } else if (playerInput === '가위') { //플레이어가 가위를 선택한 경우
        if(computerInput === '바위') { //컴퓨터가 바위면 LOSE
            return Result.PLAYER_LOSE;
        } else if(computerInput === '보') { //컴퓨터가 보면 WIN
            return Result.PLAYER_WIN;
        } else {
            console.error("rps 입력값이 잘못되었습니다.");
            return null;
        }
    } else {
        console.error("rps 입력값이 잘못되었습니다.");
        return null;
    }
};

export const Result = {
    PLAYER_WIN:'PLAYER_WIN',
    PLAYER_LOSE:'PLAYER_LOSE',
    DRAW:'DRAW',
};