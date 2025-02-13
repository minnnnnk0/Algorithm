function getCombinations(arr, selectNum) {
    if (selectNum === 1) return arr.map((v) => [v])
    
    return arr.flatMap((v, i) =>
      getCombinations(arr.slice(i + 1), selectNum - 1).map((comb) => [v, ...comb])
    )
}

function solution(orders, course) {
    const menuCnt = new Map()

    orders.forEach((order) => {
        const sortedMenu = order.split('').sort()
        
        course.forEach((length) => {
            if (length <= sortedMenu.length) {
                getCombinations(sortedMenu, length).forEach((tmp) => {
                    const menuKey = tmp.join('')
                    menuCnt.set(menuKey, (menuCnt.get(menuKey) || 0) + 1)
                })
            }
        })
    })

    let result = []

    course.forEach((length) => {
        let maxCnt = 2
        let candidates = []
        
        menuCnt.forEach((cnt, menu) => {
            if (menu.length === length) {
                if (cnt > maxCnt) {
                    maxCnt = cnt
                    candidates = [menu]
                    
                } else if (cnt === maxCnt) {
                    candidates.push(menu)
                }
            }
        })
        result.push(...candidates)
    })
    return result.sort()
}

