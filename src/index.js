import 'normalize.css';
import './styles/main.scss';

document.getElementById('burgerBtn').addEventListener('click', function () {
  const menu = document.getElementById('burgerMenu');
  const isOpen = menu.classList.contains('open');

  this.setAttribute('aria-expanded', !isOpen);

  if (isOpen) {
    menu.classList.remove('open');
    menu.setAttribute('hidden', '');

    const activeElements = document.querySelectorAll('.active');
    activeElements.forEach((element) => {
      element.classList.remove('active--visible');
    });
  } else {
    menu.classList.add('open');
    menu.removeAttribute('hidden');

    const activeElements = document.querySelectorAll('.active');
    activeElements.forEach((element) => {
      element.classList.add('active--visible');
    });
  }
});

document.querySelectorAll('.has-dropdown').forEach((down) => {
  down.addEventListener('click', function (e) {
    e.preventDefault();

    const smartphonesMenu = this.querySelector('#smartphones');
    const gadgetsMenu = this.querySelector('#gadgets');

    this.classList.toggle('open');

    if (smartphonesMenu) {
      smartphonesMenu.classList.add('show');
    }

    document.querySelectorAll('.has-dropdown.open').forEach((item) => {
      if (item !== this) {
        item.classList.remove('open');
        item.querySelectorAll('.submenu').forEach((sm) => sm.classList.remove('show'));
      }
    });
  });
});

document.getElementById('subSmartphones').addEventListener('click', function (e) {
  e.preventDefault();

  const gadgetsMenu = document.querySelector('#gadgets');

  if (gadgetsMenu) {
    gadgetsMenu.classList.add('show');
  }
});

document.getElementById('burgerCatalogBtn').addEventListener('click', function () {
  const menu = document.querySelector('.burger-menu ul');

  const activeElements = document.querySelectorAll('.active');
  activeElements.forEach((element) => {
    element.style.display = 'none';
  });

  if (window.matchMedia('(max-width: 360px)').matches) {
    if (menu.style.display === '' || menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
});