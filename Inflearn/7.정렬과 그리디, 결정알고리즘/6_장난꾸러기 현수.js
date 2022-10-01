// @
function solution(arr){
    let answer = [];

    for (let i=0; i<arr.length; i++){
        if (arr[i] > arr[i+1] && arr[i] > arr[i-1] && answer.length === 0) answer.push(arr[i]);
        else if (arr[i] < arr[i+1] && arr[i] < arr[i-1] && answer.length === 1) answer.push(arr[i]);
    }

    return answer;
}

// 강의 답안
function solution(arr){
    let answer = [];

    // let sortArr = arr.sort(); -- ★★sort는 문자열 기준이라 숫자는 안됌!!
    let sortArr = arr.slice(); // ★복사
    sortArr.sort((a, b) => a - b); // 오름차순 정렬

    for (let i=0; i<arr.length; i++){
        if (arr[i] !== sortArr[i]) answer.push(arr[i]);
    }

    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));