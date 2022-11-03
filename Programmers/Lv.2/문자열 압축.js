// ★

function solution(s) {
    let len = s.length;
    var answer = len;
    let sep = 1; // 나눌 갯수
    
    while (sep <= Math.floor(len / 2)) {
        let max = 1;
        let words = [s.slice(0, sep)];

        let i = sep;
        while (i <= len-sep){
            let ck = words[words.length-1]; // 앞문자
            let tmp = s.slice(i, i + sep); //현재값
            if (ck === tmp) {
                if(i === len - sep){
                    words.pop();
                    words.push(`${max+1}${tmp}`);
                }
                max++;
            }
            else { // 다를때
                if (max === 1) words.push(tmp);
                else {
                    words.pop();
                    words.push(`${max}${ck}`);
                    words.push(tmp);
                }
                max = 1;
            }
            i += sep
        } 
        words.push(s.slice(i));

        answer = Math.min(answer, words.join('').length);
        sep++;
    }
    
    return answer;
}

// 타 정답풀이
// 나는 배열로 -> 이건 문자열로 처리 (so, pop/push처리보다 간단한듯)
function solution(s) {
    let min_len = s.length;
    
    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let prev = s.substr(0, i);
        let cnt = 1;
        let tmp_str = '';
        
        for (let k = i; k < s.length; k += i) {
            const cur = s.substr(k, i);
            
            if (prev === cur) cnt++; // 앞과 같
            else { // 다름
                tmp_str += (cnt > 1 ? String(cnt) : '') + prev;
                cnt = 1; // 초기화
                prev = cur; // prev 체인지
            }
        }
        tmp_str += (cnt > 1 ? String(cnt) : '') + prev; // 마지막값 처리
        
        min_len = Math.min(min_len, tmp_str.length)
    }
    
    return min_len;
}