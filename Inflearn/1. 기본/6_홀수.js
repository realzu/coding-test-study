function solution(arr){
                
    let answer, sum=0, numbers=[];

    for (i=0; i<arr.length; i++){
        if (arr[i] % 2 === 1) {
            sum += arr[i];
            numbers.push(arr[i]);
        }
    }

    let min=numbers[0];

    for (i=0; i<numbers.length; i++){
        if (numbers[i] <= min) min=numbers[i];
    }

    answer = `${sum} \n ${min}`;

    /* @@
    let answer=[];
    let sum=0, min=Number.MAX_SAFE_INTEGER;
    for (let x of arr){
        if (x%2===1){
            sum+=x;
            if (x<min) min=x;
        }
    }                
    */

    return answer;

}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));