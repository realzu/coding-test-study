// ★★
// 재귀함수 이용
function solution(n){
    let answer = ''; //string으로

    function DFS(n){
        if (n === 0) return;
        else {
            DFS(parseInt(n / 2)); // 정수화 해주기
            answer += (n % 2); // '1011' 되도록 이어붙임
        }
    }

    DFS(n);
    return answer;
}

console.log(solution(11));