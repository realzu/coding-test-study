// ★ 정답은 모두 맞지만 효율성 1개 시간초과

function solution(n) {
    var answer = sum = plus = minus = 0;
    
    while (plus !== n){
        if (sum === n) {
            answer++;
            plus++;
            sum += plus;
        }
        else if (sum > n) {
            minus++;
            sum -= minus;
        }
        else {
            plus++;
            sum += plus;
        }
    }
    
    return answer + 1;
}

// 타 풀이

// 투 포인터 (left, right)
function solution(n) {
    var answer = 0;
    let right = sum = 1; // 1부터 계산

    for (let left = 1; left <= n; left++){
        while (sum < n) { // 합이 n되기 전까지 right값 더해나감
            right++;
            sum += right;
        }
        if (sum === n) answer++;
        sum -= left;
    }
}