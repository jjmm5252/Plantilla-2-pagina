const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.menu-item');

function filterMenu(category) {
  items.forEach((item) => {
    const matches = item.dataset.category === category;
    item.classList.toggle('hidden', !matches);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((button) => button.classList.remove('active'));
    tab.classList.add('active');
    filterMenu(tab.dataset.category);
  });
});

filterMenu('helados');
