
//funtion to redirect to the course page
function searchCourse() {
    const courseCode = document.getElementById('searchInput').value;
    // Redirect to the CSE.html page with the course code as a query parameter
    window.location.href = `CSE.html?code=${courseCode}`;
}

// Code for highlighting the row on the semester page
document.addEventListener('DOMContentLoaded', function () {
    // Get the course code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseCode = urlParams.get('code');

    // Find and highlight the corresponding row
    const courseRow = document.querySelector(`.course-row[data-course-code="${courseCode}"]`);
    if (courseRow) {
        courseRow.style.backgroundColor = 'yellow'; // Highlight the row
        // You can also scroll to the highlighted row if needed
        courseRow.scrollIntoView({ behavior: 'smooth' });
    }
});