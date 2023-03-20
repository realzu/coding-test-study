function solution(str){
    let answer = '';
    for (let x of str) {
        if (!isNaN(x)) answer += x;
    }

    return Number(answer);
}