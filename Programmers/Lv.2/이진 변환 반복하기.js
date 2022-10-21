// ★ toString

function solution(s) {
    var answer = [0, 0];
    
    while (s !== '1'){
        let len = 0; // 길이
        
        for (let x of s){
            if (x === '1') len++;
        }
        
        answer[0]++;
        answer[1] += s.length - len;
        
        s = len.toString(2); // ★
    }
    
    return answer;
}

// 타 풀이

while(s.length > 1){
    answer[0]++;
    answer[1] += (s.match(/0/g)||[]).length; // for문안하고 match
    s = s.replace(/0/g, '').length.toString(2); // replace로 바로 바꾼후 처리
}