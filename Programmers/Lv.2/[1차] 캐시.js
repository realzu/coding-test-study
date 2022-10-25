function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    if (cacheSize === 0) return cities.length * 5;
    
    for (let x of cities){
        x = x.toLowerCase();
        
        if (cache.indexOf(x) === -1){ //찾는값이 없다면
            answer += 5;
            if (cache.length >= cacheSize) cache.shift();
        }
        else {
            answer++;
            cache.splice(cache.indexOf(x), 1);
        }
        cache.push(x);
    }

    return answer;
}

// 테케 2개가 틀려서 질문하기봤더니 -> 0일때 예외처리해야해서 추가로 통과
// 조건의 예외를 잘 살피자!