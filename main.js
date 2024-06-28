
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }
  


$(document).ready(function(){

    var imageBox = $('.slider ul'),
        imageWidth = $('.slider ul li').first().children('img').width(),
        imageQuantity = $('.slider ul').children('li').length,
        currentImage = 1;
  
    imageBox.css('width', imageWidth*imageQuantity);
  
    $('.nav button').on('click',function(){
      var whichButton = $(this).data('nav');
  
      if(whichButton === 'next'){
  
        if(currentImage === imageQuantity){
          currentImage = 1;
          transition(currentImage,imageWidth);
        }else{
          currentImage++;
          transition(currentImage,imageWidth);
        }
      
      }else if(whichButton === 'prev'){
  
        if(currentImage === 1){
          currentImage = imageQuantity;
          transition(currentImage,imageWidth);
        }else{
          currentImage--;
          transition(currentImage,imageWidth);
        }
      }
    });
  
    function transition(currentImageInput, imageWidthInput) {
      var pxValue = -(currentImageInput-1) * imageWidthInput
        imageBox.animate({
          'left': pxValue
        })
    }
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
