function solution(n, arr){
    let answer=0;
    for (let x of arr){
        if (String(x).slice(-1) === String(n)){
            answer += 1;
        }
    }
    /*
    for (let x of arr){ ★let
        if (x%10 === day) answer ++; ★%10
    }
    */
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));