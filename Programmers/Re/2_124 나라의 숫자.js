// ##

function solution(n) {
  let answer = "";
  const arr = [4, 1, 2];

  while (n) {
    const rest = n % 3;
    answer = arr[rest] + answer;
    n = rest === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
}

// 1.2.4
// 11,12,14 21,22,24 41,42,44 // 111,112,114 121,122,124 141,142,144 //
// 211,212,214, 221,222,224 241,242,244 // 4~
