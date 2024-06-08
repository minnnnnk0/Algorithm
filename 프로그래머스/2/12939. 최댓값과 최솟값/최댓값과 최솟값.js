function solution(s) {
    var ans = s.split(' ');
    ans.sort((a, b) => b -a);
    // return ans
    return ans[ans.length -1] + " " + ans[0]
}