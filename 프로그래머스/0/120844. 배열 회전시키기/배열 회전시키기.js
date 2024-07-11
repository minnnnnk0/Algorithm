function solution(numbers, direction) {
    if ( direction === 'right' ) {
        const num = numbers.pop()
        numbers.unshift(num)
    } else {
        const num = numbers.shift()
        numbers.push(num)
    }
    return numbers;
}