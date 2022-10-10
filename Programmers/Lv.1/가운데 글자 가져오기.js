function solution(s) {
    var answer = '';
    let len = s.length;
    let idx = 0;
    
    if (len % 2 === 0) {
        idx = (len / 2) - 1;
        answer += s[idx] + s[idx+1];
    }
    else {
        idx = (Math.ceil(len / 2) - 1);
        answer += s[idx];
    }
        
    return answer;
}

// 다른 사람 풀이
function solution(s){
    let mid = Math.floor(s.length / 2); // floor
    return s.length % 2 === 1 ? s[mid] : s[mid-1] + s[mid]; // 삼항연산자
}