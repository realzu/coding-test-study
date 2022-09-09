// ★ filter
function solution(n, str){
    let answer=[];
    
    for (let i=0; i < n; i++){
        if (str.indexOf(str[i]) === i) answer.push(str[i])
    }

    /*
    answer = str.filter(function(v, i){
        if (str.indexOf(v) === i) return true; //filter는 '참'인 요소를 반환
    })
    */
    return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(5, str));