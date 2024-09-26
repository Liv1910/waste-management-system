function checkSchedule() {
    const address = document.getElementById('address').value;
    const scheduleResult = document.getElementById('schedule-result');

    // In a real application, you would make an API call to fetch the schedule
    // For this example, we'll just display a mock result
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
