import './sass/main.scss';
import canvasDots from './heroCanvas.js';
import canvasDotsBg from './bgCanvas.js';
import { doc } from 'prettier';

const translations = {
  en: {
    htmlLang: 'en',
    'meta.title': 'Dmitri Dimov | Full Stack Web Developer',
    'meta.ogTitle': 'Dmitri Dimov | Full Stack Web Developer',
    'meta.ogDescription':
      'Portfolio of Dmitri Dimov — full stack web developer. Projects, skills, and contact.',
    'hero.greeting': "Hello, I'm <span>Dmitri</span>.",
    'hero.subtitle': "I'm a full stack web developer.",
    'hero.cta': 'View my work',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'sections.about': 'About',
    'sections.projects': 'Projects',
    'sections.contact': 'Contact',
    'about.blurb':
      'Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer, I like to spend my time hiking, cooking, and watching movies.',
    'projects.ichgram.title': 'Ichgram<br />Social Media App',
    'projects.ichgram.description':
      'Full-stack Instagram-like application: posts, stories, likes, comments, follows, real-time chat. Built with React, Vite, Redux, Node.js, Express.js, TypeScript, MongoDB (Mongoose), WebSockets and JWT auth.',
    'projects.bioprinter.title': 'G-Code Terminal & <br />Virtual Keyboards',
    'projects.bioprinter.description':
      'G-code sending terminal and touch-optimized QWERTY + numeric keyboards for a 3D bioprinter application. Project work was under NDA, so no links or repository are available.',
    'projects.vocabular.title': 'German Learning<br />PWA',
    'projects.vocabular.description':
      'My small pet project: A German vocabulary Progressive Web App (PWA) with offline-friendly learning, word categories and learning statistics. Built with JavaScript PWA features and local data storage.',
    'projects.petshop.title': 'PetShop<br />Online Pet Store',
    'projects.petshop.description':
      'Full-stack pet store. Built with React, Redux Toolkit, React Router, Material UI, CSS Modules, Axios, Swiper and REST API.',
    'projects.meetup.title': '// MeetUp<br />event discovery platform',
    'projects.meetup.description':
      'HTML5, CSS3, Vanilla JavaScript (ES6+) Leaflet',
    'projects.hotsauce.title':
      "HOTSAUCE<br />conference — Hotjar's event.",
    'projects.hotsauce.description':
      'Responsive landing page with HTML, SCSS and JavaScript.',
    'projects.liveApp': 'Live app',
    'projects.liveAppLower': 'live app',
    'projects.learnMore': 'learn more',
    'contact.text':
      "Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.",
    'contact.placeholder.name': 'Name',
    'contact.placeholder.email': 'Email',
    'contact.placeholder.message': 'Message',
    'contact.error.name': 'Please enter your name.',
    'contact.error.email': 'Please enter a valid email.',
    'contact.error.message': 'Please enter a message.',
    'contact.submit': 'Submit',
  },
  ru: {
    htmlLang: 'ru',
    'meta.title': 'Дмитрий Димов | Full Stack веб-разработчик',
    'meta.ogTitle': 'Дмитрий Димов | Full Stack веб-разработчик',
    'meta.ogDescription':
      'Портфолио Дмитрия Димова — full stack веб-разработчика. Проекты, навыки и контакты.',
    'hero.greeting': 'Привет, я <span>Дмитрий</span>.',
    'hero.subtitle': 'Я full stack веб-разработчик.',
    'hero.cta': 'Смотреть работы',
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'nav.languages': 'Языки',
    'sections.about': 'Обо мне',
    'sections.projects': 'Проекты',
    'sections.contact': 'Контакты',
    'about.blurb':
      'Я полностью придерживаюсь философии непрерывного обучения и работаю как full stack разработчик с глубокой страстью к JavaScript, React и веб-разработке в целом. Уникальное сочетание креативности, логики и технологий, а также постоянное появление нового для изучения, подпитывает мой интерес к этой сфере. Когда я не за компьютером, люблю ходить в походы, готовить и смотреть фильмы.',
    'projects.ichgram.title': 'Ichgram<br />Социальная сеть',
    'projects.ichgram.description':
      'Full-stack приложение в стиле Instagram: посты, сторис, лайки, комментарии, подписки, чат в реальном времени. Стек: React, Vite, Redux, Node.js, Express.js, TypeScript, MongoDB (Mongoose), WebSockets и JWT-аутентификация.',
    'projects.bioprinter.title': 'G-Code терминал и <br />виртуальные клавиатуры',
    'projects.bioprinter.description':
      'Терминал отправки G-code и сенсорно-оптимизированные QWERTY + цифровая клавиатуры для приложения 3D-биопринтера. Работа выполнена в рамках NDA, поэтому ссылки и репозиторий недоступны.',
    'projects.vocabular.title': 'Немецкая лексика<br />PWA',
    'projects.vocabular.description':
      'Мой маленький pet-проект: PWA для изучения немецкой лексики: офлайн-обучение, категории слов и статистика прогресса. Сделано на базе JavaScript с PWA-функциями и локальным хранением данных.',
    'projects.petshop.title': 'PetShop<br />Интернет-магазин товаров для животных',
    'projects.petshop.description':
      'Full-stack интернет-магазин. Стек: React, Redux Toolkit, React Router, Material UI, CSS Modules, Axios, Swiper и REST API.',
    'projects.meetup.title': '// MeetUp<br />платформа поиска мероприятий',
    'projects.meetup.description':
      'HTML5, CSS3, Vanilla JavaScript (ES6+), Leaflet',
    'projects.hotsauce.title':
      'HOTSAUCE<br />конференция — мероприятие Hotjar.',
    'projects.hotsauce.description':
      'Адаптивный лендинг на HTML, SCSS и JavaScript.',
    'projects.liveApp': 'Открыть сайт',
    'projects.liveAppLower': 'открыть сайт',
    'projects.learnMore': 'подробнее',
    'contact.text':
      'Есть вопрос или хотите поработать вместе? Оставьте свои данные, и я свяжусь с вами как можно скорее.',
    'contact.placeholder.name': 'Имя',
    'contact.placeholder.email': 'Email',
    'contact.placeholder.message': 'Сообщение',
    'contact.error.name': 'Пожалуйста, введите имя.',
    'contact.error.email': 'Пожалуйста, введите корректный email.',
    'contact.error.message': 'Пожалуйста, введите сообщение.',
    'contact.submit': 'Отправить',
  },
  de: {
    htmlLang: 'de',
    'meta.title': 'Dmitri Dimov | Full-Stack-Webentwickler',
    'meta.ogTitle': 'Dmitri Dimov | Full-Stack-Webentwickler',
    'meta.ogDescription':
      'Portfolio von Dmitri Dimov — Full-Stack-Webentwickler. Projekte, Skills und Kontakt.',
    'hero.greeting': 'Hallo, ich bin <span>Dmitri</span>.',
    'hero.subtitle': 'Ich bin Full-Stack-Webentwickler.',
    'hero.cta': 'Meine Arbeiten ansehen',
    'nav.home': 'Start',
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'sections.about': 'Über mich',
    'sections.projects': 'Projekte',
    'sections.contact': 'Kontakt',
    'about.blurb':
      'Ich lebe die Philosophie des lebenslangen Lernens und arbeite als Full-Stack-Entwickler mit großer Leidenschaft für JavaScript, React und alles rund um Webentwicklung. Die Kombination aus Kreativität, Logik und Technologie sowie die ständige Möglichkeit, Neues zu entdecken, motiviert mich jeden Tag. Wenn ich nicht am Computer sitze, gehe ich gerne wandern, koche und schaue Filme.',
    'projects.ichgram.title': 'Ichgram<br />Social-Media-App',
    'projects.ichgram.description':
      'Full-Stack-Anwendung im Instagram-Stil: Beiträge, Stories, Likes, Kommentare, Follows und Echtzeit-Chat. Gebaut mit React, Vite, Redux, Node.js, Express.js, TypeScript, MongoDB (Mongoose), WebSockets und JWT-Authentifizierung.',
    'projects.bioprinter.title': 'G-Code-Terminal & <br />virtuelle Tastaturen',
    'projects.bioprinter.description':
      'G-Code-Sende-Terminal und touch-optimierte QWERTY- sowie numerische Tastaturen fur eine 3D-Bioprinter-Anwendung. Das Projekt stand unter NDA, daher sind keine Links oder Repositories verfugbar.',
    'projects.vocabular.title': 'Deutsch Lernen<br />PWA',
    'projects.vocabular.description':
      'Mein kleines Pet-Projekt: Eine Progressive Web App (PWA) fur das Deutsch-Lernen: offline-freundliches Lernen, Wortkategorien und Lernstatistiken. Mit JavaScript-PWA-Funktionen und lokaler Datenspeicherung.',
    'projects.petshop.title': 'PetShop<br />Online-Zoofachhandel',
    'projects.petshop.description':
      'Full-Stack-Zoofachhandel. Gebaut mit React, Redux Toolkit, React Router, Material UI, CSS Modules, Axios, Swiper und REST API.',
    'projects.meetup.title': '// MeetUp<br />Plattform zur Event-Entdeckung',
    'projects.meetup.description':
      'HTML5, CSS3, Vanilla JavaScript (ES6+), Leaflet',
    'projects.hotsauce.title':
      'HOTSAUCE<br />Konferenz — Event von Hotjar.',
    'projects.hotsauce.description':
      'Responsives Landingpage-Projekt mit HTML, SCSS und JavaScript.',
    'projects.liveApp': 'Live-App',
    'projects.liveAppLower': 'live-app',
    'projects.learnMore': 'mehr erfahren',
    'contact.text':
      'Hast du eine Frage oder mochtest du zusammenarbeiten? Hinterlasse deine Daten und ich melde mich schnellstmoglich bei dir.',
    'contact.placeholder.name': 'Name',
    'contact.placeholder.email': 'E-Mail',
    'contact.placeholder.message': 'Nachricht',
    'contact.error.name': 'Bitte gib deinen Namen ein.',
    'contact.error.email': 'Bitte gib eine gultige E-Mail ein.',
    'contact.error.message': 'Bitte gib eine Nachricht ein.',
    'contact.submit': 'Senden',
  },
};

const defaultLanguage = 'en';
const languageSwitcher = document.querySelector('#language-switcher');

function getLanguage() {
  const savedLanguage = localStorage.getItem('portfolio-language');
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }
  return defaultLanguage;
}

function applyTranslations(language) {
  const dictionary = translations[language] || translations[defaultLanguage];

  document.documentElement.lang = dictionary.htmlLang || defaultLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute('placeholder', dictionary[key]);
    }
  });

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const key = element.dataset.i18nContent;
    if (dictionary[key]) {
      element.setAttribute('content', dictionary[key]);
    }
  });
}

const currentLanguage = getLanguage();
applyTranslations(currentLanguage);

if (languageSwitcher) {
  languageSwitcher.value = currentLanguage;
  languageSwitcher.addEventListener('change', (event) => {
    const nextLanguage = event.target.value;
    if (!translations[nextLanguage]) {
      return;
    }
    localStorage.setItem('portfolio-language', nextLanguage);
    applyTranslations(nextLanguage);
  });
}

window.onload = function () {
  canvasDotsBg();
  canvasDots();
};

// loads in about section on scroll
function aboutFadeIn(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && document.body.scrollWidth > 1300) {
      // console.log('yo');
      // fade in bio
      document.querySelector('.profile').classList.add('profile__fade-in');

      // fade in skills 1 at a time after bio has loaded
      const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      //html
      sleep(1000).then(() => {
        document
          .querySelector('.skills__item--html')
          .classList.add('skills__item-fade-in');
      });

      //git
      sleep(1100).then(() => {
        document
          .querySelector('.skills__item--git')
          .classList.add('skills__item-fade-in');
      });

      //js
      sleep(1200).then(() => {
        document
          .querySelector('.skills__item--js')
          .classList.add('skills__item-fade-in');
      });

      //postgres
      sleep(1300).then(() => {
        document
          .querySelector('.skills__item--postgres')
          .classList.add('skills__item-fade-in');
      });

      //ts
      sleep(1400).then(() => {
        document
          .querySelector('.skills__item--ts')
          .classList.add('skills__item-fade-in');
      });

      //docker
      sleep(1500).then(() => {
        document
          .querySelector('.skills__item--docker')
          .classList.add('skills__item-fade-in');
      });

      //py
      sleep(1600).then(() => {
        document
          .querySelector('.skills__item--python')
          .classList.add('skills__item-fade-in');
      });

      //react
      sleep(1700).then(() => {
        document
          .querySelector('.skills__item--react')
          .classList.add('skills__item-fade-in');
      });

      //r
      sleep(1800).then(() => {
        document
          .querySelector('.skills__item--r')
          .classList.add('skills__item-fade-in');
      });

      //css
      sleep(1900).then(() => {
        document
          .querySelector('.skills__item--css')
          .classList.add('skills__item-fade-in');
      });
    }
  });
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

let options2 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

let observer = new IntersectionObserver(aboutFadeIn, options);

observer.observe(document.querySelector('.about__content'));

// navigation items in nav bar
const navLinks = document.querySelectorAll('.navigation__item');

// change highlighted nav link depending on page position
function navFadeIn(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target.id);

      navLinks.forEach((link) => {
        link.classList.remove('navigation__item--active');
      });

      document
        .querySelector(`#nav-${entry.target.id}`)
        .classList.add('navigation__item--active');
    }
  });
}

// projects section is a lot longer and needs custom settings
function navFadeInProjects(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target.id);

      navLinks.forEach((link) => {
        link.classList.remove('navigation__item--active');
      });

      document
        .querySelector(`#nav-${entry.target.id}`)
        .classList.add('navigation__item--active');
    }
  });
}

let observerNav = new IntersectionObserver(navFadeIn, options);

observerNav.observe(document.querySelector('#hero'));
observerNav.observe(document.querySelector('#about'));
observerNav.observe(document.querySelector('#contact'));

let observerNavProjects = new IntersectionObserver(navFadeInProjects, options2);

observerNavProjects.observe(document.querySelector('#projects'));

// parralax scrolling effect on hero canvas

// window.onscroll = function (e) {
//   console.log(document.scrollTop);
// };

// document.addEventListener('scroll', () => {
//   // console.log(window.scrollY);

//   document.querySelector('.connecting-dots').style.top = `${window.scrollY}px`;
// });

// form validation

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document.querySelector('#form-submit').addEventListener('click', () => {
  const unameInput = document.querySelector('.contact__form-name');
  const emailInput = document.querySelector('.contact__form-email');
  const msgInput = document.querySelector('.contact__form-message');

  const uname = unameInput.value;
  const email = emailInput.value;
  const msg = msgInput.value;

  const unameError = document.querySelector('.form-error__name');
  const emailError = document.querySelector('.form-error__email');
  const msgError = document.querySelector('.form-error__msg');

  let validUname = false;
  let validEmail = false;
  let validMsg = false;

  // console.log(uname, email, msg);
  if (!uname) {
    validUname = false;
    unameInput.classList.add('input-error');
    unameError.style.display = 'block';
  } else {
    validUname = true;
    unameInput.classList.remove('input-error');
    unameError.style.display = 'none';
  }

  if (!email.match(re)) {
    validEmail = false;
    emailInput.classList.add('input-error');
    emailError.style.display = 'block';
  } else {
    validEmail = true;
    emailInput.classList.remove('input-error');
    emailError.style.display = 'none';
  }

  if (!msg) {
    validMsg = false;
    msgInput.classList.add('input-error');
    msgError.style.display = 'block';
  } else {
    validMsg = true;
    msgInput.classList.remove('input-error');
    msgError.style.display = 'none';
  }

  if (validUname && validEmail && validMsg) {
    document.querySelector('.contact__form').submit();

    // clear form after a delay
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    sleep(1500).then(() => {
      document.querySelector('.contact__form').reset();
    });
  }
});
