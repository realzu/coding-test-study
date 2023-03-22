function solution(s){
    const obj = {};
    for (let x of s) {
        if (!obj[x]) {
            obj[x] = 1;
        } else {
            obj[x] += 1;
        }
    }

    const arr = Object.entries(obj);
    arr.sort((a, b) => b[1] - a[1]);
    return arr[0][0];                
}
