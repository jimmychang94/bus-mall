'use strict'

//Global Variables
BusMall.allImages = [];
var numClicks = 0;
var picSection = document.getElementById('picSection');
var surveyPic = [0, 0, 0];
//make a constructor function for all bus images
function BusMall(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.shown = 0;
  this.clicks = 0;
  BusMall.allImages.push(this);
}

function randomPic() {
  for(var i = 0; i < surveyPic.length; i ++) {
    surveyPic[i] = document.getElementById('surveyPic' + i);
    var randomImage = Math.floor(Math.random() * BusMall.allImages.length);
    surveyPic[i].src = BusMall.allImages[randomImage].filepath;
    surveyPic[i].alt = BusMall.allImages[randomImage].name;
    surveyPic[i].title = BusMall.allImages[randomImage].name;
    console.log(BusMall.allImages[randomImage].name, 'is being displayed');
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
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('usb', 'img/usb.gif');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');

randomPic();

picSection.addEventListener('click', randomPic);