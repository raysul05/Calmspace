// timer.js - reusable 10-minute reminder
(function(){
  function startTimer(displayElement, durationSec){
    let remaining = durationSec;
    const el = document.getElementById(displayElement);
    if(!el) return;
    el.textContent = formatTime(remaining);
    const interval = setInterval(()=>{
      remaining--;
      el.textContent = formatTime(remaining);
      if(remaining <= 0){
        clearInterval(interval);
        notifyEnd();
      }
    },1000);
    // expose reset
    window.__calmTimerReset = function(){
      clearInterval(interval);
      startTimer(displayElement, durationSec);
    }
  }
  function formatTime(sec){
    const m = Math.floor(sec/60).toString().padStart(2,'0');
    const s = (sec%60).toString().padStart(2,'0');
    return `${m}:${s}`;
  }
  function notifyEnd(){
    // simple accessible notification
    alert("⏰ 10 minutes are up — consider taking a real break!");
  }
  // auto start for elements with data-start-timer
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('[data-start-timer]').forEach(function(el){
      const seconds = parseInt(el.getAttribute('data-start-timer'),10) || 600;
      startTimer(el.id, seconds);
    });
  });
})();
