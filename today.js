window.addEventListener("DOMContentLoaded", main)

function main(){
   //toDaysDay();
    //toDaysDate();
   // toDaysMonth();
   updateDate();
   updateClock();
   setInterval(updateClock, 1000);
}

function updateClock() {
    updateDate()
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
   
    // Lägg till en nolla framför minuterna om det är mindre än 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
   
    const timeElement = document.getElementById("clock");
    timeElement.textContent = `${hours}:${minutes}`;
}  

function updateDate(){
    const daysOfWeek = ['Sundays', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

  /*   document.getElementById('asideDay').textContent = dayOfWeek;
    document.getElementById('asideDate').textContent = date;
    document.getElementById('asideMonth').textContent = month; */
    document.getElementById('todaysMonthDate').textContent =  year + ' ' + month + ' ' + date;
    document.getElementById('todaysDay').textContent = dayOfWeek;


}