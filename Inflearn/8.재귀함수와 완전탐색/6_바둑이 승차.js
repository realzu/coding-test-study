// ★
function solution(c, arr){
    let answer=Number.MIN_SAFE_INTEGER;
    let n=arr.length;

    function DFS(L, sum){ // L은 인덱스
        if (sum > c) return;
        if (L === n){ // 인덱스 끝
            answer = Math.max(answer, sum); // 결과 도출
        }
        else{ // 값 늘려감
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }

    DFS(0, 0); // 초깃값
    return answer;
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));