// ★ 강의 풀이

function solution(board){  
    let answer=0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 이동할 좌표
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];

    function DFS(x, y){
        board[x][y] = 0; //방문했으니 0으로 바꿔놓기
        for (let k=0; k<8; k++){ // 동서남북+대각선 총 8 방향 확인
            let nx = x + dx[k]; // next x
            let ny = y + dy[k]; // next y
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1){ //nx와 ny 모두 0~n의 범위 내 + 문제조건 - 해당되면
                DFS(nx, ny); // 그 다음 연결된 섬 찾기 - 더이상없으면 그대로 끝
            }
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if (board[i][j] === 1){
                answer++;
                DFS(i, j); // 1 발견하면 거기서 재귀 시작
            }
        }
    }
    
    return answer;
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));