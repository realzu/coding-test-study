function solution(s) {
    const regex = /1/g;
    let check = 0;
    let del = 0;    
    
    while (s !== '1') {
        const oldLen = s.length;
        s = s.match(regex).join('');
        const newLen = s.length;
        del += oldLen - newLen;
        check++;
        s= newLen.toString(2);
    }
    
    return [check, del];
}