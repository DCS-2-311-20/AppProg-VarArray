// 応用プログラミング 課題2.2 (var02)
"use strict";

// 変数の宣言
const n = 3;
// ループ
for (var j = 1; j <= n; j++)
{
  for (var i = 1; i <= (n + 1); i++);
  {
    // 結果の出力
    console.log(`j=${j}, i=${i}`);
  }
}
