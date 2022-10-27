function solution(str1, str2) {    
    s1 = str1.toLowerCase();
    s2 = str2.toLowerCase(); 
    
    let n1 = [];
    let n2 = [];
    
    for (let i=0; i<s1.length-1; i++){
        let word = s1[i] + s1[i+1];
        if ((/^[a-z]+$/g).test(word)) n1.push(word); // ★정규식
    }
    
    for (let i=0; i<s2.length-1; i++){
        let word = s2[i] + s2[i+1];
        if ((/^[a-z]+$/g).test(word)) n2.push(word);
    }
    
    if (n1.length === 0 && n2.length === 0) return Math.floor(1 * 65536);
    
    let same = 0;
    
    for (let x of n1) {        
        let idx = n2.indexOf(x);
        if (idx !== -1) {
            same++;
            n2 = [...n2.slice(0, idx), ...n2.slice(idx+1)]; // ★배열합치기
        }
    }
        
    let sum = n1.length + n2.length;
    
    return Math.floor((same / sum) * 65536);
}

// 깨달음 : 문제 잘 읽자 !! 자꾸 틀려서 문제읽을때마다 놓친거 계속 발견함 ㅜ 다시 갈아엎기도했음