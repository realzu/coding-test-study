function solution(a, b, c){
    let answer="YES", max;

    
    if ((a > (b + c)) && (b > (a + c)) && (c > (a + b))) {
        answer = "NO";
    }
    
    /* ★
    let sum = a+b+c;

    if (a>b) max=a;
    else max=b;
    if (c>max) max=c;

    if (sum-max <= max) answer = "NO";
    */

    return answer;
}

console.log(solution(6,7,11));