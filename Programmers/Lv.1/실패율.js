function solution(N, stages) {
    var answer = [];
    
    for (let i=1; i<N+1; i++) {
        let failureRate = 0;
      
        if (stages.filter(s => s === i).length > 0) {
            const target = stages.filter(s => s === i).length;
            const arrive = stages.filter(s => s >= i).length;
            failureRate = target / arrive;
        }
        answer.push([i, failureRate]);
    }
    
    answer.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        return (b[1]-a[1]);
    })
    
    return answer.map(x => x[0]);
}
