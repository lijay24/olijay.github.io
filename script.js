document.addEventListener('DOMContentLoaded', function() {
    // Function to get current time in UTC
    function getCurrentTimeUTC() {
        const now = new Date();
        const options = { timeZone: 'UTC', weekday: 'long', hour: 'numeric', minute: 'numeric' };
        return now.toLocaleString('en-US', options);
    }

    // current time and day
    document.getElementById('currentTimeUTC').textContent = getCurrentTimeUTC();
    document.getElementById('currentDay').textContent = new Date().toLocaleString('en-US', { weekday: 'long' });
});
const output = document.querySelector("pre");
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels
`;
});

