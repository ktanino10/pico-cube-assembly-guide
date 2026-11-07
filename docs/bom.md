# 見積候補BOM Rev02

**製造確定版ではありません。FIT / THERMAL HOLDを継続しています。** 以下は見積のために正確なメーカーMPNを埋めた候補表であり、採用・価格・在庫・実調達の承認は未確認です。メーカー最終承認BOM／仕様が優先されます。

## 公開用に再構成した候補表

数量は**基板1枚あたりの設計上の部品単位**です。個別取引の発注数量ではありません。

| Ref | メーカー | MPN | 候補仕様 | 数量/基板 | 保留 |
|---|---|---|---|---:|---|
| U1 | Raspberry Pi | SC0919 | Pico WH、ヘッダー付き | 1 | 型式・実装条件の最終確認 |
| XU1A / XU1B | Harwin | M20-7822042 | 20 pinメスソケット | 2 | FIT HOLD |
| R1 | YAGEO | MFR-12FRF52-1K5 | 1.5 kΩ、1%、1/6 W | 1 | 温度・過渡・実装条件 |
| R2 | YAGEO | MFR-12FRF52-470R | 470 Ω、1%、1/6 W | 1 | 温度・過渡・実装条件 |
| C1 | KEMET | C315C104K5R5TA | 0.1 µF、50 V、X7R | 1 | 外形・実装確認 |
| C2 | Panasonic | EEUFC1J330 | 33 µF、63 V | 1 | 寸法・ピッチ確認 |
| U2 | STMicroelectronics | L7805CV | 7805、TO-220 | 1 | FIT / THERMAL HOLD |
| J2 / J3 / J4 | Harwin | M20-7820842 | 8 pinメスソケット | 3 | FIT HOLD |
| J5 | Harwin | M20-7820842 | 8 pinメスソケット | 1 | FIT HOLD |
| J1-CONN | AMASS | XT30U-M | コネクター単体 | 1 | ハーネス仕様未確定 |

10行・9種類のMPN・13部品単位です。ハーネス線材は含みません。J1-CONNは基板上の穴J1と同じ意味の実装部品ではなく、外部接続用コネクターの候補です。

見積用の作業資料ではPCBWayサンプルの9列を保持し、全行のMPNを入力しました。この公開表は原Excelのコピーではなく、技術項目のみを再構成したものです。

## 候補更新の意味

抵抗は、品番未指定の1/4 W案から小型の1/6 W品へ変更した候補です。抵抗値は変更していません。12.6 V・公称抵抗値でR1約61 mW／R2約19 mWという計算は、温度、故障、過渡に対する適合保証ではありません。

C2は25 V案から63 V品への候補更新で、容量33 µFは保持しています。耐圧だけでなく、形状と取り付け可能性を確認する必要があります。

## FIT HOLD：ソケットと穴

Harwinの候補について、推奨仕上がり穴は**1.02 ± 0.05 mm**です。Pico基板側のU1穴0.95 mm、J2〜J5穴1.105 mmはいずれもその範囲外です。

20 pin候補には高さ8.5 mm、テール長3 mm、相手ピン0.64 mm角、3 A/contactという条件があります。メーカー公差の確認または別MPNの評価が必要です。候補を合わせるために基板穴を無断で変更しません。

モーターのピーク／ストール電流が不明なため、3 A/contactという部品定格はシステム適合の証明にはなりません。

## FIT / THERMAL HOLD：7805

L7805CVのTO-220図面における最大リード幅・厚さの組み合わせは、基板穴1.016 mmを超える可能性があります。図面間の差も含め、現行ロット／パッケージ図で確認する必要があります。

損失は[電気条件](electrical.md)のとおりです。定格1.5 Aを、この基板・放熱条件で連続して使用できる電流と解釈しません。負荷、放熱、コンデンサー、逆流保護が未確定のまま保留を解除しません。

## その他の寸法・調達確認

C2候補は直径6.3 × 高さ11.2 mm、リードピッチ2.5 mmで、基板ピッチ2.54 mmとの適合を確認します。XT30U-Mはコネクター単体で、線材・端末処理・絶縁・引張対策を含むハーネス完成品ではありません。

## 候補確認用リンク

メーカー資料を優先し、販売店情報は補助資料とします。各リンクは現在の在庫や採用承認を示しません。

| 部品 | 参考資料 |
|---|---|
| Pico | [Raspberry Pi製品ページ](https://www.raspberrypi.com/products/raspberry-pi-pico/) |
| 20 pinソケット | [Harwin M20-7822042](https://www.harwin.com/products/M20-7822042) |
| 8 pinソケット | [Harwin M20-7820842](https://www.harwin.com/products/M20-7820842) |
| R1 | [DigiKey / YAGEO 1.5 kΩ](https://www.digikey.co.th/en/products/detail/yageo/MFR-12FRF52-1K5/9133266) |
| R2 | [DigiKey / YAGEO 470 Ω](https://www.digikey.co.th/en/products/detail/yageo/MFR-12FRF52-470R/9133562) |
| C1 | [DigiKey / KEMET](https://www.digikey.com/en/products/detail/kemet/C315C104K5R5TA/12701330) |
| C2 | [Panasonic](https://industrial.panasonic.com/ww/products/pt/aluminum-cap-lead/models/EEUFC1J330) |
| U2 | [DigiKey / STMicroelectronics](https://www.digikey.com/en/products/detail/stmicroelectronics/L7805CV/585964) |
| 電池接続候補の補助資料 | [LCSC公開商品ページ](https://www.lcsc.com/product-detail/C99101.html)（実際の型式・極性・寸法を別途照合） |

[目次へ戻る](README.md)
