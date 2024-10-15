function solution(babbling) {
    let answer = 0;
    const speak = ["aya", "ye", "woo", "ma"]
    
    for (let i=0; i<babbling.length; i++) {
        let babble = babbling[i]
        
        // 연속으로 발음한 경우
        for (let j=0; j<speak.length; j++) {
            if (babble.includes(speak[j].repeat(2))) {
                break;
            }
            
            // can speak 는 제거
            babble = babble.split(speak[j]).join(" ")
        }
        
        // can speak 
        if (babble.split(" ").join("").length === 0) {
            answer++
        }
        
    }
    return answer;
}