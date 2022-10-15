// ★
// 정렬

// 하다가 실패
function solution(numbers) {    
    numbers.sort((a, b) => {
        return parseInt(String(b)[0]) !== parseInt(String(a)[0])
        ? parseInt(String(b)[0]) - parseInt(String(a)[0])
        : String(a).indexOf('0') > 0 || String(b).indexOf('0') > 0
        ? String(a).indexOf('0') - String(b).indexOf('0')
        : asd
    })
    
    // numbers = numbers.join('');
        
    return numbers;
}

// 타 풀이
function solution(numbers) {
    const answer = numbers
        .map(number => String(number))
        .sort((a, b) => (b + a) - (a + b)) // +로 String합치고 -로 Number(산술계산) 정렬
        .join('');
    
    return answer[0] === '0' ? '0' : answer; // numbers가 모두 0이면 answer도 0인 점 방지
}

/* ★
'+' 연산자) 문자열 합치기 : 'Java' + 'Script' (String)
'-' 연산자) 문자+숫자 산술 : '123' - 23 = 100 (Number)
*/
