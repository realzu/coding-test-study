function solution(m, arr){
    const len = arr.length;
    let answer = 0;

    for (let i=0; i<len; i++) {
        let sum = arr[i];
        for (let j=1; j<len-i; j++) {
            if (sum === m) {
                answer++;
                break;
            }
            else if (sum > m) break; // ##
            sum += arr[i+j];
        }
    }
    
    return answer;
}

function solution(m, arr){
    let lt = answer = 0;
    let sum = arr[0];
    let rt = 1;

    while (rt < arr.length) {
        if (sum === m) {
            answer++;
            sum -= arr[lt++];
        } else if (sum > m) {
            sum -= arr[lt++];
        } else {
            sum += arr[rt++];
        }
    }
    return answer;
}