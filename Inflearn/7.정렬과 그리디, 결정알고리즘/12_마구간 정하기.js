// ★★
function count(stable, dist){ // 가능한 횟수구하는 함수
    let cnt = 1, ep = stable[0]; // 첫 값 기준. ep = endPoint
    for (let i=1; i<stable.length; i++){
        if (stable[i] - ep >= dist){ // >도 포함
            cnt++;
            ep = stable[i];
        }
    }
    return cnt;
}

function solution(c, stable){
    let answer;
    stable.sort((a, b) => a - b);

    let lt = 1; // or 마굿간의 최소거리
    let rt = stable[stable.length-1]; // or 마굿간의 최대거리

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2); // 이진탐색
        if (count(stable, mid) >= c){
            answer = mid;
            lt = mid + 1; // >가 포함이니
        }
        else rt = mid - 1;
    }
    
    return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));