// ★★
function solution(m, product){
    let answer=0;
    let n = product.length;
    product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); //★총합순 정렬

    for (let i=0; i<n; i++){
        let money = m - (product[i][0]/2 + product[i][1]); //차례대로 /2해봄
        let cnt = 1;

        for (let j=0; j<n; j++){
            if (j!==i && (product[j][0] + product[j][1]) > money) break; //계속도는거 방지
            if (j!==i && (product[j][0] + product[j][1]) <= money){
                money -= (product[j][0] + product[j][1]);
                cnt++;
            }
        }

        answer = cnt;
    }            

    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));