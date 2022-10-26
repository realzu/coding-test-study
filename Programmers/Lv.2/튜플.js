function solution(s) {
    var answer = [];
    let dir = {};

    s = s.split(/{{|{|}}|}|,/g); // ★ 여러 분할자
    
    for (let x of s){
        if (x !== '') {
            if (!dir[x]) dir[x] = 1;
            else dir[x]++;
        }
    }

    dir = Object.entries(dir).sort((a, b) => b[1] - a[1]); // [ [ '111', 2 ], [ '20', 1 ] ] ★value정렬
    
    for (let x of dir) {
        answer.push(parseInt(x[0]));
    }

    return answer;
}