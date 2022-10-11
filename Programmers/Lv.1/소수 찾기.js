// ★
function isPrime(num){ // 함수로 따로 빼기
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++){ // ★ 소수는 제곱근까지만 확인하면됌! 끝까지하면 시간초과
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n) {
    var answer = 0;
    
    for (let x=2; x<=n; x++){
        if (isPrime(x)) answer++;
    }

    return answer;
}