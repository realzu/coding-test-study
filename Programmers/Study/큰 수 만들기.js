// @

function solution(number, k) {
    const stack = [];
    let count = 0; // 제거횟수

    for (const item of number) {
        while (count < k && stack[stack.length - 1] < item) {
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }

    // 처음부터 크면 k 다 안뺐을수도 있으니
    while (count < k) {
        stack.pop();
        count += 1;
    }

    return stack.join();
}