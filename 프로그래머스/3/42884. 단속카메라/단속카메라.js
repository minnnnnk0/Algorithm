// 마지막으로 설치한 위치보다 다음 시작점이 더 뒤에 있을 때 -> 새로운 카메라를 추가ㅏ 설치 
function solution(routes) {
    let cnt = 0;
    
    routes.sort((a, b) => a[1] - b[1]);

    let temp = -30000;

    for (let [start, end] of routes) {
        
        // let start = route[0];
        // let end = route[1];
        
        if (start > temp) {
            cnt++;
            temp = end;
        }
    }

    return cnt; 
}