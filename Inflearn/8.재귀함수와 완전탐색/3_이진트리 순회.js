// 이진트리 : 부모노드 -> 왼/오
// DFS(깊이우선탐색) : 파고들어감. 막히면 back해서 그 다음 길
// 전위순휘(부 왼 오(이진트리)) 중위(왼 부 오) 후위(왼 오 부)

function solution(v){
    let answer;

    function DFS(v){
        if(v > 7) return; // 7까진 포함
        else {
            // 헷갈리면 DFS호출 앞에 먼저 콘솔찍어보기

            // 전위순회
            console.log(v); // 부모 먼저 찍음
            DFS(v * 2); // 왼
            DFS(v * 2 + 1); // 오

            // 중위순회
            DFS(v * 2); // 왼쪽노드갔다가
            console.log(v);
            DFS(v * 2 + 1);
            // 1(13) -> 2(13) -> 4(13) -> 8(X)라 back
            // 4(14) 콘솔 찍 -> 4(15) -> 9(X)라 back -> 4(pop)하고 back
            // 2(14) 콘솔 찍 -> 2(15) -> 5(13) -> 10(x)
            // 5(14) 콘솔 찍 -> 5(15) -> 11(x)라 back -> 5(pop)하고 back

            // 후위순회
            DFS(v * 2);
            DFS(v * 2 + 1);
            console.log(v);
        }
    }

    DFS(v);
    return answer;
}

console.log(solution(1));