function solution(n){
    let answer;

    answer = (n * (n+1)) / 2

    /*
    for (let i=1; i <= n; i++){
        answer = answer+i;
    }
    */

    return answer;
}

console.log(solution(10));