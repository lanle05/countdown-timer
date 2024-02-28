const countdownElement = document.getElementById("countdown");
const giveawayEndsElement = document.getElementById("giveawayEnds");

function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10); // Add 10 days

// Update the countdown every second
setInterval(() => {
  const currentDate = new Date().getTime();
  const remainingTime = targetDate.getTime() - currentDate;

  // If remaining time is less than or equal to 0, reset the target date to 10 days from now
  if (remainingTime <= 0) {
    targetDate.setDate(targetDate.getDate() + 10); // Add 10 days
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    giveawayEndsElement.textContent = `Giveaway ends on ${formatDate(
      targetDate
    )}`;
}, 1000); // Update every second
