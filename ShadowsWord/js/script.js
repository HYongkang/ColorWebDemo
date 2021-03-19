const hero = document.querySelector('.hero');
const h1 = document.querySelector('h1');
const walk = 30;
function makeShadow(e) {
  const width= hero.offsetWidth;
  const height = hero.offsetHeight;
// Or with ES6:  const {offsetWidth: width, offsetHeight: height} = hero;
  let x = e.offsetX;
  let y = e.offsetY;
// or with ES6: let {offsetX: x, offsetY: y} = e;
  if (this != e.target) {
    //"this" is what we're listening on (hero), the target changes if we hover on the h1 element (que faz com que mudem os valores do offset)
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round(x / width * walk) - (walk / 2); 
  const yWalk = Math.round(y / height * walk) - (walk / 2);
h1.style.textShadow = `${xWalk}px ${yWalk}px 10px #0000008f`;
}
hero.addEventListener('mousemove', makeShadow);
