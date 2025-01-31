const modal = document.getElementById('registration-modal'); // Get modal element
const registerButton = document.getElementById('register-button'); // Get open modal button
const closeButton = document.querySelector('.close-button'); // Get close button
const registrationForm = document.getElementById('registration-form'); // Get the form

// Listen for open click
registerButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Listen for close click
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Listen for outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const club = document.getElementById('club').value;
    console.log(`Name: ${name}, Email: ${email}, Club: ${club}`); // Here you can handle the form data
    modal.style.display = 'none';// Close the modal
    alert('Thank you for registering! Contact your club president.');
});