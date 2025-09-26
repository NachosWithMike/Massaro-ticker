const amountDisplay = document.getElementById('amount');
const withInterestBtn = document.getElementById('withInterestBtn');
const noInterestBtn = document.getElementById('noInterestBtn');

const principal = 200; // Amount owed
const annualInterestRate = 0.18; // 18% interest
const startDate = new Date("2024-01-01T00:00:00Z"); // Start date of loan

function calculateAmount(withInterest) {
  const now = new Date();
  const secondsElapsed = (now - startDate) / 1000;
  let amount;

  if (withInterest) {
    const perSecondRate = annualInterestRate / (365 * 24 * 60 * 60);
    amount = principal * Math.pow((1 + perSecondRate), secondsElapsed);
  } else {
    amount = principal;
  }

  return amount.toFixed(2);
}

function updateAmount(withInterest) {
  const amount = calculateAmount(withInterest);
  amountDisplay.textContent = `$${amount}`;
}

let currentMode = true;
setInterval(() => updateAmount(currentMode), 100);

withInterestBtn.addEventListener("click", () => {
  currentMode = true;
  withInterestBtn.classList.add("active");
  noInterestBtn.classList.remove("active");
});

noInterestBtn.addEventListener("click", () => {
  currentMode = false;
  noInterestBtn.classList.add("active");
  withInterestBtn.classList.remove("active");
});

updateAmount(currentMode);