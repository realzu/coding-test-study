function solution(s){
    let pnum = ynum = 0;

    s = s.toLocaleLowerCase();
    for (let x of s){
        if (x === 'p') pnum++;
        else if (x === 'y') ynum++;
    }
    
    return pnum === ynum ? true : false;
}

// 타 풀이
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
} // split의 배열 반환을 활용 + 삼항연산자안해도 됌!(어차피 true, false는 동등연산자의 결과니까)
