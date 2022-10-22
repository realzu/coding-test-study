// @

// 1차 : while문으로 해서 시간초과
// 2차 : stack으로 해결 (질문하기 힌트)
function solution(s) {
    let stack = [];
    
    for (let i=0; i<s.length; i++){
        if (stack[stack.length-1] === s[i]) stack.pop();
        else stack.push(s[i]);
    }
    
    return stack.length === 0 ? 1 : 0;
}