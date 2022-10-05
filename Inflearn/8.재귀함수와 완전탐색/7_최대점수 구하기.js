// @
// 이진트리 부분집합 스타일
function solution(m, ps, pt){
    let answer=0;
    let n = ps.length;

    function DFS(L, sum, time){
        if (time > m) return; // 함수 종료
        if (L === n) { // 처음에 L=0은 인덱스번호가 아닌 갯수세기용
            answer = Math.max(answer, sum);
        }
        else {
            DFS(L+1, sum+ps[L], time+pt[L]); // L=0은 빼니까 L+1이 아닌 L로 인덱스를 줌
            DFS(L+1, sum, time);
        }
    }

    DFS(0, 0, 0);

    return answer;
}

let ps=[10, 25, 15, 6, 7]; // 점수
let pt=[5, 12, 8, 3, 4] // 시간
console.log(solution(20, ps, pt));