const button = document.querySelector('#heart-button');
let isLiked = false;
button.addEventListener('click', () => {
    isLiked = !isLiked;
    if (isLiked) {
        button.style.color = 'green';

    } else {
        button.style.color = 'gray';
    }
});