function solution(a, b, c){
    let answer;

    if (a < b && a < c) {
        answer = a;
    }else if (b < a && b < c) {
        answer = b;
    }else if (c < a && c < b){
        answer = c;
    }

    /* @
        if (a < b) answer = a;
        else answer = b;

        if(c < answer) answer = c;
        - 해당 경우일때만
    */

    return answer;
}

console.log(solution(6, 5, 12));