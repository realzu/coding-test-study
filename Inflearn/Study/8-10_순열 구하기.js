// #

function solution(m, arr) {
  const answer = [];
  const len = arr.length;
  const ch = Array.from({ length: len }, () => 0); // 거쳐갔는지 확인
  const tmp = Array.from({ length: m }, () => 0); // 결괏값

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // 깊은 복사
    } else {
      for (let i = 0; i < len; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i]; // 레벨 단위
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
