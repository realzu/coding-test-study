function solution(s, t){
    const len = str.length;
    const answer = [];
    for (let i=0; i<len; i++) {
        for (let j=1; j<Math.floor(len / 2); j++) {
            const ri = i + j;
            const li = i - j;
            const right = s[i + j];
            const left = s[i - j];
            if (s[i] === t) {
                answer.push(0);
                break;
            }
            else if ((ri >= 0 && ri < len && right === t) || (li >= 0 && li < len && left === t)) {
                answer.push(j);
                break;
            }
        }
    }

    return answer;
}