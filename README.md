# typescript-sveltekit-cloudflare


npx supabase login


## cloudflareへのデプロイ方法

```
wrangler login
```

その後ブラウザで開発者ツールを開いたあとにcloudflareにログイン。
ログイン後、開発者ツールのNetworkから"callback?code"のリクエストを"Copy as cURL"とし、"wrangler login"したターミナルで実行する。

```
wrangler pages deploy
```