//  Greedy

function solution(meeting) {
  let max = 0;
  let n = meeting.length;

  for (let i = 0; i < n; i++) {
    let time = meeting[i][1];
    let cnt = 1;

    for (let j = i + 1; j < n; j++) {
      let [start, end] = meeting[j];
      if (time <= start) {
        time = end;
        cnt++;
      }
    }

    max = Math.max(max, cnt);
  }

  return max;
}

// #
function solution(meeting) {
  let answer = 1;

  meeting.sort((a, b) => {
    // endtime 기준 정렬
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let et = 0;

  for (let x of meeting) {
    if (et <= x[0]) {
      et = x[1];
      answer++;
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
