function solution(participant, completion) {
    let hashed = [];
    participant.forEach(i => {
        hashed[i] = hashed[i] ? hashed[i] + 1 : 1
    })
    // console.log(hashed)
    
    completion.forEach(i => {
        hashed[i] = hashed[i] - 1
    })
    // console.log(hashed)
    
    for ( const p in hashed ) {
        if ( hashed[p] >= 1 ) {
            return p
        }
    }
}