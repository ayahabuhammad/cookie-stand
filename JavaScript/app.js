'use strict';
let hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am '
  , '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


let salmonContainer = document.getElementById('Salmon-Cookies');

let salmonTable = document.createElement('table');
salmonTable.setAttribute('id' , 'my-table');

salmonContainer.appendChild(salmonTable);



let myBranches = [];


function Branches (minCustomer,maxCustomer,avgNum,location){
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgNum = avgNum ;
  this.location=location;
  this.numOfCookies = [];
  this.totalCookies = 0;
  myBranches.push(this);
  this.myNumber();
}



Branches.prototype.myNumber=function(){
  for (let i = 0; i < hours.length; i++) {
    let myAvg = Math.floor(this.avgNum);
    this.numOfCookies.push((getRandomCustomer(this.minCustomer, this.maxCustomer)) * myAvg);

    this.totalCookies = this.totalCookies + this.numOfCookies[i];

  }
};







Branches.prototype.myBodyRender=function(){

  let secondTr = document.createElement('tr');
  salmonTable.appendChild(secondTr);
  var mySecTd = document.createElement('td');
  secondTr.appendChild(mySecTd);
  mySecTd.textContent=this.location;



  for (let j=0 ;j<hours.length ;j++){
    let firstTd=document.createElement('td');
    firstTd.textContent= `${this.numOfCookies[j]} ` ;
    secondTr.appendChild(firstTd);
  }

  var firsttTd=document.createElement('td');
  firsttTd.textContent+= `${this.totalCookies} ` ;
  secondTr.appendChild(firsttTd);

};

new Branches(23,65 , 6.3, 'Seattle');
new Branches(3, 24 , 1.2 , 'Tokyo');
new Branches(11, 38 , 3.7 , 'Dubai');
new Branches(20, 38 , 2.3 , 'Paris');
new Branches(2, 16 , 4.6 , 'Lima');

////////////////////////////////////////////////




myFooterRender();
function myHeaderRender(){
  var firstTr = document.createElement('tr');
  salmonTable.appendChild(firstTr);

  var firstttTh = document.createElement('th');
  firstttTh.textContent = '';
  firstTr.appendChild(firstttTh);
  for (let i = 0; i < hours.length; i++) {
    let firstTh = document.createElement('th');
    firstTr.appendChild(firstTh);
    firstTh.textContent = hours[i] ;
  }
  let thTotal= document.createElement('th');
  thTotal.textContent='Total1';
  firstTr.appendChild(thTotal);
}

////////////////////////////////////////////////////////////////////

function myFooterRender () {


  var finalTr = document.createElement('tr');
  salmonTable.appendChild(finalTr);

  var finalTh =document.createElement('th');
  finalTr.appendChild(finalTh);
  finalTh.textContent = ('Total');

  var finalTotal = 0;
  for (var x=0 ; x< hours.length ; x++){
    var myTotal =0;
    for (let z=0;z<myBranches.length ; z++) {
      myTotal += (myBranches[z].numOfCookies[x]);
    }

    let finalTd = document.createElement('td');
    finalTd.textContent = myTotal;
    finalTotal +=myTotal;
    finalTr.appendChild(finalTd);
  }

  let tdTd=document.createElement('td');
  tdTd.textContent=finalTotal;
  finalTr.appendChild(tdTd);

}



myHeaderRender();
for(let i=0 ; i<myBranches.length ; i++){
  myBranches[i].myBodyRender();

}
myFooterRender();

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

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
