export function Nijou(num) {
  return num ** 2;
}

export const NAME = "しまなみさん";

// defaultでエクスポートされる
// どうやって読み込むのか？？
export default class Lion {
  static say() {
    return "がお～～";
  }
}
