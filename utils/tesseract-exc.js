const { spawn } = require('child_process');
require('dotenv').config();

const tessPath = process.env.TESSERACT_PATH;

function tesseractRead(imgBuffer, lang='eng') {
    return new Promise((resolve, reject) => {
        console.log(`6`);
        let ocrText = "";
        let ocrErr = "";


        const tess = spawn(tessPath, [
            "stdin", // input file: stdin
            "stdout", // output file: stdout
            "-l", lang, // example: ภาษาอังกฤษ ถ้าจะใช้ไทยเปลี่ยนเป็น "tha"
        ]);

        tess.stdin.write(imgBuffer);
        tess.stdin.end();

        tess.stdout.on('data', chunk => ocrText += chunk.toString());
        tess.stderr.on('data', chunk => ocrErr += chunk.toString());


        tess.on('close', code => {
            if (code === 0) {
                resolve(ocrText.trim());
            } else {
                reject(new Error(`Tesseract exited with code ${code}: ${ocrErr.trim()}`));
            }
        });
    })
}

module.exports = { tesseractRead };