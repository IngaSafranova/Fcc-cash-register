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
const drawer = document.getElementById('cid');
drawer.innerHTML +=`<p>Change in drawer:</p>`
cid.forEach((currency) => {
    drawer.innerHTML += `<p class="currency">${currency[0].toLowerCase()}: $${currency[1]}</p>`
})