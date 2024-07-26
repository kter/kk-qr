<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
        }
        #qrcodeCanvas {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>QR Code Generator</h1>
        <input type="text" id="urlInput" placeholder="Enter URL" />
        <button id="generateButton">Generate QR Code</button>
        <canvas id="qrcodeCanvas"></canvas>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
    <script>
        const generateQRCode = async (url) => {
            try {
                let canvas = document.getElementById('qrcodeCanvas');
                await qrcode.toCanvas(canvas, url);

                const imgDim = { width: 30, height: 30 }; // Logo dimensions
                const context = canvas.getContext('2d');
                const imageObj = new Image();
                imageObj.src = './images/logo.png'; // Update the logo path if needed
                imageObj.onload = function () {
                    context.drawImage(imageObj,
                        canvas.width / 2 - imgDim.width / 2,
                        canvas.height / 2 - imgDim.height / 2,
                        imgDim.width, imgDim.height);
                };
            } catch (e) {
                console.error(e);
            }
        }

        document.getElementById('generateButton').addEventListener('click', () => {
            const url = document.getElementById('urlInput').value;
            if (url) {
                generateQRCode(url);
            } else {
                alert('Please enter a valid URL.');
            }
        });
    </script>
</body>
</html>
