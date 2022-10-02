// ★★
function solution(n){
    function DFS(L){
        if (L === 0) return; // 0되면 끝내기
        else {
            DFS(L-1); // -1해서 재귀
            console.log(L);
            // 재귀함수 : stack에 첫값부터 쌓임(매개변수(L), 지역변수, 복귀주소). D(3)->D(2)->D(1)->D(0) 에서 다시 pop되서 하나씩 빠짐 (0되면 return되서)
            // console.log(L) 후 DFS() 하면 3->2->1 (pop 전)
            // DFS 먼저하면 1->2->3으로 출력됌 (pop 후)
            // 작동원리에 따른 실행결과 중요
        }
    }

    DFS(n); // 함수 호출
}

solution(3);