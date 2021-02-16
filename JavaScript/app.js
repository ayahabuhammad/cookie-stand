'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//const footerRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let perant = document.getElementById('mDiv');
let allObj = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function Store(name,minCustomers,maxCustomers,avgPerCustSales){
  this.name=name;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgPerCustSales=avgPerCustSales;
  this.randomCust=[];
  this.cookiesPerHour=[];
  this.totalDailyCookies=0;

}

Store.prototype.getRandomCust = function(){
  this.randomCust = getRandomNumber(this.minCust, this.maxCust);
};

Store.prototype.randomCookie = function(){
  this.randomCust();
  for(let j = 0; j < hours.length; j++){
    let result = Math.floor(this.avgPerCustSales * this.randomCust[j]);
    this.cookiesPerHour.push(result);
    this.sumRes = this.sumRes + result;
  }
  console.log(this.cookiesPerHour); // checking

};


Store.prototype.render = function () {
  this.randomCookie();
  let nameRow = document.createElement('tr');
  let storeColumn = document.createElement('td');
  storeColumn.textContent = this.siteName;
  nameRow.appendChild(storeColumn);
  for (let i = 0; i < this.cookiesPh.length; i++) {
    let dataCell = document.createElement('td');
    dataCell.textContent = this.cookiesPerHour[i];
    nameRow.appendChild(dataCell);
  }
  var totalData = document.createElement('td');
  totalData.textContent = this.sumRes;
  nameRow.appendChild(totalData);
  perant.appendChild(nameRow);
};

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 20, 38, 2.3);


function callAll() {
  for(let i = 0; i < allObj.length; i++){
    allObj[i].render();
  }
}


let tableRow = document.createElement('tr');
function tableHeading() {
  let thead = document.createElement('th');
  thead.textContent = '';
  perant.appendChild(tableRow);
  tableRow.appendChild(thead);
  for (let i = 0; i < hours.length; i++) {
    thead = document.createElement('th');
    thead.textContent = hours[i];
    tableRow.appendChild(thead);
  }
  thead = document.createElement('th');
  thead.textContent = 'Location Totals';
  tableRow.appendChild(thead);
  perant.appendChild(tableRow);
}

// outside the function to do it once!!
let tableFootRow = document.createElement('tr');
function footerRow() {
  tableFootRow.textContent = 'Totals';
  perant.appendChild(tableFootRow);
  let totalTotal = 0;
  for(let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < allObj.length; j++) {
      hourTotal = hourTotal + allObj[j].cookiesPh[i];
      totalTotal += allObj[j].cookiesPerHour[i];
    }
    let tableData = document.createElement('td');
    tableData.textContent = hourTotal;
    tableFootRow.appendChild(tableData);
  }
  let tableData = document.createElement('td');
  tableData.textContent = totalTotal;
  tableFootRow.appendChild(tableData);
}


tableHeading();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
footerRow();


callAll();

// console.log(allObj);


// const seattle = {
//   name: 'seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   cookiesPerHour: [],
//   avgCookie: 6.3,
//   totalDailyCookies: 0,
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let cookiePerHour = Math.floor(
//         getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
//       );
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     const container = document.getElementById('shops');
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i<hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
//   },
// };


// const tokyo = {
//   name: 'tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   cookiesPerHour: [],
//   avgCookie: 1.2,
//   totalDailyCookies: 0,
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let cookiePerHour = Math.floor(
//         getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
//       );
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     const container = document.getElementById('shops');
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i<hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
//   },
// };
// const dubai = {
//   name: 'dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   cookiesPerHour: [],
//   avgCookie: 3.7,
//   totalDailyCookies: 0,
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let cookiePerHour = Math.floor(
//         getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
//       );
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     const container = document.getElementById('shops');
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i<hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
//   },
// };

// const paris	 = {
//   name: 'paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   cookiesPerHour: [],
//   avgCookie: 2.3,
//   totalDailyCookies: 0,
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let cookiePerHour = Math.floor(
//         getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
//       );
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     const container = document.getElementById('shops');
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i<hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
//   },
// };


// const lima	 = {
//   name: 'lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   cookiesPerHour: [],
//   avgCookie: 4.6,
//   totalDailyCookies: 0,
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++){
//       let cookiePerHour = Math.floor(
//         getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
//       );
//       this.totalDailyCookies += cookiePerHour;
//       this.cookiesPerHour.push(cookiePerHour);
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     const container = document.getElementById('shops');
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i<hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
//   },
// };

