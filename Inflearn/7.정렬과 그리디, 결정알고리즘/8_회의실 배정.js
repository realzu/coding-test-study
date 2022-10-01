// ★
// 정렬해야되는데 문제 잘못이해해서 max세기만 함
function solution(arr){
    let answer=0;

    for (let i=0; i<arr.length; i++) {
        let cnt = 1;
        let time = arr[i][1];
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i][1] <= arr[j][0]) {
                time = arr[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}

// 강의 답안
function solution(meeting){
    let answer=0;
    
    meeting.sort((a, b) => {
        if (a[1] === b[1]) return a[0]-b[0]; //끝나는시간 같
        else return a[1]-b[1];
    })

    let et = 0;
    for (let x of meeting) {
        if (x[0] >= et){
            answer++;
            et = x[1];
        }
    }

    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));