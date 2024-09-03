function solution(array) {
    const idx = Math.floor((array.length) / 2)
    const sorted = array.sort((a, b) => a - b);

    return sorted[idx];
}