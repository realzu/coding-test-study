function solution(n){
    let answer;

    answer = parseInt(n / 12);

    if (n % 12 !== 0) answer + 1;

    // ★ceil : 올림
    // answer = Math.ceil(n/12);

    return answer;
}

console.log(solution(25));