// ★
// Set, 삼항연산자

function solution(nums) {
    let len = nums.length / 2;
    
    let tmp = [...new Set(nums)]; // 중복 제거한 배열 (Set)
    let tmp_len = tmp.length;
    
    return tmp_len >= len ? len : tmp_len; // 삼항연산자로 return값 처리
}

/*
다양한종류개수 구하는거니까 -> 중복제거
중복제거한 Set의개수 VS n/2 비교해서 n/2를 중심으로 더 작은 값 반환
*/