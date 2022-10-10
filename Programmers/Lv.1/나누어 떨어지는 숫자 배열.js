function solution(arr, divisor) {
    var answer = [];
    
    arr.sort((a, b) => a - b);
    
    for (let x of arr){
        if (x % divisor === 0) answer.push(x);
    }
    
    if (answer.length === 0) return [-1];
    
    return answer;
}
// 효율성 차원에서 먼저 정렬할 필요 없는듯


// 다른사람 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v % divisor === 0); // filter로 answer에 값 넣기
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a-b); // 삼항연산자로 처리
}