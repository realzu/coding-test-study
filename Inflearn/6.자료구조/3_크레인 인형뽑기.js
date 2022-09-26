function solution(board, moves){
    let answer = 0;
    let stack = [];                

    for (let m of moves) {
        for (let i=0; i<board.length; i++) {
            if (board[i][m-1] !== 0) {
                if (stack[stack.length-1] === board[i][m-1]) {
                    answer += 2;
                    stack.pop();
                } else {
                    stack.push(board[i][m-1]);
                }
                board[i][m-1] = 0;
                break;
            } else {
                continue;
            }
        }
    }

    // 강의 답안 (같지만 내용적으로 보완시키기)
    moves.forEach(m => { // for~of 말고도 forEach
        for (let i=0; i<board.length; i++) {
            if (board[i][m-1] !== 0) {
                let tmp = board[i][m-1]; // 따로 빼놓기(계속 반복사용하니까)
                board[i][m-1] = 0; // 기존값은 0으로
                if (stack[stack.length-1] === tmp) {
                    answer += 2;
                    stack.pop();
                }
                else stack.push(tmp);
                break;
            } // continue는 사실 필요x
        }        
    });

    return answer;
}

let a=[[0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));