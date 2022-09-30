// ★
// 캐시 문제

function solution(n, arr){
    let answer = [];

    arr.forEach(x => {
        if (answer.indexOf(x) === -1) { // 값 없음
            answer.unshift(x);
            if (answer.length > n) answer.pop();
        } else {
            answer.splice(answer.indexOf(x), 1);
            answer.unshift(x);
        }
    })

    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));