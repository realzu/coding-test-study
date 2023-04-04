// #

function solution(board) {
  let answer = 0;
  const len = board.length;
  //   대각선까지니까 동서남북+대각선 총 8개 좌표
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[nx][ny] = 0; // DFS 진행되는이상 값이 1일거라 바로 0 변경 (조건은 밑에)
    for (let i = 0; i < 8; i++) {
      const nx = x + board[i];
      const ny = y + board[i];
      if (nx >= 0 && nx < len && ny >= 0 && ny < len && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++; // 섬 시작
        DFS(i, j); // 0으로 바꾸기
      }
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
