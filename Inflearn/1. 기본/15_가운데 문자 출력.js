// ★substr, substring
function solution(str){
    let answer="";

    if (str.length%2 === 1){
        // answer = str.substr(Math.ceil((str.length/2)-1),1);
        answer = str.substr(((str.length+1)/2)-1,1);
    } else {
        answer = str.substr((str.length/2)-1, 2);
    }

    /*
    let answer;
    let mid=Math.floor(str.length/2)
    if (str.length%2==1) answer = s.substring(mid, mid+1);
    else answer = str.substring(mid-1, mid+1);
    */
    return answer;
}

console.log(solution("good"));