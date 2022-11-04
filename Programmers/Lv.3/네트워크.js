// ★

// 문제 잘못 이해) 연결된 네트워크는 하나로 퉁, 연결안된건 따로 갯수 체크 !! (but 연결선 갯수 세는줄)
// n 인자도 있었는데 활용 못
function solution(n, computers) {
    var answer = 0;
    let len = computers.length;
    let link = {};
    
    function DFS (i, j) {
        if (j === len) {
            pass; // @
        }
        else {
            for (let i=0; i<len; i++) {
                let tmp = [i, j];
                if (i !== j && computers[i][j] === 1 && !link[`${Math.min(tmp)}${Math.max(tmp)}`]) {
                    link[`${Math.min(tmp)}${Math.max(tmp)}`] = 1;
                    DFS(i, j+1);
                }
            }
        }
    }
    return link.length;
}

// 타 정답풀이
function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);

    for (let i=0; i<n; i++) { // 노드 일방향으로 확인 (상위)
        if (!visited[i]) {
            dfs(i);
            answer++; // 하나에서 뻗어가는거니까 이 때 answer+!
        }
    }

    function dfs(num) { // 해당노드에서 또 연결된거 확인 (하위)
        visited[num] = true;
        for (let i=0; i<n; i++) {
            if (i !== num && computers[i][num] && !visited[i]) dfs(i);
        } // 일방향으로 확인하니까 !visited로 체크
    }

    return answer;
}