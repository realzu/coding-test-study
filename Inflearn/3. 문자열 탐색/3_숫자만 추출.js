function solution(s){
    let answer = '';

    for (x of s){
        if (Number(x) >= 0 && Number(x) < 10) answer += x;
        // if(!isNaN(x)) ★ isNaN=숫자가아닌지
    }

    return Number(answer); //parseInt(answer)
}

let str="g0en2T0s8eSoft";
console.log(solution(str));