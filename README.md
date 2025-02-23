# typescript-sveltekit-cloudflare

npx supabase login

## cloudflare へのデプロイ方法

```
wrangler login
```

その後ブラウザで開発者ツールを開いたあとに cloudflare にログイン。
ログイン後、開発者ツールの Network から"callback?code"のリクエストを"Copy as cURL"とし、"wrangler login"したターミナルで実行する。

```
wrangler pages deploy
```

## ローカル環境での実行準備

```bash
cp wrangler.dev.toml wrangler.toml
```

wrangler.toml を編集し、`[d1_databases]`セクションの`database_id`を使用するデータベース ID を設定する。

## ローカル環境での実行

npm run build
wrangler pages dev --ip 0.0.0.0 .svelte-kit/cloudflare

## データベース migration

npx drizzle-kit generate

npx wrangler d1 execute svelte-app --file=./drizzle/migrations/0000_third_sleepwalker.sql
npx wrangler d1 execute svelte-app --file=./drizzle/migrations/0000_third_sleepwalker.sql --remote

npx wrangler d1 execute svelte-app --command "DROP TABLE subjects"
npx wrangler d1 execute svelte-app --command "DROP TABLE subject_details"
npx wrangler d1 execute svelte-app --command "SELECT id FROM subjects"
