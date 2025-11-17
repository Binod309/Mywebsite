document.addEventListener('DOMContentLoaded', function() {
  // time & year
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleString();
  document.getElementById('year').textContent = now.getFullYear();

  // YouTube auto update option:
  // If you want automatic latest video replace without API, put latest VIDEO_ID into localStorage 'latestVideo'
  const stored = localStorage.getItem('latestVideo') || '{{VIDEO_ID}}';
  if(stored && stored !== '') {
    const frame = document.getElementById('ytFrame');
    if(frame) frame.src = `https://www.youtube.com/embed/${stored}`;
  }
});