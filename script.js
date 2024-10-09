// Function to unlock next level
function unlockLevel(nextLevel) {
    document.getElementById(nextLevel).style.display = "block";
  }
  
  // Show personalized hint
  function showHint(level) {
    document.getElementById('hint' + level).style.display = "block";
  }
  
  // Play music
  function playMusic() {
    document.getElementById('backgroundMusic').play();
  }
  
  // Show final prom message
  function showFinalMessage() {
    document.getElementById('finalMessage').style.display = "block";
    playMusic();
  }
  
  // Handle yes/no button clicks
  document.getElementById('yesBtn').onclick = function() {
    alert("Yay! I’m looking forward to prom with you!");
  };
  
  document.getElementById('noBtn').onclick = function() {
    // Make the "No" button shake and unclickable
    this.classList.add('shake');
  };
  