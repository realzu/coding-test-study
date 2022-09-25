// 해쉬, 투포인터, 슬라이딩윈도우
// ★★

function compareMaps(map1, map2){ // sH, tH -- 비교함수
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}

function solution(s, t){
    let answer=0;
    let sH = new Map();
    let tH = new Map();

    for (let x of t) { // 첫세팅
        if (tH.has(x)) tH.set(x, tH.get(x)+1);
        else tH.set(x, 1);
    }

    let len = t.length - 1; // 기본값(rt 하나빼고)
    for (let i=0; i<len; i++) {
        if (sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
        else sH.set(s[i], 1);
    }

    let lt = 0;
    for (let rt=len; rt<s.length; rt++){
        if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
        else sH.set(s[rt], 1);

        if (compareMaps(sH, tH)) answer++; //비교해서 맞으면 +

        sH.set(s[lt], sH.get(s[lt])-1); // 비교 후 lt 옮기기위해 지우기
        if (sH.get(s[lt]) === 0) sH.delete(s[lt]); // 0이면 없앰
    }
    
    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));