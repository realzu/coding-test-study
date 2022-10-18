function solution(n) {
    let num = Math.sqrt(n);
    if (num === parseInt(num)) return (num+1) * (num+1);
    else return -1;
}