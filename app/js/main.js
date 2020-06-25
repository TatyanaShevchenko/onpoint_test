// let slideNumber = 1;
// showSlides(slideNumber);

// function setCurrentSlide(n) {
//     showSlides(slideNumber = n);
// }

// function next() {
//     showSlides(slideNumber += 1);
// }

// function prev() {
//     showSlides(slideNumber -= 1);
// }

// function showSlides(n) {
//     const slides = document.getElementsByClassName("slider__item");
//     const dots = document.getElementsByClassName("slider-dots__item");
//     if (n > slides.length) {
//         slideNumber = 1;
//     }
//     if (n < 1) {
//         slideNumber = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideNumber - 1].style.display = "block";
//     dots[slideNumber - 1].className += " active";
// }

//line slider start
let lineSlider = document.getElementById("line-slider");
let line = document.querySelector(".line");
let lineSlides = document.querySelectorAll(".line-slider__item");


//let lineSliderWidth = document.querySelector(".line-slider").offsetWidth;
let lineWidth = 0;
let lineItemWidth = document.querySelector(".line-slider__item").offsetWidth;


let offset = 0;
let ost = 0;


for (let i = 0; i < lineSlides.length; i++) {
    lineWidth += lineSlides[i].offsetWidth;
}
console.log('lineWidth=' + lineWidth);


line.style.width = lineWidth + "px";


// let isSliding = false;
// let slideRight = false;
// let slideLeft = false;
// let x0 = 0;
// let x = 0;

// since you will need them later to deregister the event
// let touch

function onPointerDown(event) {
    x0 = event.offsetX;
    isSliding = true;
}

function onTouchStart(event) {
    let touch = event.touches;
    x0 = touch[0].pageX;
    isSliding = true;
}


function onPointerUp(event) {
    if (isSliding === true) {
        x = event.offsetX;
        if (x0 > x) {
            slideRight = true;
            makeMeSlide();
        }
        if (x > x0) {
            slideLeft = true;

            makeMeSlideReverse();
        }
        x = 0;
        isSliding = false;
    }
}


function onTouchEnd(event) {
    console.log('отпустил мышь');
    console.log('isSliding=' + isSliding);
    if (isSliding === true) {
        // x = event.offsetX;
        // let untouch = event.touches[0];
        // x = untouch.pageX;
        let touchend = event.changedTouches;
        // let count = touchend.length;
        // console.log('count=' + count);
        x = touchend[0].pageX;
        console.log('x=' + x);
        if (x0 > x) {
            slideRight = true;
            makeMeSlide();
        }
        if (x > x0) {
            slideLeft = true;
            // console.log('slideLeft = true');
            makeMeSlideReverse();
        }
        x = 0;
        isSliding = false;
        // console.log('isSliding = false;');
    }
}

// Add event listeners

window.addEventListener("pointerdown", onPointerDown);
window.addEventListener("touchstart", onTouchStart);

window.addEventListener("pointerup", onPointerUp);
window.addEventListener("touchend", onTouchEnd);



//////////////////////////////


function makeMeSlide() {
    ost = lineWidth - offset - lineItemWidth;
    if (ost > 0) {
        offset += lineItemWidth;
        line.style.left = -offset + "px";
    }
    // console.log('ost=' + ost);
    // console.log('lineWidth=' + lineWidth);
    // console.log('lineItemWidth=' + lineItemWidth);
    // console.log('offset=' + offset);
};

function makeMeSlideReverse() {
    ost = lineWidth - offset - lineItemWidth;
    if (ost < (lineWidth - lineItemWidth)) {
        offset -= lineItemWidth;
        line.style.left = -offset + "px";
    }
    // console.log('ost=' + ost);
    // console.log('lineWidth=' + lineWidth);
    // console.log('lineItemWidth=' + lineItemWidth);
    // console.log('offset=' + offset);
};



// lineSlider.onclick = makeMeSlide;

// lineSlider.onclick = function() {
//     ost = lineWidth - offset - lineItemWidth;

//     if (ost > 0) {
//         offset += lineItemWidth;
//         line.style.left = -offset + "px";
//     }
//     // console.log('ost=' + ost);
//     // console.log('lineWidth=' + lineWidth);
//     // console.log('lineItemWidth=' + lineItemWidth);
//     // console.log('offset=' + offset);
// }

//line slider end