// 중복 순열
function getDuplicatePermutations(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v])
  
  return arr.flatMap((v) =>
    getDuplicatePermutations(arr, selectNum - 1).map((perm) => [v, ...perm])
  )
}

function solution(users, emoticons) {
  const answer = []
  const permutation = getDuplicatePermutations([10, 20, 30, 40], emoticons.length)

  permutation.forEach((permu) => {
    let service = 0
    const costs = Array(users.length).fill(0)

    permu.forEach((sale, idx_sale) => {
      users.forEach((user, idx_user) => {
        if (user[0] <= sale) 
          costs[idx_user] += emoticons[idx_sale] * ((100-sale) / 100)
      })
    })

    let sum = 0
    for (let i=0; i<costs.length; i++) {
      if (costs[i] < users[i][1]) {
        sum += costs[i]
          
      } else {
        service++
      }
    }
    answer.push([service, sum])
  })

  return answer.sort((a, b) => {
    if (a[0] > b[0]) return b[0] - a[0]
    else if (a[0] === b[0]) return b[1] - a[1]
  })[0]
}
