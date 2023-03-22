function solution(m, arr){
    let answer = 0;

    for (let lt=0; lt<arr.length; lt++) {
        let sum = 0;
        let rt = 0;

        while (sum <= m && rt <= arr.length - lt) {
            sum += arr[lt + rt++];
            if (sum <= m) answer++;
        }
    }

    return answer;
}