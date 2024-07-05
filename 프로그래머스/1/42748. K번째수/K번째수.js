function solution(array, commands) {
    let answer = [];
    
    for ( let i=0; i < commands.length; i++ ) {
        let sliceArr = array.slice(commands[i][0] - 1, commands[i][1]);
        
        sliceArr.sort((a, b) => a-b)
        answer.push(sliceArr[commands[i][2] - 1])
    }
    return answer;
}