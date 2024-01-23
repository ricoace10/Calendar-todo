// Funktion för att uppdatera välkomstsegmentet med aktuellt datum och tid
function updateWelcomeSegment() {
    const welcomeSegment = document.querySelector('[data-cy="welcome-segment"]');
    if (welcomeSegment) {
      const currentDate = new Date();
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('en-US', options);
      welcomeSegment.textContent = formattedDate;
    }
  }
  
  // Uppdatera välkomstsegmentet när sidan laddas
  window.addEventListener('DOMContentLoaded', updateWelcomeSegment);
  
  // Uppdatera välkomstsegmentet varje minut
  setInterval(updateWelcomeSegment, 60000); // Uppdatera varje 60 sekunder (1 minut)
  
  