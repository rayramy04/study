// JavaScriptの基本 - 動きをつける

// 1. HTML要素を取得する
const inputText = document.getElementById('inputText');      // 入力欄
const echoButton = document.getElementById('echoButton');    // ボタン
const result = document.getElementById('result');            // 結果表示エリア

// 2. ボタンがクリックされた時の処理
echoButton.addEventListener('click', function() {
    // 入力された文字を取得
    const text = inputText.value;
    
    // もし何か入力されていたら
    if (text) {
        // 結果を表示（3回繰り返す）
        result.textContent = text + ' ' + text + ' ' + text;
        
        // 入力欄を空にする
        inputText.value = '';
    } else {
        // 何も入力されていない場合
        result.textContent = '何か入力してください！';
    }
});

// 3. Enterキーでも動作するようにする
inputText.addEventListener('keypress', function(event) {
    // Enterキー（キーコード13）が押されたら
    if (event.keyCode === 13) {
        // ボタンをクリックしたことにする
        echoButton.click();
    }
});