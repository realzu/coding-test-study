// ★
// DFS

// @붙은게 타 풀이 추가
function solution(numbers, target) {
    var answer = 0;
    
    // function DFS(L, sum, i){ // L은 레벨 
        // if (L === numbers.length-1){
    function DFS(L, sum){ // @ i는 필요없! L이 그 역할이니까
        if (L === numbers.length){ // @ L=6일때 L=5값 더해주니 length에맞게
            if (sum === target) answer += 1; // answer++;도 마찬가지ㅇㅇ
            return; // ★ return을 해야 함수가 끝남~! (=>중단 점)
        }
        else{
            // DFS(L+1, sum+numbers[i], i++);
            DFS(L+1, sum + numbers[L]); // @ sum+numbers[0]해주고 L+1
            DFS(L+1, sum - numbers[L]); // @
        }
    }
    
    DFS(0, 0);
    
    return answer;
}