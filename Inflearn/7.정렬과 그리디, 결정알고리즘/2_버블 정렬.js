// ★
// 버블정렬 -> 앞뒤비교 (cf.선택정렬:가장작은값의 위치(idx) 저장)

function solution(arr){
    let answer = arr;

    for (let i=0; i<arr.length-1; i++) { // j,j+1로 처리할거라
        for (let j=0; j<arr.length-i-1; j++) { // i만큼 줄어들고 마찬가지로-1
            if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // 앞이 더 크면 앞뒤 자리바꾸기
        }
    }

    return answer; //arr과 주소가 같아서 arr값이 변경되면 answer도 똑같이 영향
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));