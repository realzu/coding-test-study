function solution(n, words) {
    let len = words.length;
    let dir = {};
    dir[words[0]] = 1;
    
    for (let i=1; i<=len-1; i++) {
        if (words[i-1][words[i-1].length-1] === words[i][0]){
            if (dir[words[i]]) return [(i+1) % n === 0 ? n : (i+1) % n, Math.ceil((i+1) / n)];
            else dir[words[i]] = 1;
        }
        else return [(i+1) % n === 0 ? n : (i+1) % n, Math.ceil((i+1) / n)];
    }    
    return [0, 0];
}