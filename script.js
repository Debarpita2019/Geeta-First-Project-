const readMoreBtn = document.querySelector('.read-more');
const fullText = document.querySelector('.full-text');

readMoreBtn.addEventListener('click', function () {
    fullText.classList.toggle('hidden');
    readMoreBtn.textContent = fullText.classList.contains('hidden') ? 'Read more' : 'Read less';
});
