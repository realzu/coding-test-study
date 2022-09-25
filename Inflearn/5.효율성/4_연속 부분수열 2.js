// ★
function solution(m, arr){
    let answer=0, lt=0, sum=0;

    for (let rt=0; rt < arr.length; rt++) {
        sum += arr[rt];
        while (sum > m) { //중간확인
            sum -= arr[lt++];
        }
        answer += (rt - lt + 1); //★가능한갯수들 (자기기준 +앞애들연결)
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));