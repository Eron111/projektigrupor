document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';

    // Function to handle opening the modal
    function openModal(itemContent) {
        const purchaseBtn = document.createElement('button');
        purchaseBtn.classList.add('purchase-button');
        purchaseBtn.textContent = 'Purchase';
        
        modalContent.innerHTML = ''; // Clear previous content
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(itemContent);
        modalContent.appendChild(purchaseBtn);
        modal.style.display = 'block';
        document.body.style.overflow = 'scroll'; // Prevent scrolling

        // Ensure the purchase button click event is attached
        purchaseBtn.addEventListener('click', function() {
            console.log('Purchase button clicked');
            alert('Item Purchased');
        });
        
    }

    // Attach event listeners to each gallery item
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const itemContent = item.querySelector('.image-text').cloneNode(true);
            openModal(itemContent);
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

    // Terms of Service Modal
    const tosButton = document.getElementById('tos-button');
    const tosModal = document.getElementById('tos-modal');
    const tosCloseButton = document.getElementsByClassName('close2')[0];

    tosButton.onclick = function() {
        tosModal.style.display = 'block';
    }

    tosCloseButton.onclick = function() {
        tosModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == tosModal) {
            tosModal.style.display = 'none';
        }
    }
});
