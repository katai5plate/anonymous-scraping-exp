# anonymous-scraping-exp

# Usage

1. `tor` を実行
2. ログに `Opened Socks listener on 127.0.0.1:****` が出てくるのでポートをメモる
3. `config.json` の `TOR_SOCKS_LISTENER_PORT` にポート名を書く
4. `npm start`
5. ブラウザが自動で確認くんにアクセスして、通常 IP と匿名 IP それぞれでアクセスしたときのスクリーンショットを出力してくれる
