function solution(n, m){         
    let answer = [];
    let tmp = Array.from({length : m}, ()=>0); // 조합의 경우 [a, b]

    function DFS(L, s){
        if (L === m){ // m-1까지만 해당되니까
            answer.push(tmp.slice()); // slice로 복사
        }
        else {
            for (let i=s; i<=n; i++){
                tmp[L] = i; // L자리에 돌아가면서 i값
                DFS(L+1, i+1); // 이후에 L+1이 m이 되면 다시 back
            }
        }
    }

    DFS(0, 1);

    return answer;
}

console.log(solution(4, 2));