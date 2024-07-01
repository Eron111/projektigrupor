document.addEventListener('DOMContentLoaded', (event) => {
    const tosButton = document.getElementById('tos-button');
    const modal = document.getElementById('tos-modal');
    const closeButton = document.getElementsByClassName('close2')[0];

    tosButton.onclick = function() {
        modal.style.display = 'block';
    }

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
