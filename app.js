let items = document.querySelectorAll('.slider .list .item');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0
    }
    showSlider();
}

function showSlider() {
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailItemOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove('active');
    thumbnailItemOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshIn);
    refreshIn = setInterval ( () => {
        next.click();
    }, 5000);
}

prev.onclick = function(){
    itemActive = itemActive -1;
    if (itemActive < 0 ) {
        itemActive = countItem -1
    }
    showSlider();
} 

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider()
    })
})

let refreshIn = setInterval ( () => {
    next.click();
}, 5000);