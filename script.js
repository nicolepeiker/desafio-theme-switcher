const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

sun.onclick = () => {
  btn.classList.add('active');
  body.classList.add('active');
};
moon.onclick = () => {
  btn.classList.remove('active');
  body.classList.remove('active');
};
