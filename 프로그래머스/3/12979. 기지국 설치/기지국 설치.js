const solution = (n, stations, w) => {
    
    let answer = 0
    let idx = 0
    let start = 1
    
    while(start <= n){
        
        // start가 stations[index] + w, stations[index] - w 내의 값 => 기지국 x
        if(start >= stations[idx] - w && start <= stations[idx] + w){
            start = stations[idx] + w
            idx++
        
        // 기지국 설치해야함 => start += 2 * w
        } else{
            start += 2 * w
            answer++
        }
        
        start++
    }
    return answer
}