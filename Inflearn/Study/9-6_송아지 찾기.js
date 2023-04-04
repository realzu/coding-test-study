// ##

function solution(s, e) {
  let answer = 0;
  const ch = Array.from({ length: 10001 }, () => 0); // 방문 여부 - 또 방문할 필요없으니까
  const dis = Array.from({ length: 10001 }, () => 0); // Level (Distance)
  const queue = [];

  // 시작점
  ch[s] = 1;
  queue.push(s);

  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 점프
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[nx] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
