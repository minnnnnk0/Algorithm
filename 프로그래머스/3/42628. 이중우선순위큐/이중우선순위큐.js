function solution(operations) {
    const heap = []
    const operat = operations.map(operation => operation.split(' '))
    
    operat.forEach(num => {
        // I = 삽입
        if(num[0] === 'I') {
            heap.push(Number(num[1]))
        }
        
        // D
        else {
            
            // 1 = max, -1 = min
            const findValue = (num[1] === '1' ? Math.max : Math.min)(...heap)
            const idx = heap.indexOf(findValue)
            heap.splice(idx, 1) // 제거
        }
    })
    
    return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0]
}