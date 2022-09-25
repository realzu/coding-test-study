function solution(a, b){
    let answer = [];

    for (let i=0; i<a.length; i++){
        for (let j=0; j<b.length; j++){
            if (a[i] === b[j]) {
                answer.push(a[i]);
                break;
            }
        }
    }

    answer.sort(); //밑에처럼해야! 유니코드위주라

    return answer;
}

// @강의 답안 -- 투포인터 알고리즘
function solution(arr1, arr2){
    let answer = [];

    arr1.sort((a, b) => a-b); //오름차순 정렬 (정렬값기준으로 포인터이동하게)
    arr2.sort((a, b) => a-b);
    
    let p1=p2=0; //포인터 세팅

    while(p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] == arr2[p2]) {
            answer.push(arr1[p1++]); // p1++ -> 후치
            p2++;
        }
        else if (arr1[p1] < arr2[p2]) p1++; //포인터안맞으면 이동
        else p2++;
    }

    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));