// ##

function solution(n) {
  const dy = Array.from({ length: n + 2 }, () => 0); // 마지막 도착점도 돌다리에 포함!

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]; // 관계식 도출
  }

  return dy[n + 1];
}

console.log(solution(7));
