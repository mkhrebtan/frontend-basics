function onHobbyMusicClick() {
    const hobby = document.getElementById('music');
    hobby.style.backgroundColor = getRandomColor();
    hobby.style.color = getRandomColor();
}

function onFavouriteMoviesLabelClick() {
    const label = document.querySelector('.favourite-movies-label');
    label.style.backgroundColor = getRandomColor();
    label.style.color = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

let imageCount = 1;
let initialWidth = document.getElementById('city-image-1').width;
let initialHeight = document.getElementById('city-image-1').height;

function addImage() {
    const img = document.createElement('img');
    const existingImg = document.getElementById('city-image-1');
    img.src = existingImg.src;
    img.alt = existingImg.alt;
    img.id = `city-image-${++imageCount}`;
    img.style.width = initialWidth + 'px';
    img.style.height = initialHeight + 'px';

    const cityLink = document.getElementById('city-link-1');
    const cityLinkClone = cityLink.cloneNode(false);
    cityLinkClone.id = `city-link-${imageCount}`;
    cityLinkClone.appendChild(img);

    const buttonsDiv = document.querySelector('.image-buttons');
    buttonsDiv.insertAdjacentElement('beforebegin', cityLinkClone);
}

function enlargeImage() {
    const lastImage = document.getElementById(`city-image-${imageCount}`);
    if (lastImage) {
        lastImage.style.width = (lastImage.width * 1.2) + 'px';
        lastImage.style.height = (lastImage.height * 1.2) + 'px';
    }
}

function reduceImage() {
    const lastImage = document.getElementById(`city-image-${imageCount}`);
    if (lastImage) {
        lastImage.style.width = (lastImage.width * 0.8) + 'px';
        lastImage.style.height = (lastImage.height * 0.8) + 'px';
    }
}

function removeImage() {
    if (imageCount > 1) {
        const lastImageLink = document.getElementById(`city-link-${imageCount}`);
        lastImageLink.remove();
        imageCount--;
    }
}