function solution(skill, skill_trees) {
    var answer = 0;
    
    for (let tree of skill_trees) {
        let tmp = [...skill];

        for (let x of tree) {
            if (x === tmp[0]) tmp.shift();
            else if (tmp.indexOf(x) !== -1) break;
            
            if (tmp.length === 0) {
                answer++;
                break;
            }
            else if (tree.length-1 === tree.indexOf(x)) answer++;
        }
    }    
    
    return answer;
}