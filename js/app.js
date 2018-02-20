'use strict'

//Global Variables
BusMall.allImages = [];
var numClicks = 0;
var picSection = document.getElementById('picSection');
var surveyPic = ['', '', ''];
//make a constructor function for all bus images
function BusMall(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.shown = 0;
  this.clicks = 0;
  BusMall.allImages.push(this);
}

function generateRandom() {
  return Math.floor(Math.random() * BusMall.allImages.length);
}
var randomImage = [];
function randomPic() {
  for(var i = 0; i < 3; i ++) {
    randomImage.push(generateRandom());
  }
  while(randomImage[0] === randomImage[1]) {
    randomImage[1] = generateRandom();
  }
  while(randomImage[0] === randomImage[2] || randomImage[1] === randomImage[2]) {
    randomImage[2] = generateRandom();
  }
  
  for(i = 0; i < 3; i ++) {
    surveyPic[i] = document.getElementById('surveyPic' + i);
    surveyPic[i].src = BusMall.allImages[randomImage[i]].filepath;
    surveyPic[i].alt = BusMall.allImages[randomImage[i]].name;
    surveyPic[i].title = BusMall.allImages[randomImage[i]].name;
  }
  console.log(randomImage);
  
  for (i = 0; i < randomImage.length; i ++) {
    for (var j = 0; j < BusMall.allImages.length; j ++) {
      if (BusMall.allImages[randomImage[i]].name === BusMall.allImages[j].name) {
        BusMall.allImages[j].shown ++;
      }
    }
  }
}

function randomPic2(event) {
  if(event.target.id === 'picSection') {
    return alert('Please click on an image! Thank you!');
  }
  numClicks ++;

  if (numClicks >= 25) {
    var ulEl = document.getElementById('ulpics');
    for(var i = 0; i < BusMall.allImages.length; i ++) {
      var liEl = document.createElement('li');
      liEl.textContent = BusMall.allImages[i].name + ' got shown ' + BusMall.allImages[i].shown + ' times. It got clicked ' + BusMall.allImages[i].clicks + ' times.';
      ulEl.appendChild(liEl);
      
    }
    
    return;
  }
  console.log('you clicked on ' + event.target.title);

  for(i = 0; i < BusMall.allImages.length; i ++) {
    if (BusMall.allImages[i].name === event.target.title) {
      BusMall.allImages[i].clicks += 1;
    }
  }

  for(i = 0; i < 3; i ++) {
    randomImage.push(generateRandom());
    if(randomImage.length > 6) {
      randomImage.shift();
    }
  }

  for(i = 3; i < 6; i ++) {
    while(randomImage[3] === randomImage[0] || randomImage[3] === randomImage[1] || randomImage[3] === randomImage[2]) {
      randomImage[3] = generateRandom();
    }

    while(randomImage[4] === randomImage[0] || randomImage[4] === randomImage[1] || randomImage[4] === randomImage[2] || randomImage[4] === randomImage[3]) {
      randomImage[4] = generateRandom();
    }

    while(randomImage[5] === randomImage[0] || randomImage[5] === randomImage[1] || randomImage[5] === randomImage[2] || randomImage[5] === randomImage[3] || randomImage[5] === randomImage[4]) {
      randomImage[5] = generateRandom();
    }
  }
  
  for(i = 0; i < 3; i ++) {
    surveyPic[i] = document.getElementById('surveyPic' + i);
    surveyPic[i].src = BusMall.allImages[randomImage[i+3]].filepath;
    surveyPic[i].alt = BusMall.allImages[randomImage[i+3]].name;
    surveyPic[i].title = BusMall.allImages[randomImage[i+3]].name;
  }

  console.log(randomImage);
  for (i = 0; i < randomImage.length; i ++) {
    for (var j = 0; j < BusMall.allImages.length; j ++) {
      if (BusMall.allImages[randomImage[i]].name === BusMall.allImages[j].name) {
        BusMall.allImages[j].shown ++;
      }
    }
  }
}

new BusMall('bag', 'img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom', 'img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck', 'img/dog-duck.jpg');
// new BusMall('dragon', 'img/dragon.jpg');
// new BusMall('pen', 'img/pen.jpg');
// new BusMall('pet-sweep', 'img/pet-sweep.jpg');
// new BusMall('scissors', 'img/scissors.jpg');
// new BusMall('shark', 'img/shark.jpg');
// new BusMall('sweep', 'img/sweep.png');
// new BusMall('tauntaun', 'img/tauntaun.jpg');
// new BusMall('unicorn', 'img/unicorn.jpg');
// new BusMall('usb', 'img/usb.gif');
// new BusMall('water-can', 'img/water-can.jpg');
// new BusMall('wine-glass', 'img/wine-glass.jpg');

randomPic();

picSection.addEventListener('click', randomPic2);