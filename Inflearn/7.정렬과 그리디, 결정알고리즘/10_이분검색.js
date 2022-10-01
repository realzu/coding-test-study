function solution(m, arr){
    let answer = 0;

    arr.sort((a, b) => a - b);
    answer = arr.indexOf(m) + 1;

    return answer;
}

// @ 강의 답안
function solution(target, arr){
    let answer;

    arr.sort((a, b) => a - b);
    let lt = 0, rt = arr.length-1;

    while(lt <= rt) { // 이분검색 (양쪽에서 lt,rt로 좁혀옴)
        let mid = parseInt(lt + rt) / 2; // 인덱스중간값
        if (arr[mid] === target){
            answer = mid + 1;
            break; // 답 찾으면 반복문 끝
        }
        else if (arr[mid] > target) rt = mid - 1;
        else lt = mid + 1;
    }

    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));