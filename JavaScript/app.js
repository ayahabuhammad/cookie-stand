'use strict';

const Seatle = {
  name: 'Seatle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  numofCustomers: 0,
  totalPerhour: [],
  locationT: [],
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getnumofCustomers: function () {
    this.numofCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
  },
  render: function () {
    const container = document.getElementById('seatle');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    let sum=0;
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      Seatle.getnumofCustomers();
      ulEl.appendChild(liEl);
      this.totalPerhour[i] = Math.floor(this.numofCustomers * this.avgCookie);
      sum=sum+this.totalPerhour[i];
      this.locationT[i] = this.hours[i]+': '+this.totalPerhour[i];
      liEl.textContent = this.locationT[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: '+sum;

  }
};

const Tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookie: 1.2,
  numofCustomers: 0,
  totalPerhour: [],
  locationT: [],
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getnumofCustomers: function () {
    this.numofCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
  },
  render: function () {
    const container = document.getElementById('tokyo');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    let sum=0;
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      Tokyo.getnumofCustomers();
      ulEl.appendChild(liEl);
      this.totalPerhour[i] = Math.floor(this.numofCustomers * this.avgCookie);
      sum=sum+this.totalPerhour[i];
      this.locationT[i] = this.hours[i]+': '+this.totalPerhour[i];
      liEl.textContent = this.locationT[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: '+sum;

  }
};

const Dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  numofCustomers: 0,
  totalPerhour: [],
  locationT: [],
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getnumofCustomers: function () {
    this.numofCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
  },
  render: function () {
    const container = document.getElementById('dubai');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    let sum=0;
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      Dubai.getnumofCustomers();
      ulEl.appendChild(liEl);
      this.totalPerhour[i] = Math.floor(this.numofCustomers * this.avgCookie);
      sum=sum+this.totalPerhour[i];
      this.locationT[i] = this.hours[i]+': '+this.totalPerhour[i];
      liEl.textContent= this.locationT[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: '+sum;

  }
};

const Paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookie: 2.3,
  numofCustomers: 0,
  totalPerhour: [],
  locationT: [],
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getnumofCustomers: function () {
    this.numofCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
  },
  render: function () {
    const container = document.getElementById('paris');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    let sum=0;
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      Paris.getnumofCustomers();
      ulEl.appendChild(liEl);
      this.totalPerhour[i] = Math.floor(this.numofCustomers * this.avgCookie);
      sum=sum+this.totalPerhour[i];
      this.locationT[i] = this.hours[i]+': '+this.totalPerhour[i];
      liEl.textContent = this.locationT[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: '+sum;

  }
};
const Lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookie: 4.6,
  numofCustomers: 0,
  totalPerhour: [],
  locationT: [],
  hours: ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getnumofCustomers: function () {
    this.numofCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
  },
  render: function () {
    const container = document.getElementById('lima');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    let sum=0;
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      Lima.getnumofCustomers();
      ulEl.appendChild(liEl);
      this.totalPerhour[i] = Math.floor(this.numofCustomers * this.avgCookie);
      sum=sum+this.totalPerhour[i];
      this.locationT[i] = this.hours[i]+': '+this.totalPerhour[i];
      liEl.textContent = this.locationT[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: '+sum;

  }
};



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Seatle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
