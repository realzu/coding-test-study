// ★★
function solution(board){
    let answer = 0;
    let dx = [-1, 0, 1, 0]; // 움직일 방향들
    let dy = [0, 1, 0, -1];

    function DFS(x, y){
        if (x === 6 && y === 6) answer++;
        else{
            for (let k=0; k<4; k++){
                let nx = x + dx[k]; // 체크할 인덱스
                let ny = y + dy[k];
                if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0){ // 경계선 처리 및 벽,통로 확인
                    board[nx][ny] = 1;
                    DFS(nx, ny);
                    board[nx][ny] = 0; // back하니 풀어줌
                }
            }
        }
    }

    board[0][0] = 1; // 시작점 1체크 -> 다시 돌아가지 않게
    DFS(0, 0);

    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));