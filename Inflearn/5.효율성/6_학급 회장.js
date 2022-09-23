// ★
function solution(s){
    let answer;
    let sh = new Map(); //map
    for (let x of s) {
        if (sh.has(x)) sh.set(x, sh.get(x)+1); //있으면 value+1
        else sh.set(x, 1); //없으면 value=1
    }

    let max = Number.MIN_SAFE_INTEGER;

    for (let [key, val] of sh) { //sh 반복문
        if (val > max) {
            max = val;
            answer = key;
        }
    }

    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));