"use strict";

// const bmi = 27;
const bmi = window.prompt("BMIの値を入力してください");
// console.log(`あなたのBMIは${bmi}です`);
console.log("あなたのBMIは" + bmi + "です");

// // 条件分岐
// if (bmi > 25) {
//   console.log("肥満です");
// }

// const msg = bmi > 25 ? "肥満です" : "肥満ではありません";
// console.log(msg);

if (bmi > 25) {
  console.log("肥満です");
} else if (bmi < 18.5) {
  console.log("低体重です");
} else {
  console.log("適正体重です");
}

const p_element = document.querySelector("p");
console.log(p_element.textContent);
