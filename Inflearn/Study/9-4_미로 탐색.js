// #

function solution(board) {
  let answer = 0;
  let n = board.length - 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === n && y === n) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        // nx, ny 범위 안나가게
        // board 자체로 다루면 되서 ch 필요 x
        if (nx >= 0 && nx <= n && ny >= 0 && ny <= n && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
