function solution(name, yearning, photo) {
    let answer = [];
    let table = {};
    
    name.forEach((name, idx) => {
        if (!table[name]) {
            table[name] = yearning[idx];
        }
    });
    // console.log(table)
    for (let pic of photo) {
        
        let cnt = 0;
        for (let name of pic) {
            if (table[name])
                cnt += table[name];
        }
        answer.push(cnt);
    }
    return answer;
}