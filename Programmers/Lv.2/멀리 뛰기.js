// ★

// 피보나치 수열 (by 결과값) - 0 1 1 2 3 5 8 13 ...
// 타 풀이
function solution(n) {
    let dp = [0, 1, 2];
    
    for (let i=3; i<=n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n];
}