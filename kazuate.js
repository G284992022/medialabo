let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let x1 = document.querySelector('p#result');
let span = document.querySelector('span#kaisu');
let answer = document.querySelector('span#answer');
let b1 = document.querySelector('button#answer');
b1.addEventListener('click', kaisuup);
let yoso;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
function kaisuup(){
  kaisu = kaisu + 1;
  let i = document.querySelector('input[name="yoso"]');
	yoso = Number(i.value);
  hantei();
}
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let p = document.querySelector('p');
  span.textContent = kaisu;
  answer.textContent = yoso;
  p.textContent=kaisu + '回目の予想:' + yoso;
  if(kaisu>=4){
    x1.textContent="答えは" + kotae + "でした.すでにゲームは終了しています.";
  }
  else if(kotae!==yoso){
    if(kaisu===3){
        x1.textContent="まちがい.残念でした答えは" + kotae + "です.";
    }else {
        if(kotae>yoso){
            x1.textContent="まちがい．答えはもっと大きいですよ";
        }else if(kotae<yoso){
            x1.textContent="まちがい．答えはもっと少ないですよ";
        }
    }
  }else if(kotae===yoso){
    if(kaisu>3){
        x1.textContent="答えは" +  kotae +  "でした．すでにゲームは終わっています";
    }else{
      x1.textContent="正解です．おめでとう!";
    }
  }
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
