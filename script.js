
// Constants
const loanAmount = 515471.19; // Principal from hypothetical tab (no interest)
const interestRate = 0.07;     // 7% annual interest
const loanStartDate = new Date("2024-12-09T00:00:00");

let withInterest = true;

// Function to calculate elapsed time in milliseconds
function getElapsedTime() {
  const now = new Date();
  return now - loanStartDate;
}

// Function to calculate amount owed
function calculateAmount() {
  if (!withInterest) return loanAmount.toFixed(2);

  const elapsed = getElapsedTime();
  const years = elapsed / (1000 * 60 * 60 * 24 * 365.25);
  const amountWithInterest = loanAmount * Math.pow(1 + interestRate, years);
  return amountWithInterest.toFixed(2);
}

// Function to update display
function updateDisplay() {
  const amount = calculateAmount();
  document.getElementById("amount").innerText = `$${amount}`;
}

// Button toggle logic
document.getElementById("withInterest").addEventListener("click", () => {
  withInterest = true;
  updateDisplay();
  setActive("withInterest");
});
document.getElementById("noInterest").addEventListener("click", () => {
  withInterest = false;
  updateDisplay();
  setActive("noInterest");
});

function setActive(id) {
  document.getElementById("withInterest").classList.remove("active");
  document.getElementById("noInterest").classList.remove("active");
  document.getElementById(id).classList.add("active");
}

// Initial update
updateDisplay();

// Optional: Auto-update every second
setInterval(updateDisplay, 1000);
