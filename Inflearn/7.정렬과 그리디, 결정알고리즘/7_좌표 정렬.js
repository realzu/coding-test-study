function solution(arr){
    // 버블정렬
    let answer = arr;

    for (let i=0; i<arr.length-1; i++) {
        if (arr[i][0] > arr[i+1][0]) [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        else if  (arr[i][0] === arr[i+1][0]) {
            if (arr[i][1] > arr[i+1][1]) [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }

    return answer;
}

// @ 강의 답안
function solution(arr){
    let answer = arr;

    arr.sort((a, b) => { // sort로 정렬하면 됌~~!!
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    })

    return answer;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));