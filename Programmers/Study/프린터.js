// @

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 요소 추가
    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else { // 끝에 추가
            this.tail.next = newNode; // 값 추가
            this.tail = newNode; // 포인터 갱신
        }
    }

    // 요소 제거 (요소 = 현재 헤드)
    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    // 현재 헤드 값
    peek() {
        return this.head.value;
    }
}

function solution(priorities, location) {
    const queue = new Queue();

    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i]); // i(ndex) -> 추후 몇번째 location인지 확인 가능
    }

    priorities.sort((a, b) => b - a); // 중요도순 정렬 (#sort: 기존배열 변경)

    let count = 0;
    while (true) {
        const currentValue = queue.peek(); // [priorities, location]
        if (currentValue[0] < priorities[count]) { // 현재값 우선순위가 더 작을때
            queue.enqueue(queue.dequeue()); // 값 맨뒤로 보내기
        } else {
            const value = queue.dequeue();
            count++;
            if (location === value[1]) return count; // location 일치 여부
        }
    }

    return count; // 여기 올 일은 x    
}