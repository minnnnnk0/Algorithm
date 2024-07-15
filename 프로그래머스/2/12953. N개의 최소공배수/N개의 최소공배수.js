function solution(arr) {
    const gcd = ( a, b ) => {
        if ( a % b === 0 ) return b
        return gcd(b, a % b)
    }
    const lcm = ( a, b ) => a * b / gcd( a, b )
   
    return arr.reduce(( a, c ) => lcm( a, c ), 1 )
}
