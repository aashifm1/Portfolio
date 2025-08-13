// Simple JS with plain names. No heavy animations.
    (function(){
      var y = document.getElementById('year');
      if(y){ y.textContent = new Date().getFullYear(); }

      // Display user's IP in a small tag (optional).
      function setIP(text){ var el = document.getElementById('ip'); if(el){ el.textContent = text ? "· " + text : ""; } }
      try {
        fetch("https://api.ipify.org?format=json").then(r=>r.json()).then(d=> setIP(d.ip)).catch(()=>setIP(""));
      } catch(e){ setIP(""); }
    })();