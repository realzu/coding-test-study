// ★
function isPrime(num){
    if (num===1) return false;
    for (let i=2; i<=parseInt(Math.sqrt(num)); i++){ //소수-> sqrt(제곱근)까지만
        if (num % i === 0) return false;
    }
    return true;
}

function solution(arr){
    let answer = [];
    /*
        let val = '';
        let tmp = '';
    */
    
    for (let x of arr){
        /* 내가 쓴 거
            tmp = String(x);
            val = '';
            for (let i=tmp.length-1; i>=0; i--){
                if ((tmp[0] || tmp[tmp.length-1]) !== '0'){
                    val += tmp[i];
                }
            }
            answer.push(parseInt(val));
        */
        /* 답안1
            let res = 0;
            while(x) {
                let t = x % 10;
                res = res * 10 + t;
                x = parseInt(x / 10);
            }
        */
        // 답안2
        let res = Number(x.toString().split('').reverse().join('')); //★toString, reverse
        if (isPrime(res)) answer.push(res);
    }
    
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));