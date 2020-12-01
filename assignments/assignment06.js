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
   document.getElementById("loan_bal0" + i).innerHTML = toComma(loanWithInterest.toFixed(2));
    } // end: "for" loop
  
  // all input fields: select contents on fucus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  $("#loan_year01").blur( function() {
    updateLoansArray();
  });
  
} // end: function loadDoc()


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

    for (i = 1; i < 6; i++) { //loop for entirety of amount field to save values
      let amount = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2); //pass the float value as it is a decimal value technically
      loans[i - 1].loan_amount = amount; //save value to loans array.
    }

    let interestrate = parseFloat($("#loan_int01").val()); //generate interest rate value
    for (i = 0; i < 5; i++) {
      //loop for interest rate field
      loans[i].loan_int_rate = interestrate; //save interest rate to loans
    }

    updateForm(); //run updateform to apply values
  }
}

let updateForm = () => {
  loanWithInterest = 0; //initialize loanwithinterest
  let totalloan = 0; //create and initialize the totalloan value
  for (i = 1; i < 6; i++) {
    //loop for entire field
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year); //change the value of the entirety of the loan_year field based on values stored in loans
    let loaned = loans[i - 1].loan_amount; //create and initialize loaned variable
    $(`#loan_amt0${i}`).val(loaned); //pull the loaned amount
    totalloan += parseFloat(loaned); //accumulate total amount loaned
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate); //pull integer value
    loanWithInterest =
      (loanWithInterest + parseFloat(loaned)) * (1 + loans[0].loan_int_rate); //calculate the total loaned value with interest
    $("#loan_bal0" + i).text(toMoney(loanWithInterest)); //apply value of loanwithinterest
  }
  let totalamountowed = loanWithInterest - totalloan;
  $(`#loan_int_accrued`).text(toMoney(totalamountowed)); //apply value for total interest collected over college career
};

var app = angular.module("appdata", []); //create and initialize app using angular inside the appdata field

app.controller("alldata", function ($scope) {
  //in the controller field of the html and everything within the alldata field
  $scope.payments = []; //find the payments h2

  $scope.populate = function () {
    //begin populate function

    updateForm(); //update what is visible

    let endprice = loanWithInterest; //initialize an endprice value using loanwithinterest
    let interestrate = loans[0].loan_int_rate; //initialize an interestrate value based on loan in rate
    let r = interestrate / 12; //create an r value to represnt interest over months instead of years
    let n = 11; //create an n value for the purpose of not including one month

    let pay =
      12 * (endprice / (((1 + r) ** (n * 12) - 1) / (r * (1 + r) ** (n * 12)))); //calculate payment
    for (let i = 0; i < 10; i++) {
      //loop 10 times
      endprice -= pay; //decrease endprice
      let interested = endprice * interestrate; //create and initialize int to be equal to the montly interest rate * end price
      $scope.payments[i] = {
        //adjust payments values
        year: loans[4].loan_year + i + 1, //go to year the next
        payed: toMoney(pay), //apply what is payed
        interestamount: toMoney(interested), //apply what the amount interested was
        endbalance: toMoney((endprice += interested)), //apply what the end price looks like
      };
    }
    $scope.payments[10] = {
      //at position 10 aply the following values
      year: loans[4].loan_year + 11, //year will equal the year of interest plus 11
      payed: toMoney(endprice), //the amount payed will be equivelant to the ending price
      interestamount: toMoney(0), //the amount interested should be zero as there is nothing left to increase
      endbalance: toMoney(0), //the balance of what is owed will be zero as there is nothing left to interest there either.
    };
  };
});
