// ★
function solution(s, t){
    let answer = [];
    let p = 1000; //차이 (최대로 시작)

    for (let x of s){
        if (x===t){
            p=0;
            answer.push(p);
        }else {
            p++;
            answer.push(p);
        }
    }
    p = 1000;
    for (let i=s.length-1; i>=0; i--){ //★오른쪽부터의 값 확인 (i--)
        if (s[i]===t) p=0; //이미 위에사 값 들어감
        else{
            p++;
            answer[i] = Math.min(answer[i], p); //기존값과 비교
        }
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));