// ★replace (+정규화식)
function solution(str){
    let answer; //let answer=str 은 주소복사x, 값이 복사
    answer = str.replace(/A/g, '#'); //g는 글로벌

    return answer;
}

let str="BANANA";
console.log(solution(str));

/*
let answer='';
for(let x of str){
    if(x==='A') answer += '#';
    else answer += x;
}
*/