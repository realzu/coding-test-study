// ★
function solution(s, e){  
    let answer = 0;
    let ch = Array.from({length : 10001}, () => 0); // 어떤레벨에서 거쳤는지
    let dis = Array.from({length : 10001}, () => 0); // distance(거리) = Level
    let queue = [];
    
    ch[s] = 1; // 출발지점 (현수위치)
    queue.push(s);

    while(queue.length){
        let x = queue.shift(); // 출발지점
        for (let nx of [x-1, x+1, x+5]){ // x에서 점프 지점
            if (nx === e) return dis[x]+1; // +1해야 최종점프까지 반영
            if (nx > 0 && nx <= 10000 && ch[nx] === 0){ // 0보다 크고 좌표보다 작게, ch(=아직안갔을때)
                ch[nx] = 1; // 들렸으니 1
                queue.push(nx);
                dis[nx] = dis[x] + 1; // 이전꺼의 +1
            }
        }
    }

    return answer;
}

console.log(solution(5, 14));