// ★

// 틀 - 앞의 2값이 아니라, 앞/뒤 값 하나씩 비교했어야
function solution(people, limit) {
    var answer = 0;
    let i = 0;
    people.sort((a, b) => a - b);
    
    while(i < people.length){
        if (people[i] + people[i+1] <= limit){
            answer++;
            i += 2;
        }
        else if (people[i] + people[people.length - 1] <= limit) {
            answer++;
            people.pop();
            i++;
        }
        else return answer + (people.length - i);
    }
    
    return answer;
}

// 타 정답 풀이
// 투 포인터 (lt, rt)
function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b);

    let rt = people.length - 1;
    let lt = 0;

    while (lt < rt){
        if (people[lt] + people[rt] > limit) rt--; // 범위x
        else { // 범위o
            rt--;
            lt++;
        }

        answer++;
    }
    
    if (lt === rt) answer++;

    return answer;
}