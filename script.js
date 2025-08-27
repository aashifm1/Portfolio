(function () {
  // Set current year
  var y = document.getElementById('year');
  if (y) {
    y.textContent = new Date().getFullYear();
  }

  // Function to generate a random IP address
  function getRandomIP() {
    return Array(4).fill().map(() => Math.floor(Math.random() * 256)).join('.');
  }

  // Function to simulate "bruteforce" animation
  function fakeBruteforceIP(realIP) {
    const ipEl = document.getElementById('ip');
    if (!ipEl) return;

    let attempts = 0;
    const maxAttempts = 25 + Math.floor(Math.random() * 15); // 25-40 attempts

    const interval = setInterval(() => {
      ipEl.textContent = '· ' + getRandomIP();
      attempts++;

      if (attempts >= maxAttempts) {
        clearInterval(interval);
        ipEl.textContent = '· ' + realIP;
      }
    }, 100); // speed of fake tries (ms)
  }

  // Fetch and display user's real IP
  fetch("https://api.ipify.org?format=json")
    .then(r => r.json())
    .then(d => {
      fakeBruteforceIP(d.ip);
    })
    .catch(() => {
      var el = document.getElementById('ip');
      if (el) {
        el.textContent = "";
      }
    });
})();


// Smooth Scroll for ScrollToTop Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
