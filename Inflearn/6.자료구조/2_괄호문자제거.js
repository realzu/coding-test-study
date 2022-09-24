function solution(s){
    let answer='';
    let num = 0;

    for (let x of s) {
        if (x === '(') num++;
        else if (x === ')') num--;

        if (x != ')' && num === 0) answer += x;
    }

    return answer;
}

// 강의 답안
function solution(s){
    let answer='';
    stack = [];

    for (let x of s) {
        if (x === ')'){
            while(stack.pop() !== '('); //true일때만 진행
        }
        else stack.push(x);
    }
    answer = stack.join('');

    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));