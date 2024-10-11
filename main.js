import './style.css';

const pages = ['page1', 'page2', 'page3'];
let currentPage = 0;

const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    const pageElement = document.getElementById(page);
    pageElement.style.display = index === pageIndex ? 'block' : 'none';
  });

  backBtn.style.display = pageIndex > 0 ? 'inline-block' : 'none';
  nextBtn.textContent = pageIndex === pages.length - 1 ? 'Submit' : 'Next ->';
}

function validateCurrentPage() {
  const currentPageElement = document.getElementById(pages[currentPage]);
  const inputs = currentPageElement.querySelectorAll('input');
  return Array.from(inputs).every(input => input.value.trim() !== '');
}

backBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (validateCurrentPage()) {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    } else {
      // Handle form submission here
      alert('Form submitted successfully!');
    }
  } else {
    alert('Please fill in all fields before proceeding.');
  }
});

// Initialize the first page
showPage(currentPage);