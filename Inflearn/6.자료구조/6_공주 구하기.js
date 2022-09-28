// ★★
// Queue
function solution(n, k){  
    let answer;

    let queue = Array.from({length:n}, (v, i) => i+1);

    while (queue.length) { //0은 false, 1은 true -> 0되면끝
        for (let i=1; i<k; i++) queue.push(queue.shift()); //k번째전까지 shift()로 맨 앞의 값을 맨 뒤로 넣음
        queue.shift(); //k번째값은 그냥 뺌
        if (queue.length === 1) answer = queue.shift(); //남은 1개
    }
    
    return answer;
}

console.log(solution(8, 3));