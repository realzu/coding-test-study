function solution(n, arr){
    maxSum = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let idx = n+1;

    for (let i=0; i<n; i++) {
        sum = 0;
        for (let j of String(arr[i])){
            sum += Number(j);
        }
        if (Math.max(sum, maxSum) === sum && idx > n){
            maxSum = sum;
            idx = i;
        } else if (Math.max(sum, maxSum) === sum && idx < n){
            maxSum = Math.max(arr[i], arr[idx]);
        }
    }
    
    return maxSum;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));