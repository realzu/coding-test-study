// ★

// 답은 맞았지만 테케에서 시간초과
function solution(orders, course) {
    var answer = [];
    let tmp = [];
    let dir = {}; // 조합별 갯수 담기
    let ck = Array.from({length: 10}, ()=>0);
    let hap = [];
    
    function DFS(order, n, L, s){ // 조합 (L은 조합수)
        if (L===0) hap = [];
        if (L === n){
            let menu = tmp.slice(0, L).sort().join('');
            if (hap.indexOf(menu) === -1) {
                if (dir[menu]) dir[menu]++;
                else dir[menu] = 1;
                hap.push(menu);
            }            
        }
        else {
            for (let i=0; i<order.length; i++){
                if (!ck[i]){
                    ck[i] = 1;
                    tmp[L] = order[i];
                    DFS(order, n, L+1, i+1);
                    ck[i] = 0;
                }                
            }
        }
    }
    
    for (let order of orders){
        for (let n of course){
            if (order.length < n) continue;
            else DFS(order, n, 0, 0);
        }        
    }
    
    dir = Object.entries(dir);
    
    let maxs = Array.from({length: 10}, ()=>0);
    for (let x of dir){ // 최댓값
        let len = x[0].length;
        if (course.includes(len) && x[1] > 1) {
            maxs[len] = Math.max(maxs[len], x[1]);  
        }      
    }
    
    for (let x of dir){
        if (x[1] === maxs[x[0].length]) answer.push(x[0]);
    }
    
    return answer.sort();
}