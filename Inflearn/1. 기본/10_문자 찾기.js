// ★ split : 해당값에서 끊어줌
function solution(str, val){
    let answer=0;

    for (let x of str){ //앞에 let붙이기 자꾸 까먹음ㅜ
        if (x === val){
            answer ++;
        }
    }

    //★ let answer = str.split(val).length-1;

    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));