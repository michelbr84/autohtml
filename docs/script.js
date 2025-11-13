document.addEventListener('DOMContentLoaded', function() {
    const description = document.getElementById('page-description');
    
    // Optional: Add a click event to toggle description visibility
    if (description) {
        description.addEventListener('click', function() {
            this.style.color = this.style.color === 'blue' ? '#34495e' : 'blue';
            this.style.fontWeight = this.style.fontWeight === 'bold' ? 'normal' : 'bold';
        });
    }
});