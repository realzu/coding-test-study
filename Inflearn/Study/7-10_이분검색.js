// ##

function solution(target, arr) {
  arr.sort((a, b) => a - b); // 정렬 먼저
  let answer = 0;
  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    const val = arr[mid];

    if (val === target) {
      answer = mid + 1;
      break;
    } else if (val > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}
