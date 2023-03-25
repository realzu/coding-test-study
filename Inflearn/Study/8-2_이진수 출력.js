function solution(n){
    let answer = '';

    function DFS(L) {
        if (parseInt(L) === 0) return; // @ return으로 끝내기
        else {
            DFS(L / 2);
            answer += `${parseInt(L % 2)}`;
        }
    }

    DFS(n);

    return Number(answer);
}

console.log(solution(11));