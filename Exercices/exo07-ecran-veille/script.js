window.addEventListener("DOMContentLoaded", () => {
  const date = document.getElementById("date");
  const time = document.getElementById("time");

  function capitalize(str) {
    return str
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1))
      .join(" ");
  }

  function updateClock() {
    const now = new Date();

    const formatDate = now.toLocaleDateString(navigator.language, {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const formatTime = now.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    date.textContent = capitalize(formatDate);
    time.textContent = formatTime;
  }

  updateClock();
  setInterval(updateClock, 1000);
});
