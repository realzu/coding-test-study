function solution(n){
    let answer = 1;
    
    let two = parseInt(n / 2);
    let one = Math.ceil(n % 0); // 짝수면 0

    while (two){
        two--;
        one += 2;
        answer++;
    }
    
    return answer;
}

console.log(solution(7));

// 강의 답안
// 점화식 - n단계까지 가는 방법의 수 (관계식 알기)
function solution(n){
    let answer = 0;
    let dy = Array.from({length: n+1}, ()=>0);

    dy[1]=1;
    dy[2]=2;

    for(let i=3; i<=n; i++){ // 3은 1과 2에서 오는 방법뿐이니, 1과 2 경우의 수를 더함
        dy[i] = dy[i-2]+dy[i-1];
    }

    answer = dy[n];
    return answer;
}