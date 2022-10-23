function solution(arr) {
    arr.sort((a, b) => a - b);
    let max = arr.pop();
    
    let i = 1;
    while (true){
        for (let x of arr){
            if ((max * i) % x !== 0) break;
            else if ((max * i) % x === 0 && x === arr[arr.length-1]) return max * i;
        }
        i++;
    }
}

// ★ 유클리드 호제법을 사용한 풀이 -> 벨로그에 정리 완료