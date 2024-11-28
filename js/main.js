(function () {

  // Бургер меню

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1200) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const errorMessage = document.querySelector('#errorMessage');

    // Открытие и закрытие модальных окон
    document.addEventListener('click', (e) => {
      const target = e.target;

      // Обработка открытия модальных окон
      if (target.matches('#openModalBtn, #openModalBtn-in')) {
        e.preventDefault();
        const modalId = target.id === 'openModalBtn' ? '#modal1' : '#modal2';
        document.querySelector(modalId).classList.add('body--opened-modal-up');
      }

      // Обработка закрытия модальных окон
      if (target.closest('.modal__close-btn') || target.classList.contains('modal__in')) {
        e.preventDefault();
        target.closest('.modal__in').classList.remove('body--opened-modal-up');
      }
    });

    // Проверка совпадения паролей
    const checkPasswords = () => {
      errorMessage.style.display = passwordInputs[0].value !== passwordInputs[1].value ? 'block' : 'none';
    };

    passwordInputs.forEach(input => input.addEventListener('input', checkPasswords));

    // Функция показа/скрытия пароля
    const togglePassword = (input) => {
      input.type = input.type === 'password' ? 'text' : 'password';
    };

    // Присоединение обработчиков событий для кнопок
    document.querySelectorAll('.password-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const input = toggle.closest('.input-container').querySelector('input[type="password"], input[type="text"]');
        togglePassword(input);
      });
    });
  });

  // Свайпер

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.38,
    spaceBetween: 30,
    navigation: {
      nextEl: '.content-gallery__next',
      prevEl: '.content-gallery__prev',
    },
    breakpoints: {
      801: {
        slidesPerView: 2.38,
        spaceBetween: 30,
      },
      450: { // Настройки для ширины от 800px и ниже
        slidesPerView: 2,
        spaceBetween: 25,
      },
      350: { // Настройки для ширины от 800px и ниже
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });

  new Swiper('.testimonials__slider', {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 2.36,


    pagination: {
      el: '.testimonials__pagination',
      clickable: true,
    },
    breakpoints: {
      900: {
        slidesPerView: 2.36,
        spaceBetween: 30,
      },

      601: {
        slidesPerView: 1.9,
        spaceBetween: 30,
      },

      350: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    }
  });


  document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordions__item');

    accordions.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordions__control');
        const content = self.querySelector('.accordions__content');

        accordions.forEach(otherEl => {
          if (otherEl !== self && otherEl.classList.contains('open')) {
            const otherControl = otherEl.querySelector('.accordions__control');
            const otherContent = otherEl.querySelector('.accordions__content');

            otherEl.classList.remove('open');
            otherControl.setAttribute('aria-expanded', false);
            otherContent.setAttribute('aria-hidden', true);
            otherContent.style.maxHeight = null;
          }
        });

        self.classList.toggle('open');

        if (self.classList.contains('open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;
        }
      });
    });
  });
})();






