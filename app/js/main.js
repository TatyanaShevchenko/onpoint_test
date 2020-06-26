//line slider start
let lineSlider = document.getElementById("line-slider");
let line = document.querySelector(".line");
let lineSlides = document.querySelectorAll(".line-slider__item");

let lineWidth = 0;
let lineItemWidth = document.querySelector(".line-slider__item").offsetWidth;

let offset = 0;
let ost = 0;

let toggleActiveLine = document.querySelector(".toggle-line__active");
let width = 0;
let toggleIcon = document.querySelector(".toggle-icon");
let toggleActiveLineWidth = 0;


for (let i = 0; i < lineSlides.length; i++) {
    lineWidth += lineSlides[i].offsetWidth;
}

line.style.width = lineWidth + "px";

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
            makeMeSlideRight();
        }
        if (x > x0) {
            slideLeft = true;

            makeMeSlideLeft();
        }
        x = 0;
        isSliding = false;
    }
}

function onTouchEnd(event) {
    if (isSliding === true) {
        let touchend = event.changedTouches;
        x = touchend[0].pageX;

        if (x0 > x) {
            slideRight = true;
            makeMeSlideRight();
        }
        if (x > x0) {
            slideLeft = true;
            makeMeSlideLeft();
        }
        x = 0;
        isSliding = false;
    }
}

function drawLine(x, x0) {
    width = Math.abs(x - x0) + "px";
    return width;
}

function onPointerMove(event) {
    if (isSliding === true) {
        x = e.offsetX;
        toggleActiveLine.style.width = drawLine(x, x0);
        toggleIcon.style.left = drawLine(x, x0);

    }
};

function onTouchMove(event) {
    if (isSliding === true) {
        let touchend = event.changedTouches;
        x = touchend[0].pageX;
        while (Math.abs(x - x0) < 600) {
            toggleActiveLine.style.width = drawLine(x, x0);
            toggleIcon.style.left = drawLine(x, x0);
        }
    }
};
// Add event listeners

window.addEventListener("pointerdown", onPointerDown);
window.addEventListener("touchstart", onTouchStart);

window.addEventListener("pointerup", onPointerUp);
window.addEventListener("touchend", onTouchEnd);

window.addEventListener("pointermove", onPointerMove);
window.addEventListener("touchmove", onTouchMove);

//////////////////////////////

function makeMeSlideRight() {
    ost = lineWidth - offset - lineItemWidth;
    if (ost > 0) {
        offset += lineItemWidth;
        line.style.left = -offset + "px";
    }
}

function makeMeSlideLeft() {
    ost = lineWidth - offset - lineItemWidth;
    if (ost < lineWidth - lineItemWidth) {
        offset -= lineItemWidth;
        line.style.left = -offset + "px";
    }
}

//line slider end

//vertical slider start
let verticalSlider = document.getElementById("vertical-slider");
let column = document.querySelector(".column");
let verticalSlides = document.querySelectorAll(".vertical-slider__item");

let columnHeight = 0;
let columnItemHeight = document.querySelector(".vertical-slider__item")
    .offsetHeight;

let offsetVert = 0;
let ostVert = 0;
let isSlidingVert = false;
let slideDown = false;
let slideUp = false;

let dots = document.getElementsByClassName("slider-dots__item");
let backLights = document.getElementsByClassName("scroll-down");
let currentSlide = 1;

for (let i = 0; i < verticalSlides.length; i++) {
    columnHeight += verticalSlides[i].offsetHeight;
}

column.style.height = columnHeight + "px";
dots[0].classList.add("active");

function onPointerDownVert(event) {
    y0 = event.offsetY;
    isSlidingVert = true;
}

function onTouchStartVert(event) {
    let touch = event.touches;
    y0 = touch[0].pageY;
    isSlidingVert = true;
    // for (a = 0; a < backLights.length; a++) {
    //     backLights[a].style.display = "none";
    // }
}

function onPointerUpVert(event) {
    if (isSlidingVert === true) {
        y = event.offsetY;

        if (y0 > y) {
            slideDown = true;
            makeMeSlideDown();
        }
        if (y > y0) {
            slideUp = true;
            makeMeSlideUp();
        }
        y = 0;
        isSlidingVert = false;
    }
}

function onTouchEndVert(event) {
    if (isSlidingVert === true) {
        let touchendVert = event.changedTouches;
        y = touchendVert[0].pageY;

        if (y0 > y) {
            slideDown = true;
            makeMeSlideDown();
        }
        if (y > y0) {
            slideUp = true;
            makeMeSlideUp();
        }
        y = 0;
        isSlidingVert = false;
    }
}

// // Add event listeners

window.addEventListener("pointerdown", onPointerDownVert);
window.addEventListener("touchstart", onTouchStartVert);

window.addEventListener("pointerup", onPointerUpVert);
window.addEventListener("touchend", onTouchEndVert);

function makeMeSlideDown() {
    ostVert = columnHeight - offsetVert - columnItemHeight;
    if (ostVert > 0) {
        offsetVert += columnItemHeight;
        column.style.top = -offsetVert + "px";
        currentSlide += 1;
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[currentSlide - 1].classList.add("active");
        backLights[currentSlide - 1].style.display = "flex";
    }

}

function makeMeSlideUp() {
    ostVert = columnHeight - offsetVert - columnItemHeight;
    if (ostVert < columnHeight - columnItemHeight) {
        offsetVert -= columnItemHeight;
        column.style.top = -offsetVert + "px";
        currentSlide -= 1;
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[currentSlide - 1].classList.add("active");
        backLights[currentSlide - 1].style.display = "block";
    }
}

//vertical slider end

function setCurrentSlide(n) {
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[n - 1].classList.add("active");
    currentSlide = n;
    offsetVert = columnItemHeight * (n - 1);
    column.style.top = -offsetVert + "px";
}