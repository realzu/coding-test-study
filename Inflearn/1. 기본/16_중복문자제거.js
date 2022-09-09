// ★ indexOf
function solution(str){
    let answer="";

    for (x of str){
        if (x in answer) continue;
        else answer += x;
    }

    /*
    let answer='';
    for (let i=0; i<str.length; i++){
        if (str.indexOf(str[i]) === i) answer += str[i];
    }
    */
    
    return answer;
}

console.log(solution("ksekkset"));