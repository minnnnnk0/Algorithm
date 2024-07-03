function solution(n, k) {
    let sheep = n;
    let soda = k;

    if ( n >= 10 ) {
        soda = soda - Math.floor(sheep / 10);
        return ( sheep * 12000) + ( soda * 2000 )
    } else {
        return (sheep * 12000) + (soda * 2000)
    }
}