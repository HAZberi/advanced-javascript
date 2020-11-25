'use strict';

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', () => reject(new Error('Path Not Found')));
  });
};

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

let image;

/* createImage('./img/img-1.jpg')
  .then(el => {
    el.classList.add('images');
    document.body.appendChild(el);
    image = el;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    console.log('2 Seconds has passed');
    return wait(2);
  })
  .then(() => {
    return createImage('./img/img-2.jpg');
  })
  .then(el => {
    el.classList.add('images');
    document.body.appendChild(el);
    image = el;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    console.log('2 Seconds has passed');
  })
  .catch(err => console.error(err)); */

  const loadNPause = async function(){
    try{
      let imgElement = await createImage('./img/img-1.jpg')
      document.body.append(imgElement);
      imgElement.classList.add('images');
      await wait(2);
      imgElement.style.display = 'none';
      await wait(2);
      imgElement = await createImage('./img/img-2.jpg')
      document.body.append(imgElement);
      imgElement.classList.add('images');
      await wait(2);
      imgElement.style.display = 'none';
    }catch (err){
      console.error(`Something went wrong : ${err.message}`);
    }
  };

  loadNPause();