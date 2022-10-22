function solution(n) {
    var answer = 0;
    let cnt = 0;
    
    for (let x of n.toString(2)){
        if (x === '1') cnt++;
    } // ★ n.toString(2).match(/1/g).length 이렇게도 가능!
    
    while(true){
        n++;
        let plus = 0;
        for (let x of n.toString(2)){
            if (x === '1') plus++;
        }
        if (plus === cnt) {
            answer = n;
            break;
        }        
    }
    
    return answer;
}