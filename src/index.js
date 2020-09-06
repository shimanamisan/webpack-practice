import _ from "lodash";

// jsの拡張子は省略可能というルールがある
// import { NAME, Nijou } from "./utilities";

// utilities.jsをモジュールとして暫定的に読み込むやり方
// import * as utilities from "./utilities";

// 名前を変更して機能させるやりかた
// import { NAME as NAME_HAMU } from "./utilities";
// console.log(NAME_HAMU);

import Tigger from "./utilities"; // utilities.jsファイルを読み込む
import style from "./style.css"; // jsファイルではないので拡張子までつける！

// console.log(style.toString())

// div要素を生成する関数を作成
function component() {
  const element = document.createElement("div");
  const array = ["Hello", "webpack", "!", Tigger.say()];
  element.innerHTML = _.join(array, " ");
  return element;
}

// bodyタグの子要素として、divタグを生成する関数を呼ぶ
document.body.appendChild(component());
// js側からクラスを追加する
document.body.classList.add('bg-body');
