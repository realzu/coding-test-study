// ★
function solution(arr){
    let answer = 'NO', flag = 0;
    let total = arr.reduce((a, b) => a + b, 0);
    let n = arr.length;

    function DFS(L, sum){ // L은 인덱스
        if (flag) return; // flag 안쓰고 바로 return하면 해당 함수는 종료되지만 스택에 남은 함수들이 계속 호출됌
        if (L === n) { // 0번째 인덱스부터 시작하니 n번째에는 종료
            if ((total - sum) === sum) {
                answer = 'YES';
                flag = 1; // 아예 flag에 값 줘서 종료
            }
        }
        else {
            DFS(L + 1, sum + arr[L]); // 다음인덱스로 넘어가면서 부분집합에 포함 여부 확인
            DFS(L + 1, sum); //포함안하면 패스
        }
    }

    DFS(0, 0); // 초기값

    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));