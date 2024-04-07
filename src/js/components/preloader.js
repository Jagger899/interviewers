export const preloaderLoad = function () {
    const preloader = document.querySelector(".preloader");
    const preloaderInfo = document.querySelector(".preloader__loader");
    const percentsBox = document.querySelector(".preloader__percents");
    const url = getCurrentURL();

    function getCurrentURL() {
        return window.location.href;
    }
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
        console.log(imagesCount);
        if (imagesCount === 0) {
            percents.innerText = "LIGHT";
            percentsBox.innerText = percentsBox.innerText.slice(0, 5);
        }

        loadImages++;
        // console.log(loadImages, parseInt((loadImages / imagesCount) * 100));
        percents.innerText = parseInt((loadImages / imagesCount) * 100);

        console.log("ParseInt:", parseInt((loadImages / imagesCount) * 100));
        if (parseInt((loadImages / imagesCount) * 100) === 100) {
            percents.innerText = "LIGHT";
            preloaderInfo.classList.add("preloader__loader_isload");
            // console.log(percentsBox.innerText, percentsBox.innerText.length);
            percentsBox.innerText = percentsBox.innerText.slice(0, 5);
        }
    }

    // loadingImages();

    for (let i = 0; i < imagesCount; i++) {
        let img = new Image();
        img.onload = loadingImages;
        img.src = media[i].src;
    }
};
