function startCountdown() {
    const elements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    let countdown = {
        days: 8,
        hours: 23,
        minutes: 55,
        seconds: 41
    };

    function updateDisplay() {
        for (let unit in countdown) {
            elements[unit].textContent = String(countdown[unit]).padStart(2, '0');
        }
    }

    function updateCountdown() {
        countdown.seconds--;
        
        if (countdown.seconds < 0) {
            countdown.seconds = 59;
            countdown.minutes--;
            
            if (countdown.minutes < 0) {
                countdown.minutes = 59;
                countdown.hours--;
                
                if (countdown.hours < 0) {
                    countdown.hours = 23;
                    countdown.days--;
                    
                    if (countdown.days < 0) {
                        // Timer complete
                        clearInterval(timer);
                        countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
                    }
                }
            }
        }
        
        updateDisplay();
    }

    updateDisplay();
    const timer = setInterval(updateCountdown, 1000);
}

// Initialize
createStars();
startCountdown();