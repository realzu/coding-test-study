// ★★

function solution(times){
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];

    for (let x of times){
        T_line.push([x[0], 's']); // 시작
        T_line.push([x[1], 'e']); // 끝
    }

    T_line.sort((a, b) => { // 시간기준정렬
        if (a[0]===b[0]) return a[1].charCodeAt() - b[1].charCodeAt(); // 시작시간 같을때 -> 'e'가 's'보다 먼저니까 
        else return a[0] - b[0];
    })

    let cnt = 0;
    for (let x of T_line) {
        if (x[1]==='s') cnt++; // 시작
        else cnt--; // 끝
        answer = Math.max(answer, cnt);
    }

    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));