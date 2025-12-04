const groupIcon3 = document.querySelector('#bitmap-icon3');
const groupIcon = document.querySelector('#group-icon');
const bitmapGroup = document.querySelector('#bitmap-group');

groupIcon.addEventListener('click', () => bitmapGroup.style.display = 'none');
groupIcon3.addEventListener('click', () => bitmapGroup.style.display = 'block');