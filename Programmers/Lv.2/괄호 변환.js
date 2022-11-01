// ★

function solution(p) {
    var answer = '';
    
    function Right(s){ // 올바른 괄호
        let stack = [];
        s.forEach(v => {
            if (v === `(`) stack.push(v);
            else {
                if (stack.length === 0) return false;
                else stack.pop();
            }
        })
        return stack.length ? false : true;
    }
    
    function Separate(s){ //균형잡힌 분리
        let left = 0;
        let right = 0;
        s.forEach((x, i) => {
            if (x === `(`) left++;
            else right++;
            
            if (left > 0 && left === right) return s.slice(0, i+1);
        })
        return '';
    }
    
    function DFS(u, v){
        if (Right(u)) DFS(v, '');
        else {
            answer = '(';
            answer += DFS(v, '');
            answer += ')';
            // ★
        }
    }
    
    if (p === '') return '';
    else if (Right(p)) return p;
    else DFS(Separate(p), );
    
    return answer;
}

// 타 정답풀이 -- 전체함수 자체를 재귀로
function solution(w) {
    if (w === '') return '';
    let u, v;
    let cnt = 0;

    let wLen = w.length;
    for (let i=0; i<wLen; i++){ // 균형잡힌 문자열 분리
        w[i] === '(' ? cnt++ : cnt--;
        if (cnt === 0){
            u = w.slice(0, i+1);
            v = w.slice(i+1);
        }
    }

    let uLen = u.length;
    for (let i=0; i<uLen; i++){
        u[i] === '(' ? cnt++ : cnt--;
        if (cnt < 0){ // 올바른 문자열 x
            let str = '';
            str += `(${solution(v)})`; // 앞뒤괄호 + 가운데 v결괏값
            for (let j=1; j<uLen-1; j++){ // 맨앞,맨뒤 제외해야
                u[j] === '(' ? (str += ')') : (str += '('); // 괄호반대로
            }
            return str;
        }
    }

    return u + solution(v);
}