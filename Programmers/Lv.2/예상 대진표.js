// ★

// 거의 근접했지만 정답에서 +1 생각 잘못
function solution(n,a,b) {
    var answer = 0;

    while (Math.abs(a-b) !== 1) {
        a = Math.ceil(a / 2) - 1;
        b = Math.ceil(b / 2) - 1;
        answer++;
    }

    return answer + 1;
}

// 타 정답풀이
function solution(n,a,b) {
    let answer = 0;
    
    while(a !== b) { // 같아지는 순간 = 만나는 순간
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}