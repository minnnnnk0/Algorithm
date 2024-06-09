function solution(s) {
    str = s.toLowerCase();
    var answer = str.split(" ").map(str => {
        let arr = str.split("");
        // 조건 추가...?
        if(arr[0] != null) {
            arr[0] = arr[0].toUpperCase();
        return arr.join("");   
        }
    }).join(" ");
    return answer; 
}