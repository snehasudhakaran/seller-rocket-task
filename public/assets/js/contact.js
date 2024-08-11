document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownButtonText = document.getElementById('dropdownButtonText');
    const dropdownOptions = dropdownMenu.querySelectorAll('li');

    // Toggle dropdown menu visibility
    dropdownButton.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('hidden');
    });

    // Update button text with selected option and close dropdown
    dropdownOptions.forEach(option => {
        option.addEventListener('click', function() {
            dropdownButtonText.textContent = this.getAttribute('data-value');
            dropdownMenu.classList.add('hidden');
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(e) {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.top = '0px';
    } else {
        header.style.top = '50px';
    }
});