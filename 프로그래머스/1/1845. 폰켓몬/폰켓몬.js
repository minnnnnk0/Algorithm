function solution(nums) {
    const tmp = []
    const maxCnt = nums.length / 2
    for (let i=0; i<nums.length; i++) {
        if ( tmp.includes(nums[i]) === false ) {
            tmp.push(nums[i])
        }
    }
    
    let answer = 0
    if (maxCnt < tmp.length ) {
        answer = maxCnt
    } else {
        answer = tmp.length
    }
    return answer;
}