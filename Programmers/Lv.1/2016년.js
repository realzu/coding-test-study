// ★
// Date

function solution(a, b) {
    let date = new Date(2016, (a-1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

// Date의 날짜 표시 형태를 활용해 return값 반환
    // Tue May 24 2016 00:00:00 GMT+0900 (Korean Standard Time)