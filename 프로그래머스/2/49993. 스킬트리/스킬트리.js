function solution(skill, skill_trees) {
    let answer = 0
    
    for(let tree of skill_trees) {
        let tmp = skill.split('')
        let len = 0
        
        for(let i of tree) {
            
            // 포함 확인
            if(tmp.includes(i)) {
                
                // 순서 확인
                if(i !== tmp.shift()) {
                    break
                }
                else len++
            }
            else len++
        }
        if(len === tree.length) {
            answer += 1
        }
    }
    return answer
}