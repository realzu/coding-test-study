function solution(s){
    let stack = [];
    
    if (s[0] === ')') return false;
    
    for (let x of s){
        if (x === '(') stack.push(1);
        else stack.pop();
    }
    
    return stack.length === 0 ? true : false;
}