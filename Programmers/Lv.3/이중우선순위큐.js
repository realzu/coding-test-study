function solution(operations) {
    var answer = [];
    
    for (let x of operations) {
        let [a, b] = x.split(' ');
        if (a === 'I') answer.push(parseInt(b));
        else if (a === 'D') {
            answer.sort((a, b) => a - b);
            b === '1' ? answer.pop() : answer.shift();
        }
    }
    
    answer.sort((a, b) => a - b);
    return answer.length === 0 ? [0, 0] : [answer.pop(), answer[0]];
}