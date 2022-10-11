function solution(n) {
    var answer = '';
    
    for (let i=1; i<=n; i++){
        if (i % 2 === 1) answer += '수';
        else answer += '박';
    }
    
    return answer;
}

// 타 풀이
// @ repeat
function solution(n) {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
} // repeat은 소수점일때 정수화됌 + '수'의 처리만 추가로