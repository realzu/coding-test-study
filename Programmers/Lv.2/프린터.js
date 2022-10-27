function solution(priorities, location) {
    var answer = 1;
    let dir = {};
    
    for (let i=0; i<priorities.length; i++) {
        dir[`a${i}`] = priorities[i];
    }
    
    dir = Object.entries(dir);

    while (true) {
        let max = Math.max(...priorities);
        if (dir[0][1] < max) {
            dir.push(dir[0]);
            dir.shift();

        }
        else {
            if (dir[0][0] === `a${location}`) return answer;
            else {
                let idx = priorities.indexOf(dir[0][1]);
                priorities = [...priorities.slice(0, idx), ...priorities.slice(idx+1)];
                answer++;
                dir.shift();
            }
        }        
    }
}

// 타 풀이 - map, some 사용
function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) arr.push(firstEle);
        else queue.push(firstEle);
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}