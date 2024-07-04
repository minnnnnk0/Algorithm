function solution(genres, plays) {
    let answer = [];
    
    // 장르별 총 재생횟수의 합
    let totalPlayCnt = {};
    for ( let i=0; i < genres.length; i++ ) {
        totalPlayCnt[genres[i]] = totalPlayCnt[genres[i]] ? totalPlayCnt[genres[i]] + plays[i] : plays[i]
    }
    // console.log(totalPlayCnt)
    // totalPlayCnt를 k,v 로 저장하여 내림차순으로 정리
    let totalPlayArr = Object.entries(totalPlayCnt).sort((a, b) => b[1] - a[1]);
    // console.log(totalPlayArr)
    
    // 장르, 고유번호, 재생횟수
    let musicInfo = genres.map((gen, idx) => ({
        genre: gen,
            index: idx,
                playCnt: plays[idx]
    }))
    // console.log(musicInfo)
    
    // 장르별로 고유번호와 재생횟수 내림차순 저장
    totalPlayArr.forEach((gen, idx) => {
        let tmp = [];
        for ( let i=0; i < musicInfo.length; i++ ) {
            if ( gen[0] === musicInfo[i].genre ) {
                tmp.push(musicInfo[i])
            }
        }
        tmp.sort((a, b) => b.playCnt - a.playCnt)
        // console.log(tmp)
        
        tmp.forEach((t, idx) => {
            if ( idx < 2) {
                answer.push(t.index)
            }
        })
    })
    // console.log(answer)
    return answer
}