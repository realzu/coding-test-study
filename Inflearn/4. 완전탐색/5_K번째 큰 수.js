function solution(n, cnt, arr){
    let answer = 0;
    let maxs = [];
    arr = arr.sort((a,b) => b-a);

    for (let i=0; i<n; i++){
        for (let j=i+1; j<n; j++){
            for (let k=j+1; k<n; k++){
                let sum = arr[i] + arr[j] + arr[k];
                let check = maxs.find(val => val === sum);
                if (check === undefined ) maxs.push(sum);
                if (maxs[cnt-1] === sum) return sum;
            }
        }
    }

    return answer;

/* 기존 답변
    let answer;
    let tmp = new Set(); //★

    for (let i=0; i<n; i++){
        for (let j=i+1; j<n; j++){
            for (let k=j+1; k<n; k++){
                tmp.add(arr[i] + arr[j] + arr[k]);
            }
        }
    }

    let a = Array.from(tmp).sort((a,b) => b-a);
    answer = a[cnt-1];
    return answer;
*/
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));