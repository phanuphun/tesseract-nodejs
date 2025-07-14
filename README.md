# OCR API - God Eye OCR Service

A RESTful API service for Optical Character Recognition (OCR) using Tesseract OCR engine. This API supports both English and Thai language text extraction from images.

## Docker Information

> **Important Note**: The included `Dockerfile` is **NOT** for this OCR API project. It's a separate Ubuntu-based container specifically designed for testing Tesseract OCR functionality on Ubuntu systems. This Dockerfile includes Tesseract OCR with English and Thai language packs for testing purposes only.

If you want to containerize this Node.js OCR API, you would need to create a different Dockerfile specifically for the Node.js application.

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ocr-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   TESSERACT_PATH=tesseract
   ```
   
   > **Note**: Set `TESSERACT_PATH` to the full path of your Tesseract executable if it's not in your system PATH.

4. **Start the server**
   ```bash
   # Development mode with auto-reload
   npm start
   
   # Production mode
   node app.js
   ```

## API Endpoints

### Health Check

**GET** `/`

Returns the API status and version information.

**Response:**
```json
{
  "api": "God Eye OCR API",
  "version": "1.0.0",
  "status": "up",
  "time": "2025-07-14T10:30:00.000Z"
}
```

### OCR Processing

**POST** `/api/v1/tesseract/ocr`

Extract text from an uploaded image file.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data with `image` field containing the image file

**Supported file formats:**
- JPG/JPEG
- PNG
- Maximum file size: 5MB

**Response:**
```json
{
  "message": "OCR successful",
  "data": "Extracted text from the image...",
  "time": "2025-07-14T10:30:00.000Z"
}
```

**Error Response:**
```json
{
  "error": "Error message description"
}
```

## Configuration

The application uses environment variables for configuration:

- `PORT`: Server port (default: 3000)
- `TESSERACT_PATH`: Path to Tesseract executable (default: "tesseract")

## Language Support

The API currently supports:
- **English** (`eng`)
- **Thai** (`tha`)

The OCR processing uses both languages simultaneously (`eng+tha`) for better text recognition accuracy.

