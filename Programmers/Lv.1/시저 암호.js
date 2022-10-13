function solution(s, n) {
    var answer = '';
    
    for (let x of s){
        let plus = x.charCodeAt(0) + n;
        
        if (x >= 'a' && x <= 'z') {
            let ck = 122 - plus;        
            if (ck < 0) plus = 96 - ck;
        }
        else if (x >= 'A' && x <= 'Z') {
            let ck = 90 - plus;        
            if (ck < 0) plus = 64 - ck;
        }        
        
        if (x === ' ') answer += ' ';
        else {
            answer += String.fromCharCode(plus);
        }        
    }
    
    
    return answer;
}