Cosplayer Festival API
------------------------------------------

## 技術スタック
### BaaS 
AWS Amplify

|サービス||
|:--------|:---------|
|AWS AppSync|サーバレスなAPI|
|AWS Cognito|認証|
|AWS DynamoDB|No SQL|
|AWS Cloudformation|設定管理とオーケストレーション|

### 技術要素
- GraphQL

## TIPS
### `schema.graphql`内の`@model`ディレクティブ

```text
@modelディレクティブは、TodoオブジェクトをAmazon DynamoDBテーブルに格納し、それに対するCRUD操作を設定したいことをGraphQL Transformに伝えます。
プッシュコマンドを使用してバックエンドを作成または更新すると、CLIは自動的にAppSync APIと連携する新しいDynamoDBテーブルを作成および設定します。
@modelディレクティブは、schema.graphqlに注釈を付けることで使用できる複数のトランスフォーマのうちの1つです。
```
 - [Using GraphQL Transformers｜AWS Amplify](https://aws-amplify.github.io/docs/js/api#using-graphql-transformers) より

