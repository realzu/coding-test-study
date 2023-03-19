function solution(n){
    function DFS(L){
        if (L === 0) return;
        else {
            DFS(L - 1);
            console.log(L);
        }
    }

    DFS(n);
    
    /*
        @ 단순 출력이니까 answer필요 x
        function DFS(L){
            if (L === n) {
                answer.push(L);
            }
            else {
                answer.push(L);
                DFS(L + 1);
            }
        }
        DFS(1);
        return answer;
    */
}

// console.log(solution(3));
solution(3);