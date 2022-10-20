function solution(s) {
    var answer = '';
    s = s.split(' ');
    s = s.map(x => parseInt(x));
    s.sort((a, b) => a - b);
    
    let min = s[0];
    let max = s[s.length-1];
    
    return String(min) + ' ' + String(max);
} 
// ★ 연산에서 문자열 넣으면 숫자도 문자열로 변환!

// 타 풀이
function solution(s) {
    const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr);
}
// ★ Math가 문자열도 가능!