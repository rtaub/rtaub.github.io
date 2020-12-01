// --- global variables ---

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 

// --- function: loadDoc() ---
//changed to a jQuery function declaration
$(document).ready(function(){
  
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
  //changed from document.getElementByID() to a Jquery statement with $ and # (used to get the id) 
  $("#loan_year0" + 1).val(defaultYear++);
  var defaultLoanAmount = loans[0].loan_amount;
  //changed from document.getElementByID() to a Jquery statement with $ and # (used to get the id) 
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
  var defaultInterestRate = loans[0].loan_int_rate;
  //changed from document.getElementByID() to a Jquery statement with $ and # (used to get the id) 
  $("#loan_int0" + 1).val(defaultInterestRate);
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  //changed from document.getElementByID() to a Jquery statement with $ and # (used to get the id) 
  $("#loan_bal0" + 1).text(toMoney(loanWithInterest));
  
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    //for the current i with the id loan_year0 changes the value for the defaultYear by 1 
    $(`#loan_year0${i}`).val(defaultYear++);
    //disables the years except the first one (i starts as 2)
    $(`#loan_year0${i}`).attr("disabled", "true");
    //gives the disabled years a grey background color and white text
    $(`#loan_year0${i}`).css({"backgroundColor": "grey","color": "white"});
    //sets the loan amount to the default 10,000
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
    //sets the interest rate to the default for that year/row
    $(`#loan_int0${i}`).val(defaultInterestRate);
    //disables the loan_int ids (except for the first once since i = 2)
    $(`#loan_int0${i}`).attr("disabled", "true");
    //sets the disabled loan interest rates to gray with white text
    $(`#loan_int0${i}`).css({"backgroundColor": "grey","color": "white"});
   loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
   $("#loan_bal0" + i).text(toMoney(loanWithInterest));
    } // end: "for" loop
  
  // all input fields: select contents on fucus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
    updateLoansArray();
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  //$("#loan_year01").blur( function() {
    //updateLoansArray();
 
  
}); // end: function loadDoc()


function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`;
};
let savedata = () => {
  //save data in local storage
  localStorage.setItem(`as06`, JSON.stringify(loans)); 
};

let loaddata = () => {
  if (localStorage.getItem(`as06`) != null) {  //if there is local storage data on the device 
    loans = JSON.parse(localStorage.getItem(`as06`)); //set loans to the values in local storage
    updateForm(); //updates the shown values
  } else {  //if there isn't local storage data 
    alert("Error: No values present in local storage"); //tells the user in an alert box that they have no saved values to load
  }
};

function updateLoansArray() {
  //regex tester values 
  let yearP = /^(19|20)\d{2}$/; //checks if the year is between 1899 and 2099
  let amountP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/; //checks if the amount is above 1 
  let intP = /^(0|)+(.[0-9]{1,5})?$/; //checks if the value is below1.0
  let valid = true; //checks if there is anything wrong with the above constraints 

  if (!yearP.test($(`#loan_year01`).val())) {  //if yearP doesnt meet the constraint
    valid = false; //set valid to false
    alert("Invalid year"); //tells the user they have an invalid year 
  }

  for (i = 1; i < 6; i++) {  //loops through the amount
    if (!amountP.test($(`#loan_amt0${i}`).val())) { //if amountP doesnt meet the constraint
      valid = false; //set valid to false
      alert("Invalid amount in entered"); //tells the user they entered an invalid amount  
    }
  }

  if (!intP.test($(`#loan_int01`).val())) {  //if intP is doesn't meet the constraint
    valid = false; //set valid to false
    alert("Invalid interest rate"); //tells the user they entered an invalid rate
  }

  if (valid) {  //if valid is still true (meaning all the constraints were met)
    loans[0].loan_year = parseInt($("#loan_year01").val()); //pass the value from the input box to loans[0].loan_year
    for (var i = 1; i < 5; i++) {  //loops through the rest of the amount boxes 
      loans[i].loan_year = loans[0].loan_year + i; //sets values to the loans using i to keep track of the input
    }

    for (i = 1; i < 6; i++) { //loop through amount field
      let amount = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2); //pass the float value to amount 
      loans[i - 1].loan_amount = amount; //save current value to loans array 
    }

    let interestrate = parseFloat($("#loan_int01").val()); //declare interest rate 
    for (i = 0; i < 5; i++) {
      //loop through the interest rates 
      loans[i].loan_int_rate = interestrate; //save interest rate to loans
    }

    updateForm(); //update and apply the values 
  }
}

let updateForm = () => {
  loanWithInterest = 0; //set loanwithinterest to 0 
  let totalloan = 0; //declare totalloan and set to 0  
  for (i = 1; i < 6; i++) { 
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year); //change the value of loan_year based on loans 
    let loaned = loans[i - 1].loan_amount; //declare loaned 
    $(`#loan_amt0${i}`).val(loaned); //get the loaned amount
    totalloan += parseFloat(loaned); //add loaned (as float) to totalloan
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate); //get the integer value
    loanWithInterest =(loanWithInterest + parseFloat(loaned)) * (1 + loans[0].loan_int_rate); //calculate the loan with interest value
    $("#loan_bal0" + i).text(toMoney(loanWithInterest)); //set the value to loanwithinterest
  }
  let totalowed = loanWithInterest - totalloan;
  $(`#loan_int_accrued`).text(toMoney(totalowed)); //set value for total owed after college
};

var app = angular.module('myApp', []); //declare app using angular 

app.controller('myCtrl', function ($scope) { //
  $scope.payments = []; //get the payments

  $scope.populate = function () {  //begin populate function
    

    updateForm(); //update the form with any changes 

    let finalprice = loanWithInterest; //declare finalprice and set it to loanWithInterest
    let interestrate = loans[0].loan_int_rate; //declare interestrate using the loan int rate
    let r = interestrate / 12; //declare r to hold the value for interest rate for a month

    let payment = 12 * (finalprice / (((1 + r) ** (11 * 12) - 1) / (r * (1 + r) ** (11 * 12)))); //calculate payment
    for (let i = 0; i < 10; i++) {
      finalprice -= payment; //decrease payment from the finalprice
      let finalinterest = finalprice * interestrate; //declare finalinterest to be the finalprice times the interestrate 
      $scope.payments[i] = { //update values
        year: loans[4].loan_year + i + 1, //update to the next year
        payed: toMoney(payment), //apply the payment 
        interestamount: toMoney(finalinterest), //apply the finalinterest 
        finalbalance: toMoney((finalprice += finalinterest)), //update with the end price 
      };
    }
    $scope.payments[10] = { //at the last year apply these values 
      year: loans[4].loan_year + 11, //year gets the 11th year 
      payed: toMoney(finalprice), //payed gets the final price/total 
      interestamount: toMoney(0), //since this is the final year and theres nothing left interest amount is set to 0 
      finalbalance: toMoney(0), //the final balance owed will thus also be 0 
    };
  };
});
