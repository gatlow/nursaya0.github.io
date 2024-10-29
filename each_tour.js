//handle rating
let stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach(star => {
            star.classList.add('star-shadow');
        });
        // color of unr
        stars.forEach(s => s.style.color = 'white');
        // rat
        for (let i = 0; i <= index; i++) {
            stars[i].style.color = 'gold';
        }
    });
});
const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');

readMoreBtn.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});