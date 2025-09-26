
// Constants
const loanAmount = 200;
const interestRate = 0.07; // 7% annual interest
const loanStartDate = new Date("2023-07-01T00:00:00"); // Replace with real date

let withInterest = true;

// Function to calculate elapsed time in milliseconds
function getElapsedTime() {
  const now = new Date();
  return now - loanStartDate;
}

// Function to calculate total owed
function calculateOwed() {
  if (!withInterest) return loanAmount;

  const elapsedMs = getElapsedTime();
  const elapsedYears = elapsedMs / (1000 * 60 * 60 * 24 * 365.25);
  return loanAmount * Math.pow(1 + interestRate, elapsedYears);
}

// Update ticker
function updateDisplay() {
  const amount = calculateOwed();
  const formattedAmount = `$${amount.toFixed(2)}`;
  document.getElementById("amount").textContent = formattedAmount;
}

// Start the counter
setInterval(updateDisplay, 100);

// Event listeners
document.getElementById("withInterest").addEventListener("click", () => {
  withInterest = true;
  document.getElementById("withInterest").classList.add("active");
  document.getElementById("noInterest").classList.remove("active");
});

document.getElementById("noInterest").addEventListener("click", () => {
  withInterest = false;
  document.getElementById("noInterest").classList.add("active");
  document.getElementById("withInterest").classList.remove("active");
});

// Initial display
updateDisplay();

