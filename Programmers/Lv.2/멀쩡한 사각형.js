// ★

// 대각선 지나는 단위 사각형 갯수 - 수학 공식 알아야
// w + h - (w, h의 최대공약수) = 가로 + 세로 - 최대공약수
function solution(w, h) {
    function gcd(w, h){
        return h > 0 ? gcd(h, w % h) : w;
    }

    let gcdVal = gcd(w, h);

    return w * h - (w + h - gcdVal);
}