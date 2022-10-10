function solution(arr){
    var answer = [arr[0]];
    
    for (let x of arr){
        let ck = answer.pop();
        if (x === ck) answer.push(ck);
        else {
            answer.push(ck);
            answer.push(x);
        }
    }
    
    return answer;
}

// 다른사람 풀이
function solution(arr){
    return arr.filter((val, index) => val != arr[index+1]); // 필터 사용
}