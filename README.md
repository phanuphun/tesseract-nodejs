# OCR API - God Eye OCR Service

A RESTful API service for Optical Character Recognition (OCR) using Tesseract OCR engine. This API supports both English and Thai language text extraction from images.

## Features

- 🔍 **OCR Processing**: Extract text from images using Tesseract OCR
- 🌐 **Multi-language Support**: English and Thai language recognition
- 📤 **File Upload**: Support for JPG, JPEG, and PNG image formats
- 🛡️ **Security**: Helmet.js for security headers
- 📊 **Logging**: Morgan logger for request monitoring
- 🔒 **CORS**: Cross-Origin Resource Sharing enabled
- ⚡ **Performance**: Memory-based file processing (no disk storage)

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Tesseract OCR** - OCR engine
- **Multer** - File upload middleware
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- Tesseract OCR installed on your system
- npm or yarn package manager

## Docker Information

> **Important Note**: The included `Dockerfile` is **NOT** for this OCR API project. It's a separate Ubuntu-based container specifically designed for testing Tesseract OCR functionality on Ubuntu systems. This Dockerfile includes Tesseract OCR with English and Thai language packs for testing purposes only.

If you want to containerize this Node.js OCR API, you would need to create a different Dockerfile specifically for the Node.js application.


### Installing Tesseract OCR

#### Windows
```bash
# Using Chocolatey
choco install tesseract

# Or download from: https://github.com/UB-Mannheim/tesseract/wiki
```

#### macOS
```bash
# Using Homebrew
brew install tesseract
```

#### Ubuntu/Debian
```bash
sudo apt-get update
sudo apt-get install tesseract-ocr
sudo apt-get install tesseract-ocr-eng tesseract-ocr-tha
```

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

## Usage Examples

### Using cURL

```bash
# Extract text from an image
curl -X POST \
  http://localhost:3000/api/v1/tesseract/ocr \
  -H 'Content-Type: multipart/form-data' \
  -F 'image=@/path/to/your/image.jpg'
```

### Using JavaScript (Fetch API)

```javascript
const formData = new FormData();
formData.append('image', imageFile);

fetch('http://localhost:3000/api/v1/tesseract/ocr', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### Using Python (requests)

```python
import requests

url = 'http://localhost:3000/api/v1/tesseract/ocr'
files = {'image': open('image.jpg', 'rb')}

response = requests.post(url, files=files)
print(response.json())
```

## Project Structure

```
ocr-api/
├── app.js                 # Main application entry point
├── package.json           # Project dependencies and scripts
├── Dockerfile            # Ubuntu container for Tesseract testing (not for this project)
├── config/
│   └── common.config.js  # Configuration files
├── controllers/
│   └── tesseract.js      # OCR route handlers
├── utils/
│   ├── tesseract-exc.js  # Tesseract execution utilities
│   └── tesseract-multer.js # File upload configuration
└── README.md             # Project documentation
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

## Error Handling

The API includes comprehensive error handling for:
- Invalid file formats
- Missing files
- File size limits
- Tesseract processing errors
- Server errors

## Security Features

- **Helmet.js**: Sets various HTTP headers for security
- **File validation**: Only allows specific image formats
- **File size limits**: Maximum 5MB per upload
- **Memory storage**: Files are processed in memory without saving to disk

