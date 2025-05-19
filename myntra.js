  const galleryWrap = document.getElementById("galleryWrap");
  const images = galleryWrap.querySelectorAll("img");
  let currentIndex = 0;

  function updateSlide() {
    galleryWrap.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
  }

  setInterval(nextSlide, 3000);
