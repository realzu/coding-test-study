function solution(arr){
    const sum = arr.reduce((acc, cur) => acc + cur, 0); // # reduce
    const len = arr.length;
    for (let i=0; i<len-1; i++) {
        for (let j=1; j<len; j++) {
            if (sum - (arr[i] + arr[j]) === 100) {
                return arr.filter((x, idx) => ((idx !== i) && (idx !== j))); // # filter
                // splice로도 i, j 지울 수 있 (대신 j부터 = 실제배열 바뀌니까)
            }
        }
    }

    return -1; 
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));