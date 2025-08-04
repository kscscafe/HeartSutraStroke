# Heart Sutra Stroke Order Viewer（般若心経 書き順ビューア）
This project provides a **stroke order animation viewer** for the 278 kanji characters used in the Heart Sutra (般若心経).  
本プロジェクトは、般若心経に登場する278文字の漢字の書き順をアニメーションで表示するWebページです。

 [View the demo here](https://officees.co.jp/stroke/)

---
## Overview / 概要
This tool was created in response to requests from users of our digital shakyo (sutra copying) app, especially those outside Japan, who wanted to learn the correct stroke order for the kanji used in the Heart Sutra.

このツールは、海外の写経アプリ利用者から「漢字の書き順が分からない」という声を受けて開発されました。  
278文字という比較的少ない文字数で構成される般若心経（Heart Sutra）を対象に、視覚的に書き順を理解できる仕組みを提供しています。

---
## Features / 特徴
- Tap on any kanji character from the Heart Sutra to view its stroke order
- SVG-based animation using [KanjiVG](https://kanjivg.tagaini.net/)
- Lightweight implementation using only HTML, CSS, and JavaScript
- Mobile-friendly layout (prototype level)

---
## Limitations / 制限事項
- KanjiVG focuses on Japanese kanji, and does not cover all characters used in Buddhist sutras or in other countries (e.g., China, Taiwan, Korea).
- Some variant or classical forms found in other sutras are not available.
- This is a prototype, and improvements are planned in future updates.

---
## How to Use / 使い方
Clone or download this repository and open `index.html` in any modern browser:

---
## Folder Structure / フォルダ構成
HeartSutraStroke/
├── index.html           # Main page with kanji list and stroke display
├── style.css            # Basic layout and styling
├── script.js            # Click handler and SVG switching logic
└── README.md            # This file

---
## License / ライセンス
This project is licensed under the MIT License.
Stroke order data is provided by KanjiVG, also under the MIT License.

---
## Acknowledgements / 謝辞
KanjiVG – Stroke order SVG data


