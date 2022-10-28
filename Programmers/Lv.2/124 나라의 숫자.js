// ★

// 로직 찾기 fail
function solution(n) {
    let rule1 = [0, 1, 2, 4];
    let rule2 = [4, 1, 2];
    
    let num1 = rule1[(Math.ceil(n / 3) - 1) % 4];
    let num2 = rule2[n % 3];
    
    return String(parseInt(`${num1}${num2}`));
}

// 타 정답풀이
function solution(n) {
    const number = [4, 1, 2];
    let answer = '';

    while(n){
        answer = number[n%3] + answer; // 문자 이어붙이기
        n = (n%3 == 0) ? n/3 - 1 : Math.floor(n/3); // 5:1, 6:5
    }
}