// ★
function solution(a, b){
    let answer = 'YES';

    let ah = new Map();

    for (let x of a) {
        if (ah.has(x)) ah.set(x, ah.get(x)+1);
        else ah.set(x, 1);
    }

    for (let y of b) {
        if (!ah.has(y) || ah.get(y)===0) return 'NO'; //★get=>0
        ah.set(y, ah.get(y)-1);
    }

    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));