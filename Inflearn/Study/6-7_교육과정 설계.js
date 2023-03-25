function solution(need, plan){
    const arr = need.split('');

    for (let x of plan) {
        if (x === arr[0]) arr.shift();
        if (arr.length === 0) return "YES";
    }

    return "NO";
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));