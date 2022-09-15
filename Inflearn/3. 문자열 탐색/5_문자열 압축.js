// ★★
function solution(s){
    let answer = '';

    let cnt = 1;
    s = s + ' '; //★맨마지막값 세기위함

    for (let i=0; i<s.length; i++){
        if (s[i] === s[i+1]) cnt ++;
        else {
            answer += s[i];
            if (cnt > 1) answer += String(cnt); //같지않은거라 값1개만 들어가게됌
            cnt = 1;
        }
    }

    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));