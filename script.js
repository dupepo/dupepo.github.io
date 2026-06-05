const cover = document.querySelector('.cover');
const btn = document.getElementById('openBook');

btn.addEventListener('click', () => {
    cover.style.transform = 'rotateY(-180deg)';
});
