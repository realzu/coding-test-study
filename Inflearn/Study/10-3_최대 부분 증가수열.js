function solution(arr) {
  let answer = 0;
  const len = arr.length;
  const ch = Array.from({ length: len }, () => 0);

  for (let i = 0; i < len; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        max = Math.max(max, ch[j]);
      }
    }
    ch[i] = max + 1;
  }

  return Math.max(...ch);

  /*
  ch[0] = 1;

  for (let i = 1; i < len; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && ch[j] > max) {
        max = ch[j];
      }
    }
    ch[i] = max + 1;
    answer = Math.max(answer, ch[i]);
  }

  return answer;
  */
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
