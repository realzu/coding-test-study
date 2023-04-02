// ##

function count(songs, capacity) {
  let cnt = 1; // 횟수 시작값
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      // 넘치는지 미리 확인
      cnt++;
      sum = x;
    } else sum += x;
  }

  return cnt;
}

function solution(m, songs) {
  let answer = 0;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      // mid 자체가 용량
      answer = mid;
      rt = mid - 1; // 한번 더 시도
    } else lt = mid + 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
