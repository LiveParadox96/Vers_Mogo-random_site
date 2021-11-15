let offset= 0;//отступ от левого края
const sliderLine= document.querySelector('.button_backround');
const nextButton= document.querySelector('.slider_next');
const prevButton= document.querySelector('.slider_prev');

let itemsShowed = 0
const widthItems = document.querySelector('.white').offsetWidth
let widthContainer = document.querySelector('.overflow').offsetWidth
let maxOffsetWidthList = -widthItems * document.querySelector('ul.backround_clients').querySelectorAll('.white').length

// itemsShowed = Math.round(widthContainer / widthItems) - 1
// console.log(itemsShowed) // 

if (window.screen.width > 500) {
    itemsShowed = 8
} else if (window.screen.width <= 500) {
    itemsShowed = 1
}

nextButton.addEventListener('click',function(){
    offset= offset - widthItems;
    if (offset < maxOffsetWidthList + (widthItems * itemsShowed)){
        offset = 0;
    }
    sliderLine.style.transform = "translateX(" + offset + "px)";
    
});

prevButton.addEventListener('click',function(){
    offset= offset + widthItems;
    if (offset > 0){
        offset = maxOffsetWidthList + (widthItems * itemsShowed);
    }
    sliderLine.style.transform = "translateX(" + offset + "px)";
});