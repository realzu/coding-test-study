function solution(record) {
    var answer = [];
    let dir = {};
    
    for (let x of record) {
        x = x.split(' ');
        if (x[0] === 'Enter') dir[x[1]] = x[2];
        else if (x[0] === 'Change') dir[x[1]] = x[2];
    }
    
    for (let x of record) {
        x = x.split(' ');
        if (x[0] === 'Enter') answer.push(`${dir[x[1]]}님이 들어왔습니다.`)
        else if (x[0] === 'Leave') answer.push(`${dir[x[1]]}님이 나갔습니다.`)
    }
    
    return answer;
}

// 타 풀이 - forEach, Map (방법만 좀 다름. 논리는 같)
function solution(record) {
    let answer = [];
    const uids = new Map();

    record.forEach(entry => {
        let [command, uid, nick] = entry.split(' '); // ★
        if (command === 'Enter' || command === 'Change') uids.set(uid, nick);
    })

    record.forEach(entry => {
        let [command, uid] = entry.split(' ');
        if (command === 'Enter') answer.push(`${uids.get(uid)}님이 들어왔습니다.`);
        if (command === 'Leave') answer.push(`${uids.get(uid)}님이 나갔습니다.`);
    })
}