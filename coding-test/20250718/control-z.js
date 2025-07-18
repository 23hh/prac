// https://school.programmers.co.kr/learn/courses/30/lessons/120853


// 文字列を空白で分割し、トークンごとに処理する
// 数値はスタックに追加
// "Z" が出たら直前の数値を取り消す（pop）
// 残った数値を合計して返す

function solution(s) {
  const stack = [];
  const tokens = s.split(" ");

  for (let token of tokens) {
    if (token === "Z") {
      stack.pop();
    } else {
      stack.push(Number(token));
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}
