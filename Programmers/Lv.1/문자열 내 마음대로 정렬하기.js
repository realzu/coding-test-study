// ★
// sort 제대로 사용하는 법
function solution(strings, n) {
    return strings.sort((a, b) => { // 오름차순 정렬
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else return a > b ? 1 : -1; // 같으면 사전순 정렬
    });
}