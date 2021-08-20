import readline from "readline";
import fs from "fs";
import Elseif2withKanji from "./elseif2withKanji/elseif2withKanji";
//readstreamを作成
const rs = fs.createReadStream(
  "/Users/mochi/workspace/simple-typescript-starter/even.txt",
);
//writestreamを作成
const ws = fs.createWriteStream("./output.js");

const rl = readline.createInterface({
  //読み込みたいストリームの設定
  input: rs,
  //書き出したいストリームの設定
  output: ws,
});

rl.on("line", lineString => {
  //wsに一行ずつ書き込む
  ws.write("    " + Elseif2withKanji(lineString) + "\n");
});
rl.on("close", () => {
  console.log("END!");
});
