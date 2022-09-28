function solution(a, b){  
    let answer = 'YES';
    let tmp = [];

    for (let x of b) {
        if (a.indexOf(x) !== -1) tmp.push(x);
    }

    for (let i=0; i<tmp.length; i++) {
        if (tmp[i] !== a[i]) return 'NO';
    }
    
    return answer;
}

// 강의 답안
function solution(need, plan){  
    let answer = 'YES';
    let queue = need.split(''); // 문자를 배열로 분리!

    for (let x of b) {
        if (queue.includes(x)) { // includes!
            if (x !== queue.shift()) return 'NO';
        }
    }

    if (queue.length > 0) return 'NO';
    
    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));