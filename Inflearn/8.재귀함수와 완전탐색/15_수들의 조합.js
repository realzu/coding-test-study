// ★
function solution(n, k, arr , m){         
    let answer = 0;

    function DFS(L, s, sum){ // L은 레벨, s는 for문 도는 스타트넘버, sum은 합
        if (L === k){ // k개 다 뽑았으면
            if (sum % m === 0) answer++;
        }
        else {
            for (let i=s; i<n; i++){ // i를 통해 각각 정수들을확인할수있음(치고 빠지고)
                DFS(L+1, i+1, sum+arr[i]);
            }
        }
    }

    DFS(0, 0, 0);

    return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));