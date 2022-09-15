// VARIABLES

const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

// FUNCTIONS

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 2500);
};

const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate === "") {
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter valid value.";
    error.style.display = "block";
    hideError();
  } else if (Number(bill) < 0) {
    error.innerHTML = "Please enter valid value.";
    error.style.display = "block";
    hideError();
  } else {
    let tipAmount = bill * rate;
    tipAmount = Math.ceil(tipAmount);
    tip.innerHTML = `TIP: $${tipAmount}`;
    let totalAmount = Number(bill) + tipAmount;
    total.innerHTML = `TOTAL: $${totalAmount}`;
  }
};

// EVENT LISTENERS

btn.addEventListener("click", calculateTip);
