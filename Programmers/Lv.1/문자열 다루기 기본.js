// ★
function solution(s) {
    return (s.length === 4 || s.length === 6) && !isNaN(parseInt(s));
}
// 자바스크립트는 중간에 e가 들어가면 지수로 인식해서 숫자로 판별 (ex. 10e1) -> 실패

// 타 풀이
// ★every
function solution(s) {
    if (s.length === 4 || s.length === 6){
        return s.split('').every(c => !isNaN(c));
    } else {
        return false;
    }
}