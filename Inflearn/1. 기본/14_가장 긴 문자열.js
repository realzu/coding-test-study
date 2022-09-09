// ★
function solution(n, str){
    let answer="", max=str[0].length;

    for (let x of str) {
        if (x.length > max) {
            answer = x;
        }
    }
    
    /*
    let answer, max=Number.MIN_SAFE_INTEGER; ★
    
    for (let x of str) {
        if (x.length > max) {
            max = x.length; ★처음엔 무조건 첫번째값
            answer = x;
        }
    }
    */

    return answer;
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(5, str));