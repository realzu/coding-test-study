// 강의 (LIS)

function solution(arr){
    let answer = 0;
    let dy = Array.from({length : arr.length}, ()=>0); // 자기앞의 원소 정렬 가능 수
    dy[0] = 1; // 첫 항은 앞에 뭐 없으니까 자기자신(=1)

    for (let i=1; i<arr.length; i++){
        let max = 0;
        for (let j=i-1; j>=0; j--){ // 내 앞에서 가장 max 정렬수 찾기
            if (arr[j] < arr[i] && dy[j] > max){ // 나보다 작은 값이어야
                max = dy[j];
            }
        }
        dy[i] = max + 1; // 1은 내 자신
        answer = Math.max(answer, dy[i]);
    }
    
    return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));