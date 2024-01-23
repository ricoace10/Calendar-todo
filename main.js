/*function main() {
  const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    daysContainer = document.querySelector(".days"),
    weekdaysContainer = document.querySelector(".weekdays");

  let today = new Date();
  let activeDay;
  let month = today.getMonth();
  let year = today.getFullYear();

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Veckodagar append till diven "weekdays"
  const weekdaysArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  function displayWeekdays(weekdaysArray) {
    weekdaysContainer.innerHTML = "";

    weekdaysArray.forEach(weekday => {
      const weekdayCard = document.createElement('div');
      weekdayCard.classList.add('weekday-card'); 

      const weekdayNames = document.createElement('h2');
      weekdayNames.textContent = weekday; 

      weekdayCard.append(weekdayNames);
      weekdaysContainer.append(weekdayCard); 
    });
  }

  displayWeekdays(weekdaysArray);
}

window.addEventListener("DOMContentLoaded", main);
*/