function solution(s) {   
    s = s.split('');
    
    s.sort((a, b) => {
        return b.charCodeAt() - a.charCodeAt();
    })
    
    s = s.join('');
    
    return s;
}

// 타 풀이
function solution(s) {   
    return s
        .split('')
        .sort()
        .reverse()
        .join('');
}
// 문자열이라 sort()만 해도 됐음
// reverse로 굳이 b-a안해도
// return에 이어붙어 한 번에!