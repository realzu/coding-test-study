function count(songs, capacity) { // 분할 가능한 갯수
    let cnt = 1, sum = 0;
    for (let x of songs){
        if (sum+x > capacity){
            cnt++; // 더 크니까 분할o
            sum = x;
        }
        else sum += x; // 범위 내에 값 계속 더해줌
    }
}

function solution(m, songs){
    let answer;

    let lt = Math.max(...songs); // max(a,b,c)라서 배열이 아닌 요소가 있어야함. -> 배열을 펼쳐주는 ...연산자로! --> 최솟값(배열값 중 제일 큰 값)
    let rt = songs.reduce((a, b) => a + b, 0); // 배열 다 더한값
    
    while (lt <= rt) { // 이분
        let mid = parseInt((lt + rt) / 2);
        if (count(songs, mid) <= m){
            answer = mid;
            rt = mid - 1;

        }
        else lt = mid + 1;
    }


    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));