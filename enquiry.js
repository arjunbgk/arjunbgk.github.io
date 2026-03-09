// enquiry.js
document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('touristEnquiryForm');

    enquiryForm.addEventListener('submit', function(event) {
        // Prevent the page from reloading on form submission
        event.preventDefault();

        // Get values from the form
        const name = document.getElementById('name').value;
        const destination = document.getElementById('destination').value;

        // Display a colorful success message
        alert(`Thank you, ${name}! Your enquiry regarding ${destination} has been sent successfully. Our travel guides will get back to you shortly.`);

        // Clear the form fields
        enquiryForm.reset();
    });
});
