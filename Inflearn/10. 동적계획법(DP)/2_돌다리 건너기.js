// 강의

// ★ N개 건넌 후에 도착까지니까 출발+도착점 생각해야함 => 문제 제대로 읽기 중요~~
function solution(n){
    let answer = 0;

    let dy = Array.from({length : n+1}, ()=>0);
    dy[0] = 1; // 출발점도 포함되니까 0도 추가!
    dy[1] = 1;
    dy[2] = 2;

    for (let i=3; i<=n+1; i++){ // 도착점 = n+1
        dy[i] = dy[i-3] + dy[i-2] + dy[i-1];
    }

    answer = dy[n];
    
    return answer;
}

console.log(solution(7));