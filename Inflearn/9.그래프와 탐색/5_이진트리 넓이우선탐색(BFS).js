// ★
function solution(){  
    let answer = '';
    let queue = [];
    queue.push(1);

    while(queue.length){ // length가 0이면 false니까 멈춤
        let v = queue.shift(); // 맨 앞의 값 꺼냄
        answer += v + ' ';
        for (let nv of [v*2, v*2+1]){
            if (nv > 7) continue;
            queue.push(nv);
        }
    }
    
    return answer;
}

console.log(solution());