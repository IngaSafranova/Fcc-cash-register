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
  Penny: 0.01,
  Nickle: 0.05,
  Dime: 0.1,
  Quarter: 0.25,
  Dollar: 1,
  'Five Dollars': 5,
  'Ten Dollars': 10,
  'Twenty Dollars': 20,
  'One Hundred Dollars': 100,
};

const drawer = document.getElementById("cid");
const changeDue = document.getElementById("change-due");
console.log(changeDue)
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

total.textContent = `Total: $${price}`
const givingChange = () => {
  //cash given.
  const inputValue = moneyGiven.value
  //convert to float number with 2 decimal points.
  const cash = parseFloat(inputValue).toFixed(2)
  console.log(cash)
  let total = 0;
  let sum = 0;
  // cid.forEach((currency) => {
  //   sum += currency[1];
  //   total = sum.toFixed(2)
  // });
  console.log(sum);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  }

  if (cash == price) {
    changeDue.innerText += "No change due - customer paid with exact cash";
  }
  while (cash > price) {
    //how much money in cid.
    
    // loop through reversed cid and check what currency units we can take out from price.
    //need to know how much to substract, eg penny - 0.01, dime.
  }
 
  
};

purchase.addEventListener("click", givingChange);
