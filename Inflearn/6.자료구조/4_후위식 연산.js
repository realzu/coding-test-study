// ★
function solution(str){
    let answer=0;
    let stack = [];

    for (let x of str) {
        if (!isNaN(x)) stack.push(Number(x)); //@문자라 숫자화!
        else {
            // let b = stack[stack.length-1]; --필요x
            let b = stack.pop(); //pop으로도 값 반환!, 제일 최근값을 기호 우측에
            // let a = stack[stack.length-1];
            let a = stack.pop(); //그다음에 기호 왼쪽에
            if (x === '+') stack.push(a+b); //
            else if (x === '-') stack.push(a-b);
            else if (x === '*') stack.push(a*b);
            else if (x === '/') stack.push(a/b);
        }
    }

    answer = stack[0]

    return answer;
}

let str="352+*9-";
console.log(solution(str));