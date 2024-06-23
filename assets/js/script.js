fetch('./assets/json/items.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      createList(data[i].src, data[i].alt);
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// slider code

let previous = document.querySelector('.previous');
let next = document.querySelector('.next');
let arrows = document.querySelectorAll('.arrows');
let slider = document.querySelector('.classes-list');

function createList(src, alt) {
  let li = document.createElement('li');
  let figure = document.createElement('figure');
  let img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  slider.appendChild(li);
  li.appendChild(figure);
  figure.appendChild(img);
  console.log(li);
}

let count = 0;

function slideImg(count) {
  if (count > -1252 && count < 0) {
    if (count < 0) {
      previous.style.visibility = 'visible';
    }
    if (count > -1252) {
      next.style.visibility = 'visible';
    }
  } else {
    if (count >= 0) {
      previous.style.visibility = 'hidden';
    } else if (count <= -1252) {
      next.style.visibility = 'hidden';
    }
  }
}
previous.addEventListener('click', () => {
  count = count + 78.25;
  slideImg(count);
  slider.style.transform = `translateX(${count}px)`;
});

next.addEventListener('click', () => {
  count = count - 78.25;
  slideImg(count);
  slider.style.transform = `translateX(${count}px)`;
});

// arrows.forEach((element) => {
//   element.addEventListener('click', () => {
//     let classs = element.className;
//     let button = classs.slice(0, classs.length - 6);
//     console.log(button);
//     if (button == 'previous') {
//       count = count + 78.25;
//       slideImg(count);
//       slider.style.transform = `translateX(${count}px)`;
//     } else if (button == 'next') {
//       count = count - 78.25;
//       slideImg(count);
//       slider.style.transform = `translateX(${count}px)`;
//     }
//   });
// });

slideImg(count);
