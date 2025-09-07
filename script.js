// Simple and reliable scroll to top function
function forceScrollToTop() {
  console.log('🔧 Force scroll initiated...');
  
  // Try all possible scroll methods immediately
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Also try scrolling the html element
  const htmlElement = document.querySelector('html');
  if (htmlElement) {
    htmlElement.scrollTop = 0;
  }
  
  // Check if we actually scrolled
  setTimeout(() => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log('📍 Scroll position after force:', currentScroll);
    if (currentScroll === 0) {
      console.log('Successfully scrolled to top!');
    } else {
      console.log('Still not at top, current position:', currentScroll);
    }
  }, 100);
}

// Main functionality
document.addEventListener('DOMContentLoaded', function () {
  // Scroll to Top functionality - Simple & Working
  const scrollBtn = document.getElementById('scrollToTopBtn');
  
  if (scrollBtn) {
    console.log('Scroll button found!'); // Debug log
    
    // Simple scroll event
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });
    
    // Simple and direct click handler
    scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('🚀 BUTTON CLICKED!');
      console.log('📍 Current scroll position:', window.pageYOffset);
      
      // Use the force scroll function
      forceScrollToTop();
      
      // Visual feedback
      scrollBtn.style.background = '#ff6b6b';
      scrollBtn.style.transform = 'scale(0.9)';
      
      setTimeout(() => {
        scrollBtn.style.background = '#3a86ff';
        scrollBtn.style.transform = 'scale(1)';
      }, 200);
    });
    
    // Force button to be visible for testing
    scrollBtn.style.display = 'flex';
    scrollBtn.style.opacity = '1';
    scrollBtn.style.visibility = 'visible';
    scrollBtn.style.pointerEvents = 'auto';
    console.log('Button forced to be visible');
    console.log('Button styles:', window.getComputedStyle(scrollBtn));
  } else {
    console.log('Scroll button NOT found!');
  }

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// IP Address Animation
(function () {

  // Function to generate a random IP address
  function getRandomIP() {
    return Array(4).fill().map(() => Math.floor(Math.random() * 256)).join('.');
  }

  // Function to simulate "bruteforce" animation
  function fakeBruteforceIP(realIP) {
    const ipEl = document.getElementById('ip');
    if (!ipEl) return;

    let attempts = 0;
    const maxAttempts = 30 + Math.floor(Math.random() * 15); // random ip attempts

    const interval = setInterval(() => {
      ipEl.textContent = '· ' + getRandomIP();
      attempts++;

      if (attempts >= maxAttempts) {
        clearInterval(interval);
        ipEl.textContent = '· ' + realIP;
      }
    }, 50); // speed of fake tries (ms)
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




