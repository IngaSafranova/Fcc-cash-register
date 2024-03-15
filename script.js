let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const currencyValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

const drawer = document.getElementById("cid");
const changeDue = document.getElementById("change-due");

const moneyGiven = document.getElementById("cash");
const purchase = document.getElementById("purchase-btn");
const total = document.getElementById("price");

drawer.innerHTML += `<p>Change in drawer:</p>
<br/>`;
cid.forEach((currency) => {
  drawer.innerHTML += `<p class="currency">${currency[0].toLowerCase()}:  $${
    currency[1]
  }</p>`;
});

// output object - status: , cid
const changeDueStatus = {
  status: null,
  output: [],
};

total.textContent = `Total: $${price}`;

const givingChange = () => {
  //cash given.
  const inputValue = moneyGiven.value;
  //convert to float number with 2 decimal points.
  const cash = parseFloat(inputValue).toFixed(2);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  }

  if (cash == price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  }

  // 1. Define the function calculateChange(price, cash, cid)
  //     a. Initialize a variable changeDue to store the change to be returned, initially set to cash - price.
  let change = cash - price;
  //     b. Initialize a variable totalCID to store the total cash in the drawer.
  let totalCid = Number(cid.reduce((sum, el) => sum + el[1], 0).toFixed(2));
  console.log(totalCid);
  //     c. Loop through cid array and calculate totalCID.
  //     d. Check if totalCID is less than changeDue, if so, return "Status: INSUFFICIENT_FUNDS".
  if (totalCid < change) {
    changeDueStatus.status = "Status: INSUFFICIENT_FUNDS";
    return (changeDue.innerText = changeDueStatus.status);
  }
  //     e. Check if totalCID equals changeDue, if so, return "Status: CLOSED".
  if (totalCid === change) {
    changeDueStatus.status = "Status: CLOSED";
    return (changeDue.innerText = changeDueStatus.status);
  } else {
     let selectedCurrency 
    let changeArray = [];
    cid.reverse().forEach((el) => {
      const coinName = el[0];
      let coinTotalValueInDollars = Number(el[1]);
       selectedCurrency = Number(currencyValue[coinName].toFixed(2));
      let coinsAvailable = Number(
        (coinTotalValueInDollars / selectedCurrency).toFixed(2)
      );
      console.log(
        coinName,
        coinTotalValueInDollars,
        selectedCurrency,
        coinsAvailable
      );
      let coinsToReturn = 0;
      while (change >= selectedCurrency && coinsAvailable > 0) {
        change = (change - selectedCurrency);
        
        --coinsAvailable;
        ++coinsToReturn;
        coinTotalValueInDollars -= selectedCurrency
        
      }
      drawer.innerText = `${coinName.toLowerCase()}: $${coinTotalValueInDollars}`
      console.log(coinTotalValueInDollars)
      if (coinsToReturn > 0) {
        changeArray.push(coinName, coinsToReturn * selectedCurrency);
        
      }
        
      // cid= el[1] - selectedCurrency
      // console.log(cid)
      // totalCid = Number(cid.reduce((sum, el) => sum + el[1], 0).toFixed(2));
      // console.log(totalCid)
     
      if (change > 0) {
        (changeDueStatus.status = "Status: OPEN"),
          (changeDueStatus.output = changeArray);
        return (changeDue.innerText = `${changeDueStatus.status}\n ${changeDueStatus.output}`);
      } else if (change === 0) {
        changeDueStatus.status = "Status: CLOSED";
        return (changeDue.innerText = changeDueStatus.status);
      } else {
        {
          changeDueStatus.status = " Status: INSUFFICIENT_FUNDS";
        }
        return (changeDue.innerText = changeDueStatus.status);
      }

    });
    
  }
};

purchase.addEventListener("click", givingChange);
