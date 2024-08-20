function solution(begin, target, words) {
    let answer = 0;
    let visited = [];
    let queue = [[begin,answer]];

    // 일단 타켓에 단어가 없으면 0 반환
    if( !words.includes(target) ) {
        return 0
    } 
    
    while ( queue.length ) {
        let [cur, cnt] = queue.shift();

        if ( cur === target ) {
            return cnt;
        }

        words.forEach(word => {
            // 다른 알파벳의 갯수
            let diffCnt = 0; 
            
            // 방문한 단어는 넘어감
            if (visited.includes(word)) {
                return ;
            }

            for ( let i=0; i < word.length; i++ ) {
                if (word[i] !== cur[i]) {
                    diffCnt++
                }
            }
            
            // 알파벳이 한개만 다른 경우
            if ( diffCnt === 1 ) { 
                queue.push([word, ++cnt]); 
                visited.push(word);
            }
        });
    }
    return answer;
}