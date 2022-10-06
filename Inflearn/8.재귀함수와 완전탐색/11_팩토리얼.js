function solution(num){
    let answer;

    function DFS(L, ft){ // L은 인덱스. ft는 곱한값
        if (L === 1){ //@
            answer = ft;
        }
        else {
            DFS(L-1, ft * L);
        }
    }

    DFS(num, 1);

    return answer;
}

// 강의 답안
function solution(n){
    let answer;

    function DFS(n){
        if (n === 1) return 1;
        else return n * DFS(n-1);
    }
    // D(5) = 5 * D(4)
    // D(4) = 4 * D(3)
    // D(3) = 3 * D(2)
    // D(1) = 2 * D(1) -> return 1

    answer = DFS(n);

    return answer;
}

console.log(solution(5));