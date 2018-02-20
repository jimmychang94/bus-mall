'use strict'

//Global Variables
BusMall.allImages = [];
var numClicks = 0;
var picSection = document.getElementById('picSection');
var surveyPic = ['', '', ''];
var randomImage = [];

//make a constructor function for all bus images
function BusMall(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.shown = 0;
  this.clicks = 0;
  BusMall.allImages.push(this);
}

//generates a random integer between 0 and the length of the array holding all the images - 1.
function generateRandom() {
  return Math.floor(Math.random() * BusMall.allImages.length);
}

//This function makes the first 3 pictures and also makes sure that none of the images are the same.
function randomPic() {
  for(var i = 0; i < 3; i ++) {
    randomImage.push(generateRandom());
  }
  
  //The while loops below check to make sure that the random integers are not the same.
  while(randomImage[0] === randomImage[1]) {
    randomImage[1] = generateRandom();
  }
  while(randomImage[0] === randomImage[2] || randomImage[1] === randomImage[2]) {
    randomImage[2] = generateRandom();
  }
  
  //This makes the 3 images
  for(i = 0; i < 3; i ++) {
    surveyPic[i] = document.getElementById('surveyPic' + i);
    surveyPic[i].src = BusMall.allImages[randomImage[i]].filepath;
    surveyPic[i].alt = BusMall.allImages[randomImage[i]].name;
    surveyPic[i].title = BusMall.allImages[randomImage[i]].name;
  }
  console.log(randomImage);
  
  //This tallies the amount of times a picture shows up.
  for (i = 0; i < randomImage.length; i ++) {
    for (var j = 0; j < BusMall.allImages.length; j ++) {
      if (BusMall.allImages[randomImage[i]].name === BusMall.allImages[j].name) {
        BusMall.allImages[j].shown ++;
      }
    }
  }
}

// This function is for when the user clicks
function randomPic2(event) {
  //This if statement makes sure that the user clicks on a image
  if(event.target.id === 'picSection') {
    return alert('Please click on an image! Thank you!');
  }

  //This increases the counter for the number of clicks
  numClicks ++;

  //This if statement checks to see if the number of clicks is 25 or over and then runs this if it does go over.
  if (numClicks >= 25) {
    var ulEl = document.getElementById('ulpics');
    for(var i = 0; i < BusMall.allImages.length; i ++) {
      var liEl = document.createElement('li');
      liEl.textContent = BusMall.allImages[i].name + ' got shown ' + BusMall.allImages[i].shown + ' times. It got clicked ' + BusMall.allImages[i].clicks + ' times.';
      ulEl.appendChild(liEl);
      picSection.removeEventListener('click', randomPic2);
      
    }
    
    return;
  }
  
  //This checks to see which image gets clicked on and adds one to that image's counter
  console.log('you clicked on ' + event.target.title);
  for(i = 0; i < BusMall.allImages.length; i ++) {
    if (BusMall.allImages[i].name === event.target.title) {
      BusMall.allImages[i].clicks += 1;
    }
  }

  //This makes a random number and also removes the numbers that are over 6
  for(i = 0; i < 3; i ++) {
    randomImage.push(generateRandom());
    if(randomImage.length > 6) {
      randomImage.shift();
    }
  }

  //This checks the randomly generated number to make sure that it isn't a duplicate of the previous numbers.
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
  
  //This puts the image on the HTML
  for(i = 0; i < 3; i ++) {
    surveyPic[i] = document.getElementById('surveyPic' + i);
    surveyPic[i].src = BusMall.allImages[randomImage[i+3]].filepath;
    surveyPic[i].alt = BusMall.allImages[randomImage[i+3]].name;
    surveyPic[i].title = BusMall.allImages[randomImage[i+3]].name;
  }
  console.log(randomImage);

  //This tallies the amount of times an image shows up
  for (i = 0; i < randomImage.length; i ++) {
    for (var j = 0; j < BusMall.allImages.length; j ++) {
      if (BusMall.allImages[randomImage[i]].name === BusMall.allImages[j].name) {
        BusMall.allImages[j].shown ++;
      }
    }
  }
}

//This creates the image objects
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

//This runs the function for the first 3 pictures
randomPic();

//This makes an event listener for clicks on the section containing the pictures.
picSection.addEventListener('click', randomPic2);