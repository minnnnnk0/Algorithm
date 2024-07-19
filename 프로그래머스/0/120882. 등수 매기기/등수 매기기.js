function solution(score) {
    const avg = score.map(([eng, math]) => ( eng + math ) / 2 )
    const avg_sort = [...avg].sort((a,b) => b -a)
    
    console.log(avg_sort)
     return avg.map((i ) => avg_sort.indexOf(i) + 1)
}