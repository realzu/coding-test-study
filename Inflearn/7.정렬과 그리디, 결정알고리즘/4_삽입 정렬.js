// ★
// arr[i]를 기준으로 앞의 값들을 비교
function solution(arr){
    let answer = arr;
    
    for (let i=0; i<arr.length; i++){ // 0부터해도 밑for문이 실행안됌
        let tmp = arr[i], j; // j는 스코프때문에 여기서 선언
        for (let j=i-1; j>=0; j--){ // i앞부터 0까지
            if (arr[j] > tmp) arr[j+1] = arr[j]; // 앞값이 tmp보다 큼
            else break; // tmp보다 작은게 나타나면 끝내기
        }
        arr[j+1] = tmp; // arr[j]는 tmp보다 작아서 끝난거라 -> 그 뒤(j+1)에 tmp넣기
    }

    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));