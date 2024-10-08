function checkSchedule() {
    const address = document.getElementById('address').value;
    const scheduleResult = document.getElementById('schedule-result');

    if (address) {
        scheduleResult.innerHTML = `
            <h3>Collection Schedule for ${address}</h3>
            <p>Garbage: Every Monday</p>
            <p>Recycling: Every other Wednesday</p>
            <p>Yard Waste: First Tuesday of each month</p>
        `;
    } else {
        scheduleResult.innerHTML = '<p>Please enter a valid address.</p>';
    }
}
