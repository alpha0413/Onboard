const API =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&forecast_days=1";
const getWeatherData = async () => {
  try {
    const response = await fetch(API); // dataを取得する
    const data = await response.json(); // JSON形式のデータをJSの(連想)配列に変換する
    return data;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

getWeatherData()
  .then((data) => {
    document.getElementById(
      // id がtitleであるHTML要素に次の内容を書き込む
      "title"
    ).textContent = `${data.daily.time[0]
      .replace("-", "/") // -を/に置き換える
      .replace("-", "/")}の東京の気温`;
    document.getElementById(
      // idがmin_tempであるHTML要素に次の内容を書き込む
      "min_temp"
    ).textContent = `最低気温: ${data.daily.temperature_2m_min[0]}度`;
    document.getElementById(
      // id がmax_tempであるHTML要素に次の内容を書き込む
      "max_temp"
    ).textContent = `最高気温: ${data.daily.temperature_2m_max[0]}度`;
  })
  .catch((error) => {
    //rejectの場合
    console.log("Error:", error);
  });
