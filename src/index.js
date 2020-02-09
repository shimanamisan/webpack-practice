'use strict';

// div要素を生成する関数を作成
function component(){
  const element = document.createElement('div');
  const array = ['Hello', 'webpack'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

// bodyタグの子要素として、divタグを生成する関数を呼ぶ
document.body.appendChild(component());