// ★
function solution(arr){
    let answer, min=arr[0];

    // 내장함수 처리
    // let answer = Math.min(...arr); //arr[0], arr[1], ...  -> 앞에 ...붙여야함
    // let answer = Math.max(...arr);
    // let answer = Math.min.apply(null, arr); //배열사용 가능

    for (let i=0; i<arr.length; i++){
        if (arr[i] < min) min=arr[i];
    }

    answer=min;

    return answer;
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));