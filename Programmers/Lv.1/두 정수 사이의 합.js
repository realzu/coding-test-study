function solution(a, b) {
    var answer = 0;
    let num1 = a, num2 = b;
    
    if (a > b) {
        num1 = b;
        num2 = a;
    }
    
    for (let i=num1; i<=num2; i++){
        answer += i;    
    }
    
    return answer;
}

// 다른사람 풀이
let min = Math.min(a, b);
let max = Math.max(a, b);