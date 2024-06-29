// scripts/place.js
document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedSpan = document.getElementById('last-modified');
    if (lastModifiedSpan) {
        const lastModifiedDate = new Date(document.lastModified);
        lastModifiedSpan.textContent = lastModifiedDate.toLocaleString();
    }

    const windChillSpan = document.getElementById('wind-chill');
    if (windChillSpan) {
        const temperature = 10; // Replace with actual temperature if available
        const windSpeed = 5; // Replace with actual wind speed if available
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        windChillSpan.textContent = windChill.toFixed(1);
    }
});
