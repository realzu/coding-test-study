// ##

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    // L은 동전갯수
    if (sum > m) return;
    if (L >= answer) return;

    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
