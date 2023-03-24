// ##

function solution(s){
    let answer = 0;
    let stack = [];

    for (let i=0; i<s.length; i++) {
        const x = s[i];
        if (x === '(') stack.push(x);
        else {
            stack.pop();
            if (s[i-1] === '(') answer += stack.length;
            else answer++;
            console.log(stack, answer)
        }
    }

    return answer;
}