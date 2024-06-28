document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const itemContent = item.querySelector('.image-text').cloneNode(true);
            modalContent.innerHTML = ''; // Clear previous content
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(itemContent);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal when close button or outside modal area is clicked
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Close modal on Esc key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});




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

