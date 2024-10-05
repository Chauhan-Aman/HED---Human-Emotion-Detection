function initImageUpload(box) {
    let uploadField = box.querySelector('.image-upload');
    let preview = box.querySelector('.js--image-preview');
    let emotionDisplay = document.createElement('div');
    emotionDisplay.className = 'emotion-display';
    box.appendChild(emotionDisplay);

    uploadField.addEventListener('change', getFile);

    function getFile(e) {
        let file = e.currentTarget.files[0];
        checkType(file);
    }

    function previewImage(file) {
        let reader = new FileReader();
        reader.onload = function () {
            preview.style.backgroundImage = 'url(' + reader.result + ')';
            preview.className += ' js--no-default';
        }
        reader.readAsDataURL(file);
    }

    function checkType(file) {
        let imageType = /image.*/;
        if (!file.type.match(imageType)) {
            alert('File is not an image');
        } else if (!file) {
            alert('No image chosen');
        } else {
            previewImage(file);
            uploadImage(file);
        }
    }

    function uploadImage(file) {
        let formData = new FormData();
        formData.append('im', file);

        fetch('https://hed-human-emotion-detection.onrender.com/detect/', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            emotionDisplay.textContent = `Detected Emotion: ${data.emotion}`;
        })
        .catch(error => {
            console.error('Error:', error);
            emotionDisplay.textContent = 'Error detecting emotion';
        });
    }
}

// Initialize for all boxes
var boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    initDropEffect(box);
    initImageUpload(box);
}

/// drop-effect
function initDropEffect(box) {
    let area, drop, areaWidth, areaHeight, maxDistance, dropWidth, dropHeight, x, y;

    area = box.querySelector('.js--image-preview');
    area.addEventListener('click', fireRipple);

    function fireRipple(e) {
        area = e.currentTarget;
        if (!drop) {
            drop = document.createElement('span');
            drop.className = 'drop';
            this.appendChild(drop);
        }
        drop.className = 'drop';

        areaWidth = getComputedStyle(this, null).getPropertyValue("width");
        areaHeight = getComputedStyle(this, null).getPropertyValue("height");
        maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));

        drop.style.width = maxDistance + 'px';
        drop.style.height = maxDistance + 'px';

        dropWidth = getComputedStyle(this, null).getPropertyValue("width");
        dropHeight = getComputedStyle(this, null).getPropertyValue("height");

        x = e.pageX - this.offsetLeft - (parseInt(dropWidth, 10) / 2);
        y = e.pageY - this.offsetTop - (parseInt(dropHeight, 10) / 2) - 30;

        drop.style.top = y + 'px';
        drop.style.left = x + 'px';
        drop.className += ' animate';
        e.stopPropagation();
    }
}
