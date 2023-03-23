// # 정답을 잘못 읽고 파악해서 다시 풂

function solution(board, moves){
    const stack = [];
    let answer = 0;
    
    for (let x of moves) {
        for (let i=0; i<board.length; i++){
            const val = board[i][x-1];
            if (val) { // 값이 있음
                const last = stack.pop();
                if (isNaN(last)) stack.push(val);
                else if (last === val) answer += 2;
                else stack.push(last, val);
                board[i][x-1] = 0;
                break;
            }
        }
    }
    return answer;
}