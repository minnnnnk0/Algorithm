function solution(a) {
    
    // 가장 작은 두 풍선 찾아야함
    // -> 얘네는 생존 가능임
    // 근데 양쪽 끝에 최소 숫자가 있어야함  ...????/?????
    
    // 투포인터? 느낌 양쪽에서 범위 좁히면서 최소 숫자 갱신 > 젤 작은 두개 남기면 댐
    
    let len = a.length
    
    // 양쪽 작은 숫자
    let left = new Array(len)
    let right = new Array(len)
     
    left[0] = a[0]
    right[len-1] = a[len-1]
    
    // left
    for(let i=1; i<len; i++) {
        left[i] = Math.min(left[i-1], a[i])
    }
    // right
    for(let i=len-2; i>=0; i--) {
        right[i] = Math.min(right[i+1], a[i])
    }
    
    // console.log(left)
    // console.log(right)
    
    const answer = new Set([...left, ...right]).size
    
    console.log(answer)
    
    return answer;
}