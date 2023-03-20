function solution(arr){
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let x of arr) {
        if (x > max) {
            max = x;
            answer++;
        }
    }

    return answer;
}