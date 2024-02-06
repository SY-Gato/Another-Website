document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("captcha-canvas");
    var ctx = canvas.getContext('2d');
    var captchaText = generateCaptchaText(6);
    const captchaStatus = document.getElementById("captcha-status");
    var inputText = document.getElementById("captcha-input");
    drawCaptcha(captchaText);
    
    function verifyCaptcha() {
        var inputText = document.getElementById("captcha-input").value; //.toLowerCase();
        if (inputText === captchaText) {//captchaText.toLowerCase()) {
            captchaStatus.textContent = "Captcha Correct!";
            captchaStatus.style.color = 'green';
        } else if (inputText.length < 6) {
            captchaStatus.textContent = "Enter all characters!";
            captchaStatus.style.color = 'red';
        } else {
            captchaStatus.textContent = "Captcha Incorrect";
            captchaStatus.style.color = 'red';
        }

        setTimeout(()=>{
            captchaStatus.textContent = "Status : IDLE";
            captchaStatus.style.color = 'black';
        }, 2500);
        inputText.value = "";
        captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);
    }

    document.getElementById("check-captcha").addEventListener("click", verifyCaptcha);

    document.getElementById("reload-captcha").addEventListener("click", function () {
        captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);
        inputText.value = "";
        captchaStatus.textContext = "Status : IDLE";
        captchaStatus.style.color = 'black';
    })

    function generateCaptchaText(length) {
        var result = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charsLen = chars.length;
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charsLen));
        }
        return result;
    }

    function drawCaptcha(text) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#f3f3f3";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        addNoise(ctx);
        ctx.fillStyle = "#06108c";
        ctx.font = '24px Arial';

        const textWidth = ctx.measureText(text).width;
        const startX = (canvas.width - textWidth) / 3;

        for (let i = 0; i < text.length; i++) {
            ctx.save();
            ctx.translate(startX + i * 20, 30);
            ctx.rotate((Math.random() - 0.5) * 0.4);
            ctx.fillText(text[i], 0, 0);
            ctx.restore();
        }
    }


    function addNoise(ctx) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        for (let i = 0; i < pixels.length; i += 2) {
            let color = (Math.random() > 0.5) ? 255 : 0;
            pixels[i] = pixels[i + 1] = pixels[i + 2] = color;
        }
        ctx.putImageData(imageData, 0, 0);
    }
});