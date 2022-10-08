function solution(n, r){
    let answer;
    let dy = Array.from(Array(35), () => Array(35).fill(0)); // 메모이제이션

    function DFS(n, r){
        if (dy[n][r] > 0) return dy[n][r]; // 값있으면 기존값 넣어주기
        if (n === r || r === 0) return 1; // 해당 DFS는 1만 반환
        else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
    }

    answer = DFS(n, r);

    return answer;
}

console.log(solution(5, 3));