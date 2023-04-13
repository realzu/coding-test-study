// ##

function solution(n, computers) {
  let answer = 0;
  const visited = new Array(n).fill(flase);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++; // like 섬나라 갯수
    }
  }

  function DFS(v) {
    visited[v] = true;
    for (let i = 0; i < n; i++) {
      if (i !== v && computers[i][v] && !visited[i]) {
        DFS(i); // i와 연결된 v니까
      }
    }
  }

  return answer;
}
