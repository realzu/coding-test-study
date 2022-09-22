// Sliding Window

function solution(k, arr){
    let answer;
    let maxs = [];

    for (let i=0; i<arr.length-k; i++) {
        let sum = 0;
        sum = arr[i];
        for (let j=1; j<k; j++) {
            sum += arr[i+j];
        }
        maxs.push(sum);
    }

    maxs.sort().reverse();
    answer = maxs[0];

    return answer;
}

// 답안
function solution(k, arr){
    let answer, sum=0;

    for (let i=0; i<k; i++) sum += arr[i];
    answer = sum;

    for (let i=k; i<arr.length; i++){
        sum += (arr[i] - arr[i-k]); //구하는값 앞,뒤빼기
        answer = Math.max(answer, sum);
    }                

    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));