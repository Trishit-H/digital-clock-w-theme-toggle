// Get references to DOM elements
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const toggle_btn = document.getElementById('toggle');
const hero = document.querySelector('.hero');
const dateEl = document.querySelector('.date');

// Function to toggle the theme between Light and Dark
function toggleTheme() {
    if (toggle_btn.innerHTML === 'Light') {
        // Change to Dark theme
        toggle_btn.innerHTML = 'Dark';

        // Change light color to black
        document.documentElement.style.setProperty('--primary-light', '#000');

        // Change dark color to white
        document.documentElement.style.setProperty('--primary-dark', '#fff');

        // Set transition duration for hero background color
        hero.style.transition = '2s';

        // Set transition duration for button color and border
        toggle_btn.style.transition = '2s';
    } else if (toggle_btn.innerHTML === 'Dark') {
        // Change to Light theme
        toggle_btn.innerHTML = 'Light';

        // Change light color to white
        document.documentElement.style.setProperty('--primary-light', '#fff');

        // Change dark color to black
        document.documentElement.style.setProperty('--primary-dark', '#000');

        // Set transition duration for hero background color
        hero.style.transition = '2s';

        // Set transition duration for button color and border
        toggle_btn.style.transition = '2s';
    }
}

// Function to update the time every second
function displayTime() {

    // Get the current date and time
    const currentTime = new Date();

    // Update hours, minutes, and seconds with leading zero if necessary
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    // Call displayDate to ensure the date is also updated
    displayDate();
}

// Function to update the date display
function displayDate() {
    const currentDate = new Date(); // Get the current date

    // Arrays for day and month names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the day name, month name, date, and year
    const dayName = dayNames[currentDate.getDay()];
    const monthName = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    // Update the date element with the formatted date
    dateEl.innerHTML = `${dayName} ${monthName} ${date}, ${year}`;
}

// Add event listener to toggle button to switch themes
toggle_btn.addEventListener('click', toggleTheme);

// Set interval to update the time every second
setInterval(displayTime, 1000);