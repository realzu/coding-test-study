// @

function solution(maps) {
  const n = maps[0].length - 1;
  const m = maps.length - 1;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const queue = [[0, 0, 1]];

  maps[0][0] = 0;

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    // if (x === n && y === m) return cnt; -- 여기로 넣어도 됌

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx === n && ny === m) return cnt + 1;
      if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[ny][nx] === 1) {
        maps[ny][nx] = 0;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }

  return -1;
}
