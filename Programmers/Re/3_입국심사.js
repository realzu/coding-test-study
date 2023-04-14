// ##

function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;
  let right = times[times.length - 1] * n;
  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = 0;
    for (let x of times) {
      // [7, 10] -- 10*6=60 => 30
      cnt += Math.floor(mid / x); // 30/7=4
      if (cnt > n) {
        answer = Math.min(answer, mid);
        break;
      } // 4 > 6 - 오버플로우 방지
    }

    if (cnt < n) {
      // 기준값보다 더 작을땐 채워야되니까
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
