function createCountdown() {
    const launchDate = new Date("February 4, 2025 18:00:00").getTime();

    var daysElement = document.getElementById('days');
    var hoursElement = document.getElementById('hours')
    var minutesElement = document.getElementById('minutes')
    var secondsElement = document.getElementById('seconds')

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const timeDifference = launchDate - currentTime;

        const dayInSeconds = 1000 * 60 * 60 * 24;
        const hourInSeconds = 1000 * 60 * 60;
        const minutesInSeconds = 1000 * 60;

        const days = Math.floor(timeDifference / dayInSeconds);
        const hours = Math.floor((timeDifference % dayInSeconds) / hourInSeconds);
        const minutes = Math.floor((timeDifference % hourInSeconds) / minutesInSeconds);
        const seconds = Math.floor((timeDifference % minutesInSeconds) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }   

    setInterval(updateCountdown, 1000);
}

createCountdown()