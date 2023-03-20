function solution(n, arr){
    let max = Number.MIN_SAFE_INTEGER;
    let idx = 0; // index말고 원래 value값으로 해도 됌!

    arr.forEach((x, i) => {
        const elem = x.toString();
        let num = 0;        
        for (let val of elem) {
            num += Number(val);
        } // let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0) -- 한 줄!

        if (num > max || (num === max && x > arr[idx])) {
            max = num;
            idx = i;
        }
    })

    return arr[idx];
}