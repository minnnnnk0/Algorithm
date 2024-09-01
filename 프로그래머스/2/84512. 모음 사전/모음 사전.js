function solution(word) {
  let w = ["A", "E", "I", "O", "U"]
  let dic = []

  const func = (cur, len) => {
    if (len > 5) {
        return
    }
    dic.push(cur)

    for (let i = 0; i < w.length; i++) {
      func(cur + w[i], len + 1);
    }
  };

  func("", 0);
  return dic.indexOf(word);
}