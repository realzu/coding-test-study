function solution(s){  
    const answer = [];
    [...s].forEach((x) => {
        if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) answer.push(x.toUpperCase());
        else answer.push(x.toLowerCase());
    })

    return answer.join('');
}


/* cf)
    const answer = "";

    for (let x of s) {
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }

    return answer;
*/