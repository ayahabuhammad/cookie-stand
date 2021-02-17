'use strict';

const hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am '
  , '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

//helper function
function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


const salmonContainer = document.getElementById('salmonapp');
const salmonTable = document.createElement('table');
salmonTable.setAttribute('id' , 'my-table');

salmonContainer.appendChild(salmonTable);

const myBranches = [];

//Constructor
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
////////////////////////////////////////////////


Branches.prototype.myNumber=function(){
  for (let i = 0; i < hours.length; i++) {
    var myAvg = Math.floor(this.avgNum);
    this.numOfCookies.push((getRandomCustomer(this.minCustomer, this.maxCustomer)) * myAvg);

    this.totalCookies = this.totalCookies + this.numOfCookies[i];

  }
};


/////////////////////////////////////////////////////////




Branches.prototype.myBodyRender=function(){

  const secondTr = document.createElement('tr');
  salmonTable.appendChild(secondTr);
  const mySecTd = document.createElement('td');
  secondTr.appendChild(mySecTd);
  mySecTd.textContent=this.location;


  for (let j=0 ;j<hours.length ;j++){
    const firstTd=document.createElement('td');
    firstTd.textContent= `${this.numOfCookies[j]} ` ;
    secondTr.appendChild(firstTd);
  }

  const firsttTd=document.createElement('td');
  firsttTd.textContent+= `${this.totalCookies} ` ;
  secondTr.appendChild(firsttTd);
};

new Branches(23,65 , 6.3, 'Seattle');
new Branches(3, 24 , 1.2 , 'Tokyo');
new Branches(11, 38 , 3.7 , 'Dubai');
new Branches(20, 38 , 2.3 , 'Paris');
new Branches(2, 16 , 4.6 , 'Lima');

////////////////////////////////////////////////


const form = document.getElementById('cookieform');
form.addEventListener('submit', function(event){
  event.preventDefault();

  const theMinCustomer = event.target.mincus.value;
  const theMaxCustomer = event.target.maxcus.value;
  const averageNum = event.target.avg.value;
  const branchLocation = event.target.location.value;


  const newBranch = new Branches(theMinCustomer , theMaxCustomer ,averageNum,branchLocation);
  salmonTable.removeChild(salmonTable.lastChild);
  newBranch.myBodyRender();
  form.reset();

  myFooterRender();
});


///////////////////////////////////////////////
function myHeaderRender(){


  //creating <tr> tag for header
  const firstTr = document.createElement('tr');

  salmonTable.appendChild(firstTr);

  const firstttTh = document.createElement('th');
  firstttTh.textContent = '';
  firstTr.appendChild(firstttTh);
  //This (for loop) list my hours in a row
  for (let i = 0; i < hours.length; i++) {
    const firstTh = document.createElement('th');
    firstTr.appendChild(firstTh);
    firstTh.textContent = hours[i] ;
    // firstTh.classList.add("mystyle");
  }
  // This is for creat another cell in the same row
  var thTotal= document.createElement('th');
  thTotal.textContent='Total1';
  firstTr.appendChild(thTotal);
  //firstTh.classList.add("mystyle");
}

////////////////////////////////////////////////////////////////////

function myFooterRender () {


  const finalTr = document.createElement('tr');
  salmonTable.appendChild(finalTr);

  const finalTh =document.createElement('th');
  finalTr.appendChild(finalTh);
  finalTh.textContent = ('Total');

  let finalTotal = 0;
  for (let x=0 ; x< hours.length ; x++){
    let myTotal =0;
    for (var z=0;z<myBranches.length ; z++) {
      myTotal += (myBranches[z].numOfCookies[x]);
    }

    const finalTd = document.createElement('td');
    finalTd.textContent = myTotal;
    finalTotal += myTotal;
    finalTr.appendChild(finalTd);
  }

  const tdTd=document.createElement('td');
  tdTd.textContent=finalTotal;
  finalTr.appendChild(tdTd);

}

//////////////////////////////////////////////////////////////////


myHeaderRender();
for(let i=0 ; i<myBranches.length ; i++){
  myBranches[i].myBodyRender();

}
myFooterRender();
