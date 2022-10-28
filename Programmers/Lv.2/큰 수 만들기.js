// ★

// fail - 반만 통과
function solution(number, k) {
    number = number.split('');
    let sorted = [...number];
    sorted.sort((a, b) => parseInt(a) - parseInt(b)); // 내림차순 숫자정렬
    sorted = sorted.slice(0, k);
    
    let i = 0;
    let minus = 0;
    while (minus < k) {
        if (sorted.indexOf(number[i]) !== -1) {
            number = [...number.slice(0, i), ...number.slice(i+1)];
            minus++;
        }
        else i++;
    }
    
    return number.join('');
}

// 타 정답풀이
// 스택 사용해서 담긴 값들을 비교
function solution(number, k) {
    var stack = [];
    for (let i=0; i<number.length; i++) {
        let now = number[i];

        while(k > 0 && stack[stack.length-1] < now) {
            stack.pop();
            k--; // ★ k를 빼나감
        }

        stack.push(now);
    }

    stack.splice(stack.length - k, k); // k 남았으면 뒤에서부터 k개 빼기
    var answer = stack.join('');

    return answer;
}