# 公開範囲と出典

## 公開するもの

技術的な数値、接続記録、検査範囲、候補部品のメーカーMPN、未確定事項、製造依頼の一般的な教訓を独自の日本語で説明しています。候補BOMは原票のコピーではなく、公開用に再構成した表です。

既に許可されたCG・基板配置動画・カメラ周回による全体外観動画は維持しています。挿入経路の干渉が見つかった組み立て動画は撤回したままです。

## 公開しないもの

会話の全文、通信の原文や返信案、取引を特定する番号、個人の連絡先・署名・本人確認資料・写真、アカウント情報、取引原票、内部の保存場所や作業識別情報を含めません。個別の数量・金額・取引日時も転載しません。

元PDF、原BOMの表計算ファイル、manifest、作業ログ、素材フォルダーは一括コピーしません。設計CAD、Gerber、設計ソース、派生3D制作ファイルなどのバイナリも、再配布権を確認していないため今回の追加公開には含めません。非公開の別リポジトリの公開範囲は変更しません。

公開リポジトリへのリンク、メーカーMPN、元作者の公開クレジットは技術資料の識別と出典表示として残します。第三者の設計やメディアに一括の再利用ライセンスを付与するものではありません。

## 出典の扱い

元基板の公開シルク表記は **imo Lab / garchiving.com** です。原文や画像を無断で転載せず、必要な背景は公開ページへのリンクで参照します。

この技術記録の再構築・CAD検査結果は作業時に確認された内容を整理したものであり、下記の公開ページが個々の再構築結果を検証したわけではありません。一般仕様、候補選定、作者の版差を確認するための資料です。メーカーの現行データシート、最終承認仕様、実物確認を優先してください。

| 区分 | 公開参考資料 |
|---|---|
| 作者の全体説明 | [Self-balancing cubeまとめ](https://garchiving.com/summary-of-self-balancing-cube/) |
| 作者の組立 | [組立1](https://garchiving.com/assembly-self-balancing-cubev2/)、[組立2](https://garchiving.com/assembly2-self-balancing-cubev2/) |
| モーターと制御 | [Stepper試行](https://garchiving.com/try-stepping-motor-wih-pico/)、[Encoder](https://garchiving.com/how-to-use-encoder-with-pico/)、[BLDC](https://garchiving.com/how-to-try-bldc-motor-with-raspberry-pi-pico/) |
| ADC | [Pico ADC](https://garchiving.com/how-to-use-pico-adc/) |
| Pico製品 | [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) |
| Pico W系列の補助資料 | [Pico W datasheet](https://datasheets.raspberrypi.com/picow/pico-w-datasheet.pdf)（Pico / W / WHの違いを区別し、全型式へ一律に適用しない） |
| 製造依頼 | [PCBWay SMT guide](https://www.pcbway.com/smt_ordering_guide.html)、[Terms](https://www.pcbway.com/terms_service.html) |
| 候補MPN | [BOMのメーカー・販売店リンク一覧](bom.md#候補確認用リンク) |

公開テキストと追加ファイルの範囲を確認して公開します。ただし公開資料を読んだこと、データ整合性検査が通ったこと、部品の定格が記載されていることだけで、実機の製造・組み立て・動作の成立を保証しません。

[目次へ戻る](README.md)
