// ★ 강의 풀이

// BFS: queue 활용 (영역이니)
function solution(board){  
    let answer=0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 이동할 좌표
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let queue = [];

    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if (board[i][j] === 1){
                board[i][j] === 0;
                queue.push([i, j]); // 1(=섬)이면 push
                while(queue.length){ // 0일때까지
                    let [x, y] = queue.shift(); // 하나씩 빼면서 연결된거 확인
                    for (let k=0; k<8; k++){
                        let nx = x + dx[k]; // next x, y
                        let ny = y + dy[k];
                        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[i][j] === 1){
                            board[nx][ny] = 0;
                            queue.push([nx, ny]); // 해당되면 push
                        }
                    }
                }
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