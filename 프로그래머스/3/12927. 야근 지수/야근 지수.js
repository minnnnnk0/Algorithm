function solution(n, works) {
    if (n >= works.reduce((acc,cur) => acc + cur) ) {
        return 0
    };
    
    works.sort((a,b) => b - a)
    
    while ( n != 0 ) {
        let maxNum = works[0]
        for ( let i = 0; i < works.length; i++) {
            if ( works[i] >= maxNum ) {
                n--
                works[i]--
            };
            
            if (!n ) {
                break
            };
        };
    };
    return works.reduce((acc,cur) => acc + cur**2 , 0 )
}