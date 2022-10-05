// ★
// 중복순열
function solution(m, arr){
    let answer = Number.MAX_SAFE_INTEGER; //최소구하니까 최댓값
    let n = arr.length;

    function DFS(L, sum){ // L은 동전갯수
        if (sum > m) return; // m보다 넘어가면 DFS함수 종료시키기
        if (L >= answer) return; // 3개가 이미 구해졌는데 4개인걸 볼 필요 없으니
        if (sum === m) { // 도착점
            answer = Math.min(answer, L); // 더 작은 갯수
            // console.log('도착')
        }
        else {
            for (let i=0; i<n; i++){
                // console.log(`인덱스 ${i}, 갯수 ${L+1}, 값 ${arr[i]}, 합 ${sum+arr[i]}`);
                DFS(L+1, sum+arr[i]); // DFS(1, sum+arr[0]) -> DFS(2, sum+arr[0])
            }
        }
    }

    DFS(0, 0);

    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));