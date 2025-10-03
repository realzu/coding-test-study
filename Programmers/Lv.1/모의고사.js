function solution(answers) {
    var answer = [];
    /**
    1. 1,2,3 수포자 패턴 파악
    2. answer 과 순서가 맞는지
    */
    
    const list = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    let max = 0;
    list.forEach((arr, index) => {
        let maxByArr = 0;
        answers.forEach((val, idx) => {
            const target = arr[idx%arr.length];
            if (val === target) {
                maxByArr++;
            }
        })
        
        if (max < maxByArr) {
            answer = [index+1];
            max = maxByArr;
        } else if (max === maxByArr) {
            answer.push(index+1);
        }
    })
    return answer;
}

/*
1. 네이밍 구분되게 하기
    answer, answers 둘 다 있어서 혼용해서 쓰다 실수함

2. Array.prototype.entries()
    배열의 entries 도 있음!
```
const arr = [1,2,3,4,5];
for (const [인덱스, 값] of arr.entries()) {
  console.log(`i=${인덱스}, value=${값}`);
}
```
*/
