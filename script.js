
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.03)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});


function relativeTime(timestamp) {
  const now = Date.now();
  const timeDiff = Math.floor((timestamp * 1000 - now) / 1000);
  const absDiff = Math.abs(timeDiff);

  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "week", seconds: 604800 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 }
  ]

  for (const unit of units) {
    if (absDiff >= unit.seconds || unit.name === "second") {
      const value = Math.round(timeDiff / unit.seconds);
      const rtf = new Intl.RelativeTimeFormat('en', {numeric:'auto'});
      return rtf.format(value, unit.name);
    }
  }
};

document.querySelectorAll('.time').forEach(date => {
  const timestamp = parseInt(date.getAttribute('data-timestamp'), 10);
  date.textContent = relativeTime(timestamp);
});