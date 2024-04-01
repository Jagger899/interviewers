export const preloaderLoad = function () {
  const preloader = document.querySelector(".preloader");
  const preloaderInfo = document.querySelector(".preloader__loader");
    window.addEventListener("load", () => {
        
        preloader.classList.add("preloader_hidden");

        setTimeout(() => {
            preloader.remove();
        }, 900);
    });

  const media = document.querySelectorAll("img");
  let loadImages = 0;
  let imagesCount = media.length;
  const percents = document.getElementById("percents");

  function loadingImages() {
    loadImages++;
    console.log(loadImages, parseInt((loadImages / imagesCount) * 100));
    percents.innerText = parseInt((loadImages / imagesCount) * 100);

    console.log('ParseInt:', parseInt((loadImages / imagesCount) * 100))
    if (parseInt((loadImages / imagesCount) * 100) === 100) {
      percents.innerText = 'LIGHT';
      preloaderInfo.classList.add('preloader__loader_isload');
    }
  }

  // loadingImages();

  for (let i = 0; i < imagesCount; i++) {
    let img = new Image();
    img.onload = loadingImages;
    img.src = media[i].src;
  }
};
