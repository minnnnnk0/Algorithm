const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// K개의 랜선 N개의 목표 랜선 개수
const [K, N] = input[0].split(' ').map(Number); 
const lans = input.slice(1, K + 1).map(Number);  // 랜선 길이

// console.log(lans)

function binarySearch(lans, N) {
    let left = 1;  
    // 얘가 최대 길이
    let right = Math.max(...lans);  

    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0; // 짤라

        for (let lan of lans) {
            count += Math.floor(lan / mid);
        }

        if (count >= N) {
            result = mid;  
            left = mid + 1;

        } else {
            right = mid - 1; 
        }
    }
    return result;
}

const result = binarySearch(lans, N);
console.log(result);

