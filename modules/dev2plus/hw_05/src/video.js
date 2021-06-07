let imageCapture;
let cam;

function onGetUserMediaButtonClick() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((mediaStream) => {
      document.querySelector("#camera").srcObject = mediaStream;
      const track = mediaStream.getVideoTracks()[0];
      cam = track;
      imageCapture = new ImageCapture(track);
    })
    .catch((error) => ChromeSamples.log(error));
}

function templateCreate() {
  const parentContainer = document.querySelector(".capturedPhotos");
  const takedPhotoContainer = document.createElement("div");
  const takedPhotoImg = document.createElement("canvas");
  const closeBtn = document.createElement("button");
  const saveBtn = document.createElement("button");
  takedPhotoContainer.setAttribute("class", "takedPhotoContainer");
  takedPhotoImg.setAttribute("class", "takedPhotoImg");
  saveBtn.setAttribute("class", "save");
  saveBtn.textContent = "Save";
  closeBtn.setAttribute("class", "close");
  closeBtn.textContent = "X";
  closeBtn.addEventListener("click", function (ev) {
    console.log(this.parentNode.remove());
    //ChromeSamples.log(ev);
  });
  saveBtn.addEventListener("click", function (ev) {
    console.log(this);
    //ChromeSamples.log(ev);
  });

  takedPhotoContainer.appendChild(takedPhotoImg);
  takedPhotoContainer.appendChild(closeBtn);
  takedPhotoContainer.appendChild(saveBtn);
  parentContainer.appendChild(takedPhotoContainer);
}

function stopCamera() {
  cam.stop();
  document.querySelector("#getUserMediaButton").disabled = false;
  document.querySelector("#takePhotoButton").disabled = true;
  document.querySelector("#stopCamera").disabled = true;
}

function onTakePhotoButtonClick() {
  imageCapture
    .takePhoto()
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      templateCreate();
      const takedPhotoImges = document.querySelectorAll(".takedPhotoImg");
      const img = takedPhotoImges[takedPhotoImges.length - 1];
      drawCanvas(img, imageBitmap);
    })
    .catch((error) => ChromeSamples.log(error));
}

/* Utils */

function drawCanvas(canvas, img) {
  canvas.width = getComputedStyle(canvas).width.split("px")[0];
  canvas.height = getComputedStyle(canvas).height.split("px")[0];
  let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  canvas
    .getContext("2d")
    .drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      x,
      y,
      img.width * ratio,
      img.height * ratio
    );
}

document.querySelector("video").addEventListener("play", function () {
  document.querySelector("#getUserMediaButton").disabled = true;
  document.querySelector("#takePhotoButton").disabled = false;
  document.querySelector("#stopCamera").disabled = false;
});

/*const input = document.querySelector('input[type="range"]');

var imageCapture;

navigator.mediaDevices.getUserMedia({video: true})
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
})
.then(photoCapabilities => {
  const settings = imageCapture.track.getSettings();

  input.min = photoCapabilities.imageWidth.min;
  input.max = photoCapabilities.imageWidth.max;
  input.step = photoCapabilities.imageWidth.step;

  return imageCapture.getPhotoSettings();
})
.then(photoSettings => {
  input.value = photoSettings.imageWidth;
})
.catch(error => ChromeSamples.log('Argh!', error.name || error));

function onTakePhotoButtonClick() {
  imageCapture.takePhoto({imageWidth: input.value})
  .then(blob => createImageBitmap(blob))
  .then(imageBitmap => {
    drawCanvas(imageBitmap);
    ChromeSamples.log(`Photo size is ${imageBitmap.width}x${imageBitmap.height}`);
  })
  .catch(error => ChromeSamples.log(error));
}

document.querySelector('video').addEventListener('play', function() {
  document.querySelector('#takePhotoButton').disabled = false;
});

/* Utils */
/*
function drawCanvas(img) {
  const canvas = document.querySelector('canvas');
  canvas.width = getComputedStyle(canvas).width.split('px')[0];
  canvas.height = getComputedStyle(canvas).height.split('px')[0];
  let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
      x, y, img.width * ratio, img.height * ratio);
}*/
