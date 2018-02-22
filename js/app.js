'use strict'

//Global Variables
BusMall.allImages = [];
var numClicks = 0;
var picSection = document.getElementById('picSection');
var picId = [document.getElementById('leftPic'), document.getElementById('centerPic'), document.getElementById('rightPic')];
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

function randomLogo() {

}

//This function makes the first 3 pictures and also makes sure that none of the images are the same.
function randomPic() {
  while(randomImage.length < 6) {
    var randomNum = generateRandom();
    while(!randomImage.includes(randomNum)) {
      randomImage.push(randomNum);
    }
  }
  //This makes the 3 images
  for(var i = 0; i < 3; i ++) {
    var rand = randomImage.shift();
    picId[i].src = BusMall.allImages[rand].filepath;
    picId[i].alt = BusMall.allImages[rand].name;
    picId[i].title = BusMall.allImages[rand].name;
    BusMall.allImages[rand].shown += 1;
  }
}

function generateChart() {
  var picName = [];
  var picClicks = [];
  var picColor = [];
  for (var i = 0; i < BusMall.allImages.length; i ++) {
    picName.push(BusMall.allImages[i].name);
    picClicks.push(BusMall.allImages[i].clicks);
    picColor.push('blue');
  }
  var ctx = document.getElementById('canvasClicks').getContext('2d');
  var graphOfPics = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: picName,
      datasets: [{
        label: 'Number of Clicks',
        data: picClicks,
        backgroundColor: picColor,
      }],
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        position: 'top',
        fontSize: 20,
        text:'Number of times an image was chosen'
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }
        }]
      }
    }
  });

  var picPercent = [];
  var picColor2 = [];
  for (var i = 0; i < BusMall.allImages.length; i ++) {
    picPercent.push(Math.floor(BusMall.allImages[i].clicks / BusMall.allImages[i].shown * 100));
    picColor2.push('purple');
  }
  ctx = document.getElementById('canvasPercentage').getContext('2d');
  var graphOfPics2 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: picName,
      datasets: [{
        label: 'Percentage Clicked',
        data: picPercent,
        backgroundColor: picColor2,
      }],
    },
    options: {
      fontSize: 15,
      legend: {
        display: false
      },
      title: {
        display: true,
        position: 'top',
        fontSize: 20,
        text: 'Percentage of Clicks versus Times shown' 
      },
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            stepSize: 20
          }
        }]
      },
      animation: {
        duration:1000,
        easing: 'easeOutBounce'
      }
    }
  });
}

// This function is for when the user clicks
function handleClick(event) {
  //This if statement makes sure that the user clicks on a image
  if(event.target.id === 'picSection') {
    return alert('Please click on an image! Thank you!');
  }
  //This checks to see which image gets clicked on and adds one to that image's counter
  for(var i = 0; i < BusMall.allImages.length; i ++) {
    if (BusMall.allImages[i].name === event.target.title) {
      BusMall.allImages[i].clicks += 1;
    }
  }
  randomPic();
    
  numClicks += 1; //This increases the click counter by 1
  //This if statement checks to see if the number of clicks is 25 or over and then runs this if it does go over.
  if (numClicks > 24) {
    picSection.style.display = 'none';
    generateChart();
    var allImagesStringify = JSON.stringify(BusMall.allImages);
    localStorage.setItem('allImages', allImagesStringify);
  }
}

//This creates the image objects
function imagePopulation() {
  if (localStorage.length > 0) {
    var allImagesRetrieved = localStorage.getItem('allImages');
    BusMall.allImages = JSON.parse(allImagesRetrieved);
  } else {
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
  }
}
imagePopulation();
//This runs the function for the first 3 pictures
randomPic();

//This makes an event listener for clicks on the section containing the pictures.
picSection.addEventListener('click', handleClick);