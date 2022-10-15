function solution(progresses, speeds) {
    var answer = [];
    let que = [];
    
    for (let i=0; i<progresses.length; i++){
        let days = Math.ceil((100 - progresses[i]) / speeds[i])
        que.push(days)
    }
    
    let i = 0;
    let cnt = 0; //해당값 갯수
    let val = 0; //지운값기준 값
    
    while(i < que.length){
        if (que[i] > val){
            if (i > 0) answer.push(cnt+1);
            cnt = 0; // 초기화
            val = que[i];            
        }        
        else cnt+=1;
        
        if (i === que.length-1) answer.push(cnt+1); //마지막인덱스 처리
        
        i++;
    }
    
    return answer;
}

// 타 풀이
function solution(progresses, speeds) {
    let beforeCommitDay = 0;

    progresses.map((a, i) => { // map으로 한번에 돌리기
        let day = Math.ceil((100 - a) / speeds[i]);

        if (day > beforeCommitDay){
            answer.push(1);
            beforeCommitDay = day;
        }
        else answer[answer.length - 1]++; // length-1해서 직전인덱스로 추가
    })
    return answer;
}
