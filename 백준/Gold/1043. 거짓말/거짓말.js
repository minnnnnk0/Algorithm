const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

  function func(input) {
    // N 사람 수 M 파티의 수
    const [N, M] = input[0].split(" ").map(Number);
    // TCnt 진실을 알고 있는 사람들의 수
    const [TCnt, ...members] = input[1].split(" ").map(Number);
    const party = input.slice(2).map((v) => v.split(" ").slice(1).map(Number));
    const tSet = new Set(members);
  
    for (let i = 0; i < N; i++) {
      party.forEach((p) => {
        // 파티에 진실을 아는 사람이 있는지 확인
        const truthInParty = p.some((h) => tSet.has(h));
        
        if (truthInParty) {
          p.forEach((h) => tSet.add(h));
        }
      });
    }
  
    let cnt = 0; // 진실을 모르는 사람이 있는 파티의 갯수
  
    party.forEach((p) => {
      const truthInParty = p.some((h) => tSet.has(h));
      if (!truthInParty) {
        cnt++;
      }
    });
  
    return cnt;
  }
  
  console.log(func(input));