const fibo = (N) => {
  let f = [0, 1];
  for (let i = 2; i <= N; ++i) {
    // fの最後(n番目)にf[n-1] + f[n-2] を追加する
    f[i] = f[i - 1] + f[i - 2];
  }
  return f; // 第0項から第N項までが順に格納された配列
};
