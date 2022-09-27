// ★★
function solution(s){  
    let answer = 0;
    let stack = []; // 괄호문제는 보통 스택!

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') stack.push(s[i]);
        else { // ')'
            if (s[i-1] === '(') { //stack[-1]로 하면 else가 문제생김(당연히 ')'가 들어갈수없기에)
                stack.pop();
                answer += stack.length;
            }
            else {
                stack.pop();
                answer ++;
            }
        }                    
    }
    return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));