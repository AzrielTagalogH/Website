let currentImageIndex = 0;
const images = document.querySelectorAll('.image-gallery img');

function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  
  currentImageIndex = Array.from(images).indexOf(img);
  lightboxImage.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function navigateLightbox(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = images[currentImageIndex].src;
}
