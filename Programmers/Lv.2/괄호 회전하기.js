// ★

// 테케 절반 실패
function solution(s) {
    var answer = 0;
    let tmp = [...s];
    
    for (let i=0; i<s.length; i++) {        
        let ck = 0;
        if ((tmp.indexOf(`[`) === -1 && tmp.indexOf(`]`) !== 1) || tmp.indexOf(`[`) > tmp.indexOf(`]`)) ck++;
        if ((tmp.indexOf(`{`) === -1 && tmp.indexOf(`}`) !== 1) || tmp.indexOf(`{`) > tmp.indexOf(`}`)) ck++;
        if ((tmp.indexOf(`(`) === -1 && tmp.indexOf(`)`) !== 1) || tmp.indexOf(`(`) > tmp.indexOf(`)`)) ck++;
        if (tmp.indexOf(`[`) === -1 && tmp.indexOf(`(`) === -1 && tmp.indexOf(`{`) === -1) ck++;
        let val = tmp.shift();
        tmp.push(val);
        
        if (!ck) answer++;      
    }
    
    return answer;
}

// 타 정답풀이
function solution(s) {
    if (s.length % 2 === 1) return 0; //홀수개면 짝 아예 안맞음
    let len = s.length;
    var answer = 0;

    for (let i=0; i<len; j++) {
        let str = s.slice(i) + s.slice(0, i);
        let stack = [];
        let flag = 1;
        for (let n of str) {
            if (n === '(' || n === '{' || n === '(') stack.push(n);
            else {
                let bracket = stack.pop();
                if (n === ')' && bracket === '(') continue; // ★ 반복문 그냥 pass (아래코드 x). cf) braek는 중지
                if (n === '}' && bracket === '{') continue;
                if (n === ']' && bracket === '[') continue;
                flag = 0;
                break;
            }
        }
        if (flag) answer++;
    }
}