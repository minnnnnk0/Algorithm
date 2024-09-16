function solution(cacheSize, cities) {
    const city = cities.map(a => a.toLowerCase()); 
    
    let q = [];
    let time = 0;
    
    for (let i=0; i<city.length; i++) {
        if (!q.includes(city[i])) {
            time += 5;
            q.push(city[i]);
            // 캐시사이즈를 넘으면 앞 삭제
            if (q.length > cacheSize) {
                q.shift();
            }
        } else { 
            // 인덱스 찾아서 제거
            // 맨 뒤에 삽입
            time++;
            let idx = q.indexOf(city[i]); 
            q.splice(idx, 1);
            q.push(city[i]);
        }
    }
    return time;
}