'use strict';


const DomElement = function(selector, height, width, fontSize, bg, position, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.fontSize = fontSize;
  this.bg = bg;
  this.position = position;
  this.text = text;
  this.create = function() {
    let elem;
      if (this.selector[0] === ".")
      {
        elem = document.createElement('div');
        elem.classList.add(this.selector.slice(1));
      }
      else if (this.selector[0] === '#')
      {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
      }
      elem.style.cssText = `height: ${this.height};
            width: ${this.width};
            font-size: ${this.fontSize};
            background-color: ${this.bg};
            position: ${this.position};
            text-align: center;
            justify-content: center;
            display: flex;
            align-items: center;`;
      elem.textContent = this.text;
      document.querySelector('body').append(elem);
  };
};


function moveSquare (event) {
  let square = document.querySelector('.square');
  switch (event.key) 
  {
    case 'ArrowUp': square.style.top = (square.getBoundingClientRect().top - 10) + 'px';
    break;
    case 'ArrowRight': square.style.left = (square.getBoundingClientRect().left + 10) + 'px';
    break;
    case 'ArrowDown': square.style.top = (square.getBoundingClientRect().top + 10) + 'px';
    break;
    case 'ArrowLeft': square.style.left = (square.getBoundingClientRect().left - 10) + 'px';
    break;
  }
}

const newObj1 = new DomElement(".block", '150px', '300px', '30px', 'red', '', 'java script');
const newObj2 = new DomElement("#block", '150px', '300px', '20px', 'green', '', 'java script');
const square = new DomElement('.square', '100px', '100px', '', 'black', 'absolute', '');

newObj1.create();
newObj2.create();
document.addEventListener('DOMContentLoaded', function(event) {
  square.create();
});
document.addEventListener('keydown', moveSquare);