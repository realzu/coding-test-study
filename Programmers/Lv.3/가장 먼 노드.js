// ★

// dfs보단 bfs
function solution(n, edge) {
    var answer = 0;
    let link = Array.from({length: n+1}, ()=>[]);
    let ck = Array.from({length: n+1}, ()=>[]);
    let distance = Array.from({length: n+1}, ()=>0); // 떨어진 거리
    
    for (let [x, y] of edge) {
        link[x].push(y);
        link[y].push(x); // @ 여기 세팅까진 ㄱㅊ
        ck[x].push(0);
        ck[y].push(0);
    }
    
    // function dfs(a, b) {
    //     if (link[a][b] && ck[a][b] === 0) {
    //         link++;
    //         dfs(L+1);
    //         link = 0;
    //     }
    // }
    
    // dfs(1, 0);
    
    return answer;
}

// 타 정답 풀이
// BFS
function solution (n, edge) {
    let connects = new Array(n).fill().map(_ => []);
    for(const e of edge) {
        connects[e[0]-1].push(e[1]-1);
        connects[e[1]-1].push(e[0]-1);
    }
    
    let visited = [1]; // 떨어진 거리 depth (+방문의 표시)
    let queue = [0];
    
    while(queue.length) {
        let cur = queue.shift();
        for(let next of connects[cur]) { // [2, 1] - 현 노드와 연결된 노드들
            if(!visited[next]) { // 1번부터니까 최단순 (so, 이미 있으면 pass) = 방문안한것
                visited[next] = visited[cur] + 1; // 이전 deps의 +1 && 방문처리. [ 1, <1 empty item>, 2 ] -> [ 1, 2, 2 ]
                queue.push(next); // queue로 다음값 안내 (if조건에 의해 n-1번 돔)
            }
        }
    }
    
    let max = Math.max(...visited);
    
    return visited.filter(el => el === max).length;
}