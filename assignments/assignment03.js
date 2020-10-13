let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1] = document.getElementById("1");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[1].children[4].children[1].onclick 
  = function(){sub1(elem[1], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[1].children[4].children[2].onclick 
  = function(){clear(elem[1], elem[19]);};

elem[2] = document.getElementById("2");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[2].children[4].children[1].onclick 
  = function(){sub1(elem[2], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[2].children[4].children[2].onclick 
  = function(){clear(elem[2], elem[19]);};

elem[3] = document.getElementById("3");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[3].children[4].children[1].onclick 
  = function(){sub1(elem[3], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[3].children[4].children[2].onclick 
  = function(){clear(elem[3], elem[19]);};

elem[4] = document.getElementById("4");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[4].children[4].children[1].onclick 
  = function(){sub1(elem[4], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[4].children[4].children[2].onclick 
  = function(){clear(elem[4], elem[19]);};

elem[5] = document.getElementById("5");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[5].children[4].children[1].onclick 
  = function(){sub1(elem[5], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[5].children[4].children[2].onclick 
  = function(){clear(elem[5], elem[19]);};

elem[6] = document.getElementById("6");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[6].children[4].children[1].onclick 
  = function(){sub1(elem[6], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[6].children[4].children[2].onclick 
  = function(){clear(elem[6], elem[19]);};

elem[7] = document.getElementById("7");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[7].children[4].children[1].onclick 
  = function(){sub1(elem[7], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[7].children[4].children[2].onclick 
  = function(){clear(elem[7], elem[19]);};

elem[8] = document.getElementById("8");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[8].children[4].children[1].onclick 
  = function(){sub1(elem[8], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[8].children[4].children[2].onclick 
  = function(){clear(elem[8], elem[19]);};

elem[9] = document.getElementById("9");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[9].children[4].children[1].onclick 
  = function(){sub1(elem[9], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[9].children[4].children[2].onclick 
  = function(){clear(elem[9], elem[19]);};

elem[10] = document.getElementById("10");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[10].children[4].children[1].onclick 
  = function(){sub1(elem[10], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[10].children[4].children[2].onclick 
  = function(){clear(elem[10], elem[19]);};

elem[11] = document.getElementById("11");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[11].children[4].children[1].onclick 
  = function(){sub1(elem[11], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[11].children[4].children[2].onclick 
  = function(){clear(elem[11], elem[19]);};

elem[12] = document.getElementById("12");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[12].children[4].children[1].onclick 
  = function(){sub1(elem[12], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[12].children[4].children[2].onclick 
  = function(){clear(elem[12], elem[19]);};

elem[13] = document.getElementById("13");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[13].children[4].children[1].onclick 
  = function(){sub1(elem[13], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[13].children[4].children[2].onclick 
  = function(){clear(elem[13], elem[19]);};

elem[14] = document.getElementById("14");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[14].children[4].children[1].onclick 
  = function(){sub1(elem[14], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[14].children[4].children[2].onclick 
  = function(){clear(elem[14], elem[19]);};

elem[15] = document.getElementById("15");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[15].children[4].children[1].onclick 
  = function(){sub1(elem[15], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[15].children[4].children[2].onclick 
  = function(){clear(elem[15], elem[19]);};

elem[16] = document.getElementById("16");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[16].children[4].children[1].onclick 
  = function(){sub1(elem[16], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[16].children[4].children[2].onclick 
  = function(){clear(elem[16], elem[19]);};

elem[17] = document.getElementById("17");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[17].children[4].children[1].onclick 
  = function(){sub1(elem[17], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[17].children[4].children[2].onclick 
  = function(){clear(elem[17], elem[19]);};

elem[18] = document.getElementById("18");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[18].children[4].children[1].onclick 
  = function(){sub1(elem[18], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[18].children[4].children[2].onclick 
  = function(){clear(elem[18], elem[19]);};

elem[19] = document.getElementById("totals");
//declares variables used by the 19 id or the 19th row which is the "totals" row
//The par total remains constant but the totals for the score and the amount over par can change
const parTotal = 72;
let scoreTotal = 0;
let overTotal = 0;
//sets the par total in the scorecard to parTotal which is 72 
elem[19].children[1].innerHTML = parTotal;


// create an "add1" function
// takes in the current hole/row and the total to be updated
function add1 (elem, elemTotal) {
  if(elem.children[2].innerHTML == "-" || elem.children[2].innerHTML == "0") {
    elem.children[2].innerHTML = "1";
    //update the total score on the scorecard 
    scoreTotal = scoreTotal + 1;
    elemTotal.children[2].innerHTML =scoreTotal; }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    //update the total on the scorecard
    scoreTotal = scoreTotal + 1;
    elemTotal.children[2].innerHTML =scoreTotal;
  }
  
  //if (elem.children[2].innerHTML == 5){
    //elem.children[3].innerHTML = "1";
    //overTotal = overTotal + 1;
    //elemTotal.children[2].innerHTML = overTotal; }
  if (elem.children[2].innerHTML > 4) {
    let currentOver = elem.children[2].innerHTML;
    currentOver = Number.parseInt(currentOver) - 4;
    //update the total on the scorecard
    overTotal = overTotal + 1;
    elemTotal.children[3].innerHTML =overTotal; }
}

