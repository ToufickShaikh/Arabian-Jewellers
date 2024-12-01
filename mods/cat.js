function showDetails() {
  alert("More details about this ring...");
  // You could expand this to show a modal or more product info
}
const filterSelect = document.getElementById('category');
const cards = document.querySelectorAll('.card');

filterSelect.addEventListener('change', () => {
  const selectedCategory = filterSelect.value;

  cards.forEach(card => {
    const cardCategory = card.dataset.category;

    if (selectedCategory === 'all' || selectedCategory === cardCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});