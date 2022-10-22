function solution(brown, yellow) {
    var answer = [];    
    let len = []; // [가로, 세로]
    
    for (let n=1; n<=yellow; n++){
        if (n > yellow/n) break;
        else if (yellow % n === 0) len.push([yellow/n, n]);
    }
        
    for (let x of len){
        if ((x[0] + 2) * 2 + x[1] * 2 === brown) {
            answer = [x[0] + 2, x[1] + 2];
            break;
        }
    }    
    
    return answer;
}