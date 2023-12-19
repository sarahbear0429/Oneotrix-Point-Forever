const imageDropdown = document.getElementById('image-dropdown');
const sliderImage = document.getElementById('slider-image');
const imageText = document.getElementById('image-text');


function changeImage() {
  const selectedImage = imageDropdown.value;
  sliderImage.src = selectedImage;
  updateText(selectedImage);
}

function showText() {
    // Show text when hovering over the image
    imageText.style.display = 'block';
  }

  function hideText() {
    // Hide text when the cursor leaves the image
    imageText.style.display = 'none';
  }

  function updateText(selectedImage) {
    // Update text based on the selected image
    switch (selectedImage) {
      case 'C:\Users\sarah\Desktop\CODING CLASS STUFFS\Oneotrix-Point-Forever\Exercises\moonlight1.jpg':
        imageText.innerText = 'Text for Image 1';
        break;
      case 'C:\Users\sarah\Desktop\CODING CLASS STUFFS\Oneotrix-Point-Forever\Exercises\moonlight2.jpg':
        imageText.innerText = 'Text for Image 2';
        break;
      case 'image3.jpg':
        imageText.innerText = 'Text for Image 3';
        break;
      
    }
  }

  sliderImage.addEventListener('mouseout', hideText);