let bill = document.getElementById("bill");
let numPeople = document.getElementById("people");
let active = document.queryCommandValue(".active");

let percentTip = document.querySelectorAll(".tip");
let customTip = document.getElementById("custom-tip");
let displayTip = document.getElementById("total-tip");
let displayTotalAmount = document.getElementById("total-amount");
let reset = document.querySelector(".reset");

let leftSide = document.querySelector(".left-side");
let rightSide = document.querySelector(".right-side");
let error = document.getElementById("error");
let closeError = document.getElementById("close-error");

let result = function (input) {
  let billAmount = bill.value;
  let numOfPpl = numPeople.value;

  let totalTip = (billAmount * (input / 100)) / numOfPpl;

  let totalAmount = totalTip + billAmount / numOfPpl;
  totalTip = totalTip.toFixed(2);
  displayTip.innerHTML = totalTip;
  totalAmount = totalAmount.toFixed(2);
  displayTotalAmount.innerHTML = totalAmount;
};

percentTip.forEach((e) => {
  e.addEventListener("click", () => {
    let percentVal = e.innerHTML.replace("%", "");
    percentTip.forEach((e) => {
      e.classList.remove("active");
      customTip.value = "";
    });
    if (
      bill.value == "" ||
      bill.value <= 0 ||
      numPeople.value == "" ||
      numPeople <= 0
    ) {
      error.style.display = "block";
      leftSide.style.opacity = "0.5";
      rightSide.style.opacity = "0.5";
      displayTip.innerHTML = "0.00";
      displayTotalAmount.innerHTML = "0.00";
      percentTip.forEach((e) => {
        e.classList.remove("active");
        customTip.value = "";
      });
    } else {
      e.classList.add("active");
      result(percentVal);
    }
  });
});

customTip.addEventListener("input", () => {
  let customVal = customTip.value;
  percentTip.forEach((e) => {
    e.classList.remove("active");
    customTip.value = customVal;
  });
  console.log(customVal);
  result(customVal);
});

bill.addEventListener("click", () => {
  numPeople.value = "";
  customTip.value = "";
  percentTip.forEach((e) => {
    e.classList.remove("active");
    customTip.value = "";
  });
  displayTip.innerHTML = "0.00";
  displayTotalAmount.innerHTML = "0.00";
});

numPeople.addEventListener("click", () => {
  customTip.value = "";
  percentTip.forEach((e) => {
    e.classList.remove("active");
    customTip.value = "";
  });
  displayTip.innerHTML = "0.00";
  displayTotalAmount.innerHTML = "0.00";
});

reset.addEventListener("click", () => {
  customTip.value = "";
  bill.value = "";
  numPeople.value = "";
  percentTip.forEach((e) => {
    e.classList.remove("active");
  });
  displayTip.innerHTML = "0.00";
  displayTotalAmount.innerHTML = "0.00";
});

closeError.addEventListener("click", () => {
  error.style.display = "none";
  leftSide.style.opacity = "1";
  rightSide.style.opacity = "1";
});
