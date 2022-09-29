// ★★
function solution(arr){  
    let answer = arr;

    for (let i=0; i<arr.length; i++) {
        let idx = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[idx]) idx = j; // 제일 작은 값
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 값 위치 변경
    }
    
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));