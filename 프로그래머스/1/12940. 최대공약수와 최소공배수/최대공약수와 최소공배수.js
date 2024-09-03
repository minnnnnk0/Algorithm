function solution(n, m) {
  const GCD = (a, b) => {
    if (b === 0) {
        return a
    }
    return GCD(b, a % b)
  }

  const LCM = (a, b) => {
    return (a * b) / GCD(a, b)
  }
  console.log(GCD(n,m), LCM(n,m))
  return [GCD(n, m), LCM(n, m)];
}