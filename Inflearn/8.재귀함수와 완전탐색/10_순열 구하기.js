function solution(m, arr){
    let answer = [];
    let n = arr.length;
    let ch = Array.from({length : n}, () => 0); // ★ 포함됐는지 체크
    let tmp = Array.from({length : m}, () => 0) // 2개씩 담을 배열 [0,0]

    function DFS(L){ // L은 갯수
        if (L === m) {
            answer.push(tmp.slice());
        }
        else {
            for (let i=0; i<n; i++){
                // if (tmp.indexOf(arr[i])) { -- 이건 X
                if (ch[i] === 0) { // @
                    ch[i] = 1;
                    tmp[L] = arr[i];
                    DFS(L+1);
                    ch[i] = 0; // 다음꺼에선 체크풀어주기
                }
            }
        }
    }

    DFS(0);

    return answer;
}

let arr=[3, 6, 9];
console.log(solution(2, arr));