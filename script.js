function moveToNext(current, nextId) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextId).focus();
  }
}
let timeInSeconds = 120;

const timerEl = document.getElementById("timer");

const countdown = setInterval(() => {

  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;

  let formattedTime =
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  timerEl.textContent = formattedTime;

  timeInSeconds--;

  if (timeInSeconds < 0) {
    clearInterval(countdown);
    timerEl.textContent = "Time's up!";
  }
}, 1000);

// dashboard

const ctx = document.getElementById('bankBalanceChart').getContext('2d');
const bankBalanceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Bank Balance (₹)',
      data: [3000, 8000, 16000, 9000, 16000, 20000, 30000],
      fill: false,
      borderColor: '#4CAF50',
      backgroundColor: '#4CAF50',
      tension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: '#4CAF50'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Balance in ₹'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    }
  }
});