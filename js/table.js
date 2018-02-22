var allImagesRetrieved = localStorage.getItem('allImages');
var allImages = JSON.parse(allImagesRetrieved);
var tableEl = document.getElementById('tablePics');


function render() {
  var nameArray = ['R2D2 Bag', 'Banana Slicer', 'Bathroom I-pad Holder', 'Open-Toed Rain Boots', 'All-in-One Breakfast Maker', 'Meatball Bubblegum', 'Dome Chair', 'Cthulu Doll', 'Duck-bill Dog', 'Freshly Slain Dragon Meat', 'Utensil Pens', 'Pet Sweep', 'Pizza Scissors', 'Shark Sleeping Bag', 'Baby Sweeper', 'Tauntaun Sleeping Bag', 'Packaged Unicorn Meat', 'Moving Tentacle USB', 'Self-filling Watering Can', 'Odd Wine Glass'];
  var clicksArray = [];
  var shownArray = [];
  var percentArray = [];
  var recommendArray = [];

  var theadEl = document.createElement('thead');
  newElement('th', 'Item', theadEl);
  newElement('th', 'Views', theadEl);
  newElement('th', 'Clicks', theadEl);
  newElement('th', '% of Click When Viewed', theadEl);
  newElement('th', 'Recommended?', theadEl);
  tableEl.appendChild(theadEl);
  for (var i = 0; i < allImages.length; i ++) {
    var trEl = document.createElement('tr');
    newElement('td', nameArray[i], trEl);
    shownArray.push(allImages[i].shown);
    newElement('td', shownArray[i], trEl);
    clicksArray.push(allImages[i].clicks);
    newElement('td', clicksArray[i], trEl);
    var percentage = Math.floor(clicksArray[i] / shownArray[i] * 100);
    percentArray.push(percentage);
    newElement('td', percentArray[i], trEl);
    if (percentArray[i] > 35) {
      recommendArray.push('Yes');
      
    } else if (percentArray[i] < 25) {
      recommendArray.push('No');
    } else {
      recommendArray.push('Maybe');
    }
    newElement('td', recommendArray[i], trEl);
    tableEl.appendChild(trEl);
  }
}

function newElement (elementType, content, parent) {
  var newEl = document.createElement(elementType);
  newEl.textContent = content;
  parent.appendChild(newEl);
}

render();