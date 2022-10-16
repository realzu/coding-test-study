// ★

// @는 타 풀이
function isPrime(num){
    if (num < 2) return false; // @ 제약조건

    for (let i=2; i<Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    let answer = new Set(); // @ 중복제거위한 set
    let nums = Array.from(numbers);

    function DFS(arr, fixed){
        if (arr.length >= 1){ // arr이 copyArr과 연결되니까 점점 splice하면서 len줄어드는것
            for (let i=0; i<arr.length; i++){
                const newFixed = fixed + arr[i];
                const copyArr = arr.slice();
                copyArr.splice(i, 1); // 고정한요소는 배열제거

                if (!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))){ // 값들어있는지확인
                    answer.add(parseInt(newFixed));
                }

                DFS(copyArr, newFixed);
            }
        }
    }
    
    // DFS(0, 0);
    DFS(nums, ''); // @
    
    return answer
}