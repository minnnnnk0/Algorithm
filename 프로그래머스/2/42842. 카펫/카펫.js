function solution(brown, yellow) {
  const carpet = brown + yellow;

  for (let height = 3; height <= Math.sqrt(carpet); height++) {
    const remainder = carpet % height;

    if (remainder !== 0) continue;

    const width = carpet / height;
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}