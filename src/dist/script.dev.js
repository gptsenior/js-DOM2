"use strict";

var gallery = document.getElementById('gallery');
var loadMoreButton = document.getElementById('load-more');
var clearGalleryButton = document.getElementById('clear-gallery');
var removeLastButton = document.getElementById('remove-last');
var reverseGalleryButton = document.getElementById('reverse-gallery');
var imageCount = 6;

function fetchImages(count) {
  var response, images;
  return regeneratorRuntime.async(function fetchImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://picsum.photos/v2/list?limit=".concat(count)));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          images = _context.sent;
          return _context.abrupt("return", images);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Помилка завантаження:', _context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function loadImages(count) {
  var images;
  return regeneratorRuntime.async(function loadImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchImages(count));

        case 2:
          images = _context2.sent;
          images.forEach(function (image) {
            var imgElement = document.createElement('img');
            imgElement.src = image.download_url;
            imgElement.alt = "Image by ".concat(image.author);
            gallery.appendChild(imgElement);
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

loadImages(imageCount);
loadMoreButton.addEventListener('click', function () {
  return loadImages(4);
});
clearGalleryButton.addEventListener('click', function () {
  gallery.innerHTML = '';
});
removeLastButton.addEventListener('click', function () {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
  }
});
reverseGalleryButton.addEventListener('click', function () {
  var images = Array.from(gallery.children);
  gallery.innerHTML = '';
  images.reverse().forEach(function (img) {
    return gallery.appendChild(img);
  });
});
//# sourceMappingURL=script.dev.js.map
