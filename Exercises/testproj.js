function sortImages() {
    const sortSelect = document.getElementById('sort-select');
    const imageContainer = document.getElementById('image-container');
    const imageBoxes = Array.from(document.getElementsByClassName('image-box'));

    switch (sortSelect.value) {
      case 'ascending':
        imageBoxes.sort((a, b) => a.children[0].alt.localeCompare(b.children[0].alt));
        break;
      case 'descending':
        imageBoxes.sort((a, b) => b.children[0].alt.localeCompare(a.children[0].alt));
        break;
      case 'original':
      default:
        imageBoxes.sort((a, b) => parseInt(a.dataset.order) - parseInt(b.dataset.order));
        break;
    }

    // Update the order in the dataset
    imageBoxes.forEach((box, index) => {
      box.dataset.order = index + 1;
    });

    // Re-append sorted image boxes to the container
    imageBoxes.forEach(box => imageContainer.appendChild(box));
  }

  // Initialize the original order in the dataset
  document.addEventListener('DOMContentLoaded', () => {
    const imageBoxes = Array.from(document.getElementsByClassName('image-box'));
    imageBoxes.forEach((box, index) => {
      box.dataset.order = index + 1;
    });
  });