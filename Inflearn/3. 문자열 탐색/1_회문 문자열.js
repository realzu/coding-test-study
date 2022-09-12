// ★
function solution(s){
    let answer = "YES";
    let n = s.length;
    s = s.toLowerCase(); //★여기서 전체를 바꿔버림!

    for (let i=0; i<Math.floor(n/2); i++){ //floor내림
        if (s[i] !== s[n-i-1]) { //-1더해줘야(idx)
            return "NO"; //answer안추가해줘도됌
        }
    }

    return answer;
}

let str="gooG";
console.log(solution(str));