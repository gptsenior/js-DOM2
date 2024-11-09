const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('load-more');
const clearGalleryButton = document.getElementById('clear-gallery');
const removeLastButton = document.getElementById('remove-last');
const reverseGalleryButton = document.getElementById('reverse-gallery');

let imageCount = 6;

async function fetchImages(count) {
try {
const response = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
const images = await response.json();
return images;
} catch (error) {
console.error('Помилка завантаження:', error);
}
}

async function loadImages(count) {
const images = await fetchImages(count);
images.forEach(image => {
const imgElement = document.createElement('img');
imgElement.src = image.download_url;
imgElement.alt = `Image by ${image.author}`;
gallery.appendChild(imgElement);
});
}

loadImages(imageCount);

loadMoreButton.addEventListener('click', () => loadImages(4));

clearGalleryButton.addEventListener('click', () => {
gallery.innerHTML = '';
});

removeLastButton.addEventListener('click', () => {
if (gallery.lastChild) {
gallery.removeChild(gallery.lastChild);
}
});

reverseGalleryButton.addEventListener('click', () => {
const images = Array.from(gallery.children);
gallery.innerHTML = '';
images.reverse().forEach(img => gallery.appendChild(img));
});
