'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  name: 'seattle',
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerHour: [],
  avgCookie: 6.3,
  totalDailyCookies: 0,
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let cookiePerHour = Math.floor(
        getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
      );
      this.totalDailyCookies += cookiePerHour;
      this.cookiesPerHour.push(cookiePerHour);
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    const container = document.getElementById('shops');
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i<hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
  },
};


const tokyo = {
  name: 'tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerHour: [],
  avgCookie: 1.2,
  totalDailyCookies: 0,
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let cookiePerHour = Math.floor(
        getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
      );
      this.totalDailyCookies += cookiePerHour;
      this.cookiesPerHour.push(cookiePerHour);
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    const container = document.getElementById('shops');
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i<hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
  },
};
const dubai = {
  name: 'dubai',
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerHour: [],
  avgCookie: 3.7,
  totalDailyCookies: 0,
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let cookiePerHour = Math.floor(
        getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
      );
      this.totalDailyCookies += cookiePerHour;
      this.cookiesPerHour.push(cookiePerHour);
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    const container = document.getElementById('shops');
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i<hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
  },
};

const paris	 = {
  name: 'paris',
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerHour: [],
  avgCookie: 2.3,
  totalDailyCookies: 0,
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let cookiePerHour = Math.floor(
        getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
      );
      this.totalDailyCookies += cookiePerHour;
      this.cookiesPerHour.push(cookiePerHour);
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    const container = document.getElementById('shops');
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i<hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
  },
};


const lima	 = {
  name: 'lima',
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerHour: [],
  avgCookie: 4.6,
  totalDailyCookies: 0,
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let cookiePerHour = Math.floor(
        getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCookie
      );
      this.totalDailyCookies += cookiePerHour;
      this.cookiesPerHour.push(cookiePerHour);
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    const container = document.getElementById('shops');
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i<hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}:${this.cookiesPerHour[i]}  cookies`; }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalDailyCookies} cookies`;
  },
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
