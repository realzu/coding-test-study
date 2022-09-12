// ★★
function solution(arr){  
    let answer = 0;
    let n = arr.length;

    let dx = [-1, 0 , 1, 0]; //체크 좌표값
    let dy = [0, 1, 0, -1];

    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            let flag = 1; //확인용
            for (let k=0; k<4; k++){ //좌표배열
                let nx = i + dx[k]; //움직일 좌표
                let ny = j + dy[k];
                if (nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]) //조건확인
                    flag = 0;
                    break; //하나라도 나오면 멈추기
            }
            if (flag) answer++;
        }
    }

    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];
console.log(solution(arr));