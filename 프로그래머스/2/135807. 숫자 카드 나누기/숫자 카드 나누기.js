function solution(arrayA, arrayB) {
    arrA = [...new Set(arrayA)].sort((a, b) => a - b)
    arrB = [...new Set(arrayB)].sort((a, b) => a - b)
    
    function divisor(action, target) {
        for (let i=action[0]; i>0; i--) {
            if (action.every((v) => v % i === 0) && target.every((v) => v % i !== 0)) {
                return i
            }
        }
        return 0
    }
    return Math.max(divisor(arrA, arrB), divisor(arrB, arrA))
}
