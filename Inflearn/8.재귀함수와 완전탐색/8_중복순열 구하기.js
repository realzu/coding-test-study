// ★★
function solution(n, m){
    let answer=[];
    let tmp = Array.from({length:m}, ()=>0); // [0, 0] (길이 2)

    // 만약 for문으로 돌리면 m이 커질수록 감당x -> DFS로
    function DFS(L){ // L은 자릿수
        if (L === m){ // DFS(2)-> 2 === m(=2)(O)
            answer.push(tmp.slice()); // push(tmp복사); 복사안하면 같은주소라 마지막인 3,3으로 계속 들감
        }
        else{
            for (let i=1; i<=n; i++){ // 정수인 1부터 tmp에 값넣기
                tmp[L] = i; // tmp[0] = 1 or 2 or 3
                DFS(L+1); // DFS(1) -> tmp[1] = 1 or 2 or 3   --> DFS(2)
            }
        }
    }    

    DFS(0, 0);

    return answer;
}

console.log(solution(3, 2));