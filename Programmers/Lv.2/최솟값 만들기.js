function solution(A,B){
    let sum = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for (let i=0; i<A.length; i++){
        sum += A[i] * B[i];
    }

    return sum;
}

// 타 풀이
/*
return A.reduce((total, val, idx) => total + val + B[idx], 0);
-> 누적합은 reduce로 한 번에
*/