function solution(a){
    let answer;
    
    let left = 0;
    let right = 0;

    for (let x of a) {
        if (x === '{') left++;
        else right++;
    }

    if (left === right) answer = 'YES';
    else answer = 'NO';

    return answer;
}

// 강의 답안
function solution(s){
    let answer='YES';

    stack = [];

    for (let x of s) {
        if (x==='(') stack.push(x);
        else { //값이있으면
            if (stack.length === 0) return 'NO';
            stack.pop(); //빼기
        }
    }

    if (stack.length>0) return 'NO'; //그래도있으면 놉

    return answer;
}

let a="(()(()))(()";
console.log(solution(a));