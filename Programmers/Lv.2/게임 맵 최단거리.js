// ★

// DFS. (but 최단거리는 DFS가 아닌 'BFS'로 풀어야 한다)
function solution(maps) {
    var answer = 0;
    let c = maps.length;
    let r = maps[0].length;
    let walk = 0;
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    
    function DFS(col, row){
        if (col === c && row === r) {
            answer = Math.min(answer, walk);
        }
        else {
            for (let i=0; i<4; i++) {
                let nx = row + dx[i];
                let ny = col + dy[i];
                if (nx >= 0 && nx <= r && ny >= 0 && ny <= c && maps[ny][nx] === 1) { // r와 c에 =등호 들어가면 안됌! length니까.
                    maps[ny][nx] = 0;
                    walk++;
                    DFS(ny, nx);
                    walk--;
                    maps[ny][nx] = 1; //@
                }
                else if (i === 3 && maps[ny][nx] === 0) return -1;
            }            
        }
    }
    
    DFS(0, 0);
    
    return answer;
}

// 타 정답풀이 (BFS)
// 풀이방식은 거의 같지만 dfs/bfs차이
function solution(maps) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const queue = [[0, 0, 1]]; // col, row, ★count(이동칸수)
    const c = maps.length;
    const r = maps[0].length;

    while (queue.length) {
        const cur = queue.shift();
        if (cur[0] === c - 1 && cur[1] === r - 1) return cur[2]; // 최종 도착지
        for (let i=0; i<4; i++) {
            let ny = cur[0] + dy[i];
            let nx = cur[1] + dx[i];
            if (nx >= 0 && nx < r && ny >= 0 && ny < c && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([ny, nx, cur[2]+1]); // cur[2]는 count니까 +1
            }
        }
    }
    return -1; // 끝까지 못갔다면 -1
}
