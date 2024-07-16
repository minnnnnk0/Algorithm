function solution(array, n) {
    var answer = 0;
    var arr = [];
    array = array.sort()
    for(let i=0; i<array.length; i++){
        arr[i] = Math.abs(Math.abs(array[i]) - n)
    }
        // 최소값, 인덱스
        minNum = Math.min(...arr)
        minIdx = arr.indexOf(minNum)

        answer = array[minIdx]
    return answer;
}