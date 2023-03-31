function solution(times) {
  let n = times.length;
  let answer = 0;

  times.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    let [lt, rt] = times[i];
    let cnt = 1;
    rt = rt - 1;

    for (let j = i + 1; j < n; j++) {
      let [le, re] = times[j];
      re = re - 1;

      if ((le >= lt && le <= rt) || (re >= lt && re <= rt)) cnt++;
      else break;
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
