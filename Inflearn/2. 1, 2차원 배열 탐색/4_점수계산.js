function solution(arr){
    let answer = 0, max=0;

    for (let i=0; i < arr.length; i++){
        if (arr[i] === 1){
            max += 1;
            answer += max;
        } else max = 0
    }

    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));