// 応用プログラミング 課題2.2 (array01)
"use strict";

// 空の配列の宣言
const a = [];

// 20回のループ
for (let i = 0; i < 20; i++) {
  // 100未満の乱数を生成して， xに代入
  let x = Math.floor( Math.random() * 100 );
  // 配列aの末尾にxを追加
  a.push(x);
}

// 配列aのコンソールへの表示
console.log(a.toString());
// 配列aのWebページへの表示(id="msg"要素の置換)
document.getElementById("msg").innerHTML = "a=[" + a.toString()+"]";
