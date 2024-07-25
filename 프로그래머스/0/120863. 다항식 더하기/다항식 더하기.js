function solution(polynomial) {
    const array = polynomial.split(' + ')
    // console.log(array)
    
    let Xnum = 0;
    let num = 0;
    
    for ( let i=0; i < array.length; i++) {
        if (array[i].includes('x')) {
            if ( array[i] === "x") {
                Xnum += 1
            } else {
                Xnum += Number(array[i].substring(0, array[i].length -1))
            }
        } else {
            num += Number(array[i])
        }
    }
    // console.log(Xnum, num)
    let result = '';
    
    if ( Xnum === 0 ) {
        result = `${num}`
    } else {
        
        if ( num === 0 ) {
            
            if ( Xnum === 1 ) {
                result = 'x'
            } else {
                result = Xnum + 'x'
            }
        } else {
            
            if ( Xnum === 1 ) {
                result = 'x + ' + num
            } else {
                result = Xnum + 'x + ' + num
            }
        }
    }

    return result;
}