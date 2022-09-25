function solution(num, arr){
    let answer=0;
    
    for (let i=0; i<arr.length; i++){
        let sum = arr[i];
        for (let j=i+1; j<arr.length; j++){
            sum += arr[j];
            if (sum === 6) {
                answer++;
                break;
            } else if (sum > 6) break;
        }
    }

    return answer;
}

// @강의 답안
function solution(m, arr){
    let answer=0, lt=0, sum=0;

    for (let rt=0; rt<arr.length; rt++) { //rt가 오른쪽으로 가면서 lt,rt조절
        sum += arr[rt];
        if (sum === m) answer++;
        while (sum >= m) {
            sum -= arr[lt++]; //arr[lt] 빼고 lt--
            if (sum === m ) answer++;
        }
    }

    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));