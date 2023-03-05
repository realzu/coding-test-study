// @ 최대 힙 구현

class MaxHeap {
    constructor() {
        this.heap = [null]; // 0번째 인덱스는 null
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
        
        const returnValue = this.heap[1]; // 맨 상단의 루트
        this.heap[1] = this.heap.pop(); // 맨 하단의 루트
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while (this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                const temp  =this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            } else {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2; // 왼쪽부터
            rightIndex = currentIndex * 2 + 1;
        }
        
        return returnValue;
    }
}

function solution(no, works) {
    // 모든 작업의 합보다 no가 크면 배상비용 낼 필요x
    if (works.reduce((a, b) => a + b) <= no) {
        return 0;
    }

    // max heap 구성
    const heap = new MaxHeap();
    for (const work of work) {
        heap.push(work);
    }

    // no만큼 돌면서 가장큰값 빼서 처리후 다시 push
    for (let i=0; i<no; i++) {
        heap.push(heap.pop() - 1);
    }

    // 남은 요소에 제곱한값들의 합 구한후 반환
    return heap.heap.reduce((a, b) => a + b * b); // Maxheap.heap
}