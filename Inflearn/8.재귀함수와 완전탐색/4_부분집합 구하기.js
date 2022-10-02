// ★★
// DFS
function solution(n){
    let answer = [];
    let ch = Array.from({length : n+1}, () => 0); // 체크용 배열

    function DFS(v){
        if (v === n+1){
            let tmp = '';
            for (let i=1; i<=n; i++){
                if (ch[i] === 1) tmp += i + ' '; // 값 간 공백넣기
            }
            if (tmp.length > 0) answer.push(tmp.trim()); // 공집합 제외
        }
        else {
            ch[v] = 1;
            DFS(v+1); // 여기서 위의 if문거치면 밑으로 내려감
            ch[v] = 0; // 막히면 pop되고 위로 back
            DFS(v+1);
        }
    }

    DFS(n);
    return answer;
}

console.log(solution(3));