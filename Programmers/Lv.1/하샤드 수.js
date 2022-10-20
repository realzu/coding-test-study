function solution(x) {
    var answer = false;
    let sum = 0;
    
    for (let n of String(x)){
        sum += parseInt(n);
    }
    
    if (x % sum === 0) answer = true;
    
    return answer;
}