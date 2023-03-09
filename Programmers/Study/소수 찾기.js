// @

function getPrimes(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)]; // 0과 1은 제외(f)

    for (let i = 2; i * i <= num; i++){ // 제곱근 전까지
        if (prime[i]) {
            for (let j = i * 2; j <= num; j += i) {
                prime[j] = false;
            }
        }
    }
    return prime.filter(Boolean); // true만 필터링
}

function solution(n) {
    return getPrimes(n).length;
}