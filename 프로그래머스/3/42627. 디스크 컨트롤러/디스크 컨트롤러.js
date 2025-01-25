function solution(jobs) {
    // 요청 시간 오름차순
    jobs.sort((a, b) => a[0] - b[0])

    const heap = new MinHeap()
    let curTime = 0
    let totalTime = 0
    let jobIdx = 0

    while (jobIdx < jobs.length || !heap.isEmpty()) {
        
        // 현재 시간 이전에 요청된 작업을 힙에 추가
        while (jobIdx < jobs.length && jobs[jobIdx][0] <= curTime) {
            heap.insert({ cnt: jobs[jobIdx][1], startTime: jobs[jobIdx][0] })
            jobIdx++
        }

        if (!heap.isEmpty()) {
            // 짧은 작업 시간을 가진 작업
            const job = heap.extractMin()
            curTime += job.cnt
            totalTime += curTime - job.startTime
        } else {
            // 처리할 작업이 없는 경우
            curTime = jobs[jobIdx][0]
        }
    }

    // 평균 시간
    return Math.floor(totalTime / jobs.length)
}


class MinHeap {
    constructor() {
        this.heap = []
    }
    insert(item) {
        this.heap.push(item)
        this.bubbleUp()
    }
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop()
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return min
    }
    bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index].cnt >= this.heap[parentIndex].cnt) break

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
        }
    }
    bubbleDown() {
        let index = 0
        while (index * 2 + 1 < this.heap.length) {
            let leftChild = index * 2 + 1
            let rightChild = index * 2 + 2
            let priorityChild = leftChild
            if (rightChild < this.heap.length && this.heap[rightChild].cnt < this.heap[leftChild].cnt) {
                priorityChild = rightChild
            }

            if (this.heap[index].cnt <= this.heap[priorityChild].cnt) break

            [this.heap[index], this.heap[priorityChild]] = [this.heap[priorityChild], this.heap[index]]
            index = priorityChild
        }
    }
    isEmpty() {
        return this.heap.length === 0
    }
}
