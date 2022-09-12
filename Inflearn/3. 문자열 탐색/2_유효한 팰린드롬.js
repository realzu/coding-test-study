function solution(s){
    let answer = 'YES';
    let n = s.length;
    s = s.toLowerCase();

    for (i=0; i<Math.floor(n/2); i++){
        if (s[i] >= 'a' && s[i] <= 'z') {
            if (s[i] !== s[n-i-1]) return 'NO';
        }
    }

    /*
    s = s.toLowerCase().replace(/[^a-z]/g, ''); ★정규식
    if (s.split('').reverse().join('') !== s) return 'NO'; ☆한줄로
    */

    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));