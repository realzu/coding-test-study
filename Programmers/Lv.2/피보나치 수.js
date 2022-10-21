// ★

function solution(n) {
    let vals = [0, 1];

    for (let i = 2; i <= n; i++){
        vals.push(vals[i-2] + vals[i-1]);
    }
    
    let num = vals[n-2] % m + vals[n-1] % m;
    return num % m;
}

// 오버플로우로 인해 중간에 모듈러 연산 필요

// 타 풀이

function solution(n) {
    let result = [0, 1];
    for (let i=2; i<=n; i++){
        let sum = (result[i-2] % 1234567) + (result[i-1] % 1234567);
        result.push(sum);
    }

    let answer = result[n] % 1234567;
    return answer;
}
// for문을 돌면서 그때마다 값을 더해서 오버플로우 방지