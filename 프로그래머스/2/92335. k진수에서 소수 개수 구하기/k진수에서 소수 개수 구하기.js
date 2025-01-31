function isCheck(num) {
  if (num <= 1) {
    return false
  }
  for (let i=2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function solution(n, k) {
  let ans = 0
  let num = n.toString(k) // n -> k진수
  let nums = num.split("0")

  for (let i=0; i<nums.length; i++) {
      
    if (isCheck(Number(nums[i]))) {
      ans++ // 소수
    }
  }

  return ans
}