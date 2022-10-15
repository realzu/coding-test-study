// ★

// 타 풀이
// Object
function solution(clothes) {
    var answer = 1;
    let sorts = {}; // 의상별 갯수 확인할 object

    for (let cloth of clothes){
        if (sorts[cloth[1]]) sorts[cloth[1]]++; // 있으면+1
        else sorts[cloth[1]] = 1; // 없으면 생성
    }

    for (let i of Object.keys(sorts)){ // ★ keys로 가져오기
        answer *= sorts[i] + 1; // 종류갯수만큼 곱하기 + 전부안입는경우(1)
    }
    
    return answer - 1; //전부안입는경우 빼기
}