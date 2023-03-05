// @ Trie

function makeTrie(words) {
    const root = {};
    for (const word of words) { // Trie 구성 시작
        let current = root;
        for (const letter of word) { // 글자 하나씩 추출
            if (!current[letter]) current[letter] = [0, {}]; // [count, node]
            current[letter][0] = 1 + (current[letter][0] || 0); // 지나갈때마다 +1
            current = current[letter][1];
        }

    }
    return root;
}

function solution(words) {
    let answer = 0;
    const trie = makeTrie(words);

    for (const word of words) {
        let count = 0;
        let current = trie;
        for (const [index, letter] of [...word].entries()) {
            count++;
            if (current[letter][0] <= 1) break;
            current = current[letter][1]; // 다음노드로 이동
        }
        answer += count;
    }

    return answer;
}