function solution(arr){  
    const len = arr.length;
    const score = [];
    const answer = [];
    
    arr.forEach((x, idx) => {
        score.push([idx+1, x, 1]); // 현재위치, 점수, 등수
    })
    score.sort((a, b) => b[1] - a[1]);
    
    let num = 1;
    for (let i=1; i<len; i++) {
        if (score[i][1] < score[i-1][1]) num++;
        score[i][2] = num;
    }

    score.sort((a, b) => a[0] - b[0]);
    score.forEach((x) => answer.push(x[2]));
    
    return answer;
}