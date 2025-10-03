function solution(numbers) {
    var answer = [];
    
    /*
    1. 이중 반복문으로 매번 값 더하기
    2. 일단 배열에 다 넣고
    3. Set method
    4. 오름차순
    */
    
    const numbersLength = numbers.length;
    numbers.forEach((num, idx) => {
        for (let i=idx+1; i<numbersLength; i++) {
            answer.push(num + numbers[i]);
        }
    })
    
    return [...new Set(answer)].sort((a, b) => a - b);
}
