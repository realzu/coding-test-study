// ★
function solution(n, arr){
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array());
    let ch = Array.from({length : n+1}, () => 0);
    let path = [];

    for (let [a, b] of arr){
        graph[a].push(b);
    }

    function DFS(v){
        if (v === n){ // 1을 시작으로 5(ex)까지 도착했다면
            answer++; // 정점 도착 가지수 +1
            console.log(path); // 가는 길에 들린 정점들
        }
        else {
            for (let i=0; i<graph[v].length; i++){
                if (ch[graph[v][i]] === 0){ // 간 적 없을 때
                    ch[graph[v][i]] = 1; // 갔으니 1로 체크
                    path.push(ch[graph[v][i]]); // 경로에 넣어줌
                    DFS(graph[v][i]); // 해당 경로 -> 다음 경로
                    ch[graph[v][i]] = 0; // back하니까 다시 초기화
                    path.pop(); // 마찬가지로 같이 초기화
                }
            }
        }

        ch[1] = 1; // 시작점이 1이니까
        DFS(1);
    }    

    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));