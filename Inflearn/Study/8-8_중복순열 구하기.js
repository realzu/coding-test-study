// ##

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);

        /*
            tmp[0] = 1
            DFS(1)
                tmp[1] = 1 / 2 / 3
                DFS(2) -> push(END)

            tmp[0] = 2
            DFS(1)

            tmp[0] = 3
            DFS(1)
            */
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
