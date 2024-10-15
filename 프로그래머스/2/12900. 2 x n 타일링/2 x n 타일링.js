function solution(n) {
    
    // n = (n-1) + (n-2)
    let arr = [1, 1]
    
    for (let i=2; i<= n; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1000000007
    }
    // console.log(arr)
    return arr[n]
}