// Ждем загрузку контента
window.onload = function () {
  const parallax = document.querySelector('.about');

  if (parallax) {
    const content = document.querySelector('.hero-about__container');
    const heroImg = document.querySelector('.parallax__img');

    // Коэффициенты
    const forHeroImg = 40;

    // Скорость анимации
    const speed = 0.05;

    // Объявление переменных
    let positionX = 0;
    let positionY = 0;
    let coordXprocent = 0;
    let coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      // Передаем стили
      heroImg.style.cssText = `transform: translate(${
        positionX / forHeroImg
      }%,${positionY / forHeroImg}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }

    setMouseParallaxStyle();

    parallax.addEventListener('mousemove', function (e) {
      // Получение ширины и высоты блока
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Ноль по середине
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // Получаем проценты
      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });

    // Parallax при скролле

    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }
    const callback = function (entries, observer) {
      const scrollTopProcent =
        (window.pageYOffset / parallax.offsetHeight) * 100;
      setParallaxItemsStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector('.content'));

    function setParallaxItemsStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(0%,-${
        scrollTopProcent / 9
      }%);`;
    }
  }
};
