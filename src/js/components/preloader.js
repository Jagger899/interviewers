export const preloaderLoad = function () {
    const body = document.querySelector("body");
    const preloader = document.querySelector(".preloader");
    const preloaderInfo = document.querySelector(".preloader__loader");
    const percentsBox = document.querySelector(".preloader__percents");
    const scrollController = {
        disabledScroll() {
            body.classList.add("body_lock");
        },

        enableScroll() {},
    };

    scrollController.disabledScroll();
    window.addEventListener("load", () => {
        preloader.classList.add("preloader_hidden");
        body.classList.remove("body_lock");
        setTimeout(() => {
            preloader.remove();
        }, 2000);
    });

    const media = document.querySelectorAll("img");
    let loadImages = 0;
    let imagesCount = media.length;

    console.log(imagesCount);
    const percents = document.getElementById("percents");

    if (imagesCount === 0) {
        percents.innerText = "LIGHT";
        percentsBox.innerText = percentsBox.innerText.slice(0, 5);
        preloaderInfo.classList.add("preloader__loader_isload");
        
    }

    function loadingImages() {
        console.log(imagesCount);
        // if (imagesCount === 0) {
        //     percents.innerText = "LIGHT";
        //     percentsBox.innerText = percentsBox.innerText.slice(0, 5);
        //     console.log("yes");
        // }

        loadImages++;
        percents.innerText = parseInt((loadImages / imagesCount) * 100);

        // console.log("ParseInt:", parseInt((loadImages / imagesCount) * 100));

        if (parseInt((loadImages / imagesCount) * 100) === 100) {
            percents.innerText = "LIGHT";
            preloaderInfo.classList.add("preloader__loader_isload");
            percentsBox.innerText = percentsBox.innerText.slice(0, 5);
        }

        console.log("yes");
    }

    for (let i = 0; i < imagesCount; i++) {
        let img = new Image();
        img.onload = loadingImages;
        img.src = media[i].src;
    }
};
