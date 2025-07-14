const express = require("express");
const tesseractUpload = require("../utils/tesseract-multer");
const { tesseractRead } = require('../utils/tesseract-exc');

const router = express.Router();

router.post("/tesseract/ocr", tesseractUpload.single("image"), async (req, res) => {
    try {
        console.log(`4`);
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        console.log(`5`);


        const text = await tesseractRead(req.file.buffer, 'eng+tha');
        console.log(`7`);

        res.status(200).send({
            message: "OCR successful",
            data: text,
            time: new Date().toISOString(),
        });
    } catch (err) {
        console.error("Error during OCR processing:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
