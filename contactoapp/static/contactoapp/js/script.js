// Display today's time
document.addEventListener('DOMContentLoaded', function() {
    const currentTimeElement = document.getElementById('current-time'); 

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        currentTimeElement.textContent = timeString;
    }

    updateTime(); // Initial display
    setInterval(updateTime, 1000); // Update every second
});

