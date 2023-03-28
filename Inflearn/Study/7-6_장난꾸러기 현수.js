// @

function solution(arr){
    const answer = [];
    const sortArr = arr.slice(); // 얕은 복사
    sortArr.sort((a, b) => a - b);

    for (let i=0; i<arr.length; i++) {
        if (arr[i-1] > arr[i]) {
            if (arr[i] !== sortArr[i]) answer.push(i + 1);
        }
    }
    
    return answer;
}

// let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));