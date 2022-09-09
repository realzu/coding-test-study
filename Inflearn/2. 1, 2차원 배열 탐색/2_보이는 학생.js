// ★ max를 설정하면 이중포문O(n^2) -> O(n)으로 가능
function solution(arr){         
    let answer = 1, max = arr[0];

    for (let i=1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
            answer++;
        }
    }

    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));