function solution(s){
    const stack = [];
    s = s.split("");
    
    if (s[0] === ")") return false;
    
    s.forEach((x) => {
        if (x === "(") stack.push(0);
        else stack.pop();
    })
    
    return stack.length > 0 ? false : true;

    /* 
        @ 풀이)
        push, pop 대신 count로 하면 메모리 덜 사용
    */
}