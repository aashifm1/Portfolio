(function () {
  // Set current year
  var y = document.getElementById('year');
  if (y) {
    y.textContent = new Date().getFullYear();
  }

  // Fetch and display user's IP (optional)
  fetch("https://api.ipify.org?format=json")
    .then(r => r.json())
    .then(d => {
      var el = document.getElementById('ip');
      if (el) {
        el.textContent = "· " + d.ip;
      }
    })
    .catch(() => {
      var el = document.getElementById('ip');
      if (el) {
        el.textContent = "";
      }
    });
})();
