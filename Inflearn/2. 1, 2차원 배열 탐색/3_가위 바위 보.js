function solution(n, a, b){
    let answer='';

    for (let i=0; i<n; i++){
        if (a[i] === b[i]) answer += ('D')

        if (a[i] === 1){
            if (b[i] === 2) answer += ('B')
            else if (b[i] === 3) answer += ('A')
        }else if (a[i] === 2){
            if (b[i] === 1) answer += ('A')
            else if (b[i] === 3) answer += ('B')
        }else {
            if (b[i] === 1) answer += ('B')
            else if (b[i] === 2) answer += ('A')
        }

        /* ☆ A 이기는것만 생각하고 그 외에 B로 주면 훨씬간단
        if(a[i]===b[i]) answer+="D ";
        else if(a[i]===1 && b[i]===3) answer+="A ";
        else if(a[i]===2 && b[i]===1) answer+="A ";
        else if(a[i]===3 && b[i]===2) answer+="A ";
        else answer+="B ";
        */
    }

    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(5, a, b));