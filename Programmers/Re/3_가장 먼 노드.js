// ##

function solution(n, edge) {
  const connects = Array.from({ length: n + 1 }, () => []);

  for (let [x, y] of edge) {
    connects[x - 1].push(y - 1);
    connects[y - 1].push(x - 1);
  }

  let visited = [1]; // 방문레벨 - deps 중요@
  const queue = [0]; // 시작노드

  while (queue.length) {
    const cur = queue.shift(); // 현재노드
    for (let next of connects[cur]) {
      // 연결노드들 -- 같은레벨선상 애들 한번에
      if (!visited[next]) {
        // 방문안했으면
        visited[next] = visited[cur] + 1; // 이전레벨+1
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visited);
  return visited.filter((x) => x === max).length;
}
