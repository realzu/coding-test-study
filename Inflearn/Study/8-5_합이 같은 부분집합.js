function solution(arr) {
  let total = arr.reduce((acc, cur) => acc + cur) / 2;
  let answer = "NO";

  function DFS(L, sum) {
    if (sum === total) {
      answer = "YES";
      // return "YES"; -- 해도 DFS 콜스택에 존재
    } else if (L + 1 <= arr.length) {
      DFS(L + 1, sum + arr[L]);
      if (answer !== "YES") DFS(L + 1, sum); // 빼기 안해도 sum자체가 안더해진거라
    }
  }

  DFS(0, 0);

  return answer;
}

// #
function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  let n = arr.length;

  function DFS(L, sum) {
    if (flag) return; // 콜스택 종료용
    if (L === n) {
      // 배열 다 돔
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
