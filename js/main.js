// Parallax;

// window.onload = function () {
//   const parallax = document.querySelector(".parallax");

//   if (parallax) {
//     const content = document.querySelector(".parallax__container");
//     const clouds = document.querySelector(".images-parallax__clouds");
//     const mountains = document.querySelector(".images-parallax__mountains");
//     const human = document.querySelector(".images-parallax__human");

//     let thresholdSets = [];
//     for (let i = 0; i <= 1.0; i += 0.005) {
//       thresholdSets.push(i);
//     }

//     const callback = function (entries, observer) {
//       const scrollTopProcent =
//         (window.pageYOffset / parallax.offsetHeight) * 100;
//       setParallaxItemStyle(scrollTopProcent);
//     };
//     const observer = new IntersectionObserver(callback, {
//       threshold: thresholdSets,
//     });

//     observer.observe(document.querySelector(".content"));

//     function setParallaxItemStyle(scrollTopProcent) {
//       content.style.cssText = `transform: translate(0%, -${
//         scrollTopProcent / 9
//       }%);`;
//       mountains.parentElement.style.cssText = `transform: translate(0%, -${
//         scrollTopProcent / 6
//       }%);`;
//       human.parentElement.style.cssText = `transform: translate(0%, -${
//         scrollTopProcent / 3
//       }%);`;
//     }
//   }
// };

window.addEventListener("DOMContentLoaded", () => {

  const parallax = document.querySelector(".parallax-general");

  if (parallax) {
    const content = document.querySelector(".parallax__container");
    const moon = document.querySelector(".images-parallax__moon");
    const cloudDown = document.querySelector(".images-parallax__cloudDown");
    const cloudLeft = document.querySelector(".images-parallax__cloudLeft");

    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }

    const callback = function (entries, observer) {
      const scrollTopProcent =
        (window.pageYOffset / parallax.offsetHeight) * 100;
      setParallaxItemStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector(".content-general"));

    function setParallaxItemStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 9
      }%);`;
      cloudLeft.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 6
      }%);`;
      cloudDown.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 3
      }%);`;
    }
  }



  let imagesParallaxItem1 = document.querySelector(".images-parallax__item1");
  let imagesParallaxItem2 = document.querySelector(".images-parallax__item2");
  let imagesParallaxItem3 = document.querySelector(".images-parallax__item3");
  let imagesParallaxMoon = document.querySelector(".images-parallax__moon");
  let imagesParallaxCloud1 = document.querySelector(".images-parallax__cloudDown");
  let imagesParallaxCloud2 = document.querySelector(".images-parallax__cloudLeft");
  let parallaxBody = document.querySelector(".parallax__body");
  let hparallax = parallax.offsetHeight;
  parallax.style.height = hparallax + "px";
  imagesParallaxItem1.style.height = hparallax + "px";
  imagesParallaxItem2.style.height = hparallax + "px";
  imagesParallaxItem3.style.height = hparallax + "px";
  imagesParallaxMoon.style.height = hparallax + "px";
  imagesParallaxCloud1.style.height = hparallax + "px";
  imagesParallaxCloud2.style.height = hparallax + "px";
  parallaxBody.style.height = hparallax + "px";
  console.log(hparallax);
  console.log(imagesParallaxItem2);


  window.addEventListener('resize', function(event) {
    let imagesParallaxItem1 = document.querySelector(".images-parallax__item1");
    let imagesParallaxItem2 = document.querySelector(".images-parallax__item2");
    let imagesParallaxItem3 = document.querySelector(".images-parallax__item3");
    let imagesParallaxMoon = document.querySelector(".images-parallax__moon");
    let imagesParallaxCloud1 = document.querySelector(".images-parallax__cloudDown");
    let imagesParallaxCloud2 = document.querySelector(".images-parallax__cloudLeft");
    let parallaxBody = document.querySelector(".parallax__body");
    let hparallax = parallax.offsetHeight;
    parallax.style.height = hparallax + "px";
    imagesParallaxItem1.style.height = hparallax + "px";
    imagesParallaxItem2.style.height = hparallax + "px";
    imagesParallaxItem3.style.height = hparallax + "px";
    imagesParallaxMoon.style.height = hparallax + "px";
    imagesParallaxCloud1.style.height = hparallax + "px";
    imagesParallaxCloud2.style.height = hparallax + "px";
    parallaxBody.style.height = hparallax + "px";
}, true);


});
