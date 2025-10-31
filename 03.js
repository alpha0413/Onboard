const N = Number(window.prompt("自然数を入力してください"));
// 方法1: 和の公式を用いる
let ans1 = (N * (N + 1)) / 2;
// 方法2: 繰り返しを用いる
let ans2 = 0;
for (let i = 1; i <= N; i += 1) {
  ans2 += i;
}
let output = ans1 == ans2 ? ans2 : "Failed to compute";
document.write(output);
