function solution(size, arr){
    let answer = [];
    for (let x of arr) {
        if (!answer.includes(x)) answer.unshift(x);
        else {
            const index = answer.indexOf(x);
            const left = answer.slice(0, index);
            const right = answer.slice(index+1);
            answer = [x, ...left, ...right];
        }
    }

    return answer.slice(0, size);

    /*
    const idx = answer.indexOf(x); // + idx로 조건2개 처리
    for (let x of arr) {
        if (idx === -1) answer.unshift(x);
        if (answer.length > size) answer.pop(); // +++ 안그러면 계속 커짐!
        else {
            answer.splice(idx, 1); // + slice(x) splice(good)
            answer.unshift(x);
        }
    }

    return answer;
    */
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));