# READ ME FIRST
try to use Tesseract creating OCR api with Express, but it didn't work because i later realized that Tesseract can't use GPU for proccessing and thai language is not accurate.
- [Tesseract thai language](https://gist.github.com/dogterbox/7c0ed7387a388f5e13afd00f0cb8cd50)
- [Tesseract Window Installer](https://github.com/UB-Mannheim/tesseract/wiki)

## Installation and setup 
- Install Tesseract first to your computer or server.
- Clone this repository and navigate to project.
- create `.env` file and set env vairables
  - PORT : set apllication port
  - TESSERACT_PATH : child process will use tesseract path to use 
- run `npm install` to install dependencies
- npm run start to start server at `http://<host>:<port>`

## API Path
- Prefix `/api/v1`
- Method GET `/` : healt check
- Method POST `/ocr` : using ocr  

## Note
- Basic command
  - check version : `tesseract --version`
  - using ocr : `tesseract <input-image> <output-text>`
- Tessract path reference
  - window : `C:\\Program Files\\Tesseract-OCR\\tesseract.exe`
  - ubuntu : `/usr/bin/tesseract`
