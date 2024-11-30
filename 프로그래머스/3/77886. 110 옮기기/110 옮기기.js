function solution(s) {
    
    const getNum = (stack) => {
        if (stack.length < 3) return false

        if ( stack[stack.length - 3] === "1" && stack[stack.length - 2] === "1" && stack[stack.length - 1] === "0"
        ) return true   
        return false
    }

    const sliceStack = (str) => {
        
        const stack = []
        let cnt = 0

        for (let i=0; i<str.length; i++) {
            stack.push(str[i])

            if (!getNum(stack)) continue
            stack.pop()
            stack.pop()
            stack.pop()
            cnt++
        }

        return [stack.join(''), cnt]
    }

    const change = (str) => {
        
        const target = "110"
        const [rest, count] = sliceStack(str)
        const lastZeroIndex = rest.lastIndexOf("0")

        if (!rest.length) return target.repeat(count)
        if (lastZeroIndex === -1) return target.repeat(count) + rest

        return (
            rest.slice(0, lastZeroIndex + 1) +
            target.repeat(count) +
            rest.slice(lastZeroIndex + 1, rest.length)
        )
    }

    return s.map(change)
}