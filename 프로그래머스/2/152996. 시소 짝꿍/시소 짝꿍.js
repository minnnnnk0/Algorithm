function solution(weights) {
    let ans = 0
    const store = {} // key-value
    const calc = [1, 3/2, 2, 4/3] // (1,1), (2,3), (2,4), (3,4)

    weights.sort((a, b)=> b - a).forEach((el) => {
        let temp
        calc.forEach((v) => {
            if ( temp = el * v, store[temp] ){ 
              ans += store[temp]
            }
        })
        if (!store[el]) store[el] = 1
        else store[el]++
    })
    
    return ans
}