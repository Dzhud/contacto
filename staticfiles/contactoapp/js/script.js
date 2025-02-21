// ... (Your other JavaScript code) ...

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {  // Form's action URL
        method: form.method,
        body: formData,
        headers: {
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value // Important for CSRF
        }
    })
    .then(response => response.json())  // Assuming API returns JSON
    .then(newContact => {
        // Update the contact list on the page
        const contactList = document.getElementById('contact-list'); // Get your contact list element
        const newRow = contactList.insertRow(); // Add new row to table
        // Add cells to the new row with contact data
        const nameCell = newRow.insertCell();
        nameCell.textContent = newContact.name;
        const addressCell = newRow.insertCell();
        addressCell.textContent = newContact.address;
        const phoneCell = newRow.insertCell();
        phoneCell.textContent = newContact.phone_number;
        // ... add update/delete buttons cells
        const updateCell = newRow.insertCell();
        updateCell.innerHTML = '<button class="update-contact">Update</button>';
        const deleteCell = newRow.insertCell();
        deleteCell.innerHTML = '<button class="delete-contact">Delete</button>';
        
        form.reset(); // Clear the form
    
    });
});

// Display today's time
document.addEventListener('DOMContentLoaded', function() { // Wait for the DOM to load
    const currentTimeElement = document.getElementById('current-time');

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString(); // Get current time string
        currentTimeElement.textContent = timeString;
    }

    updateTime(); // Initial display
    setInterval(updateTime, 1000); // Update every second
});