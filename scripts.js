let slideVal = 0;
let prevSlide =1;
const ul = document.getElementsByClassName('dots');
let prev = document.documentElement.scrollTop;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let laterLoad = 0;
const r = document.querySelector(':root');
window.addEventListener('DOMContentLoaded', function () {
    var divs = document.getElementsByClassName('instant');

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];

        div.style.transitionDelay = (i * 0.15) + 's';
        setTimeout((div) => {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }, 100 * (i + 1), div);
    }
});

const loadIn = () => {
    var divs = document.getElementsByClassName('later');

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];

        div.style.transitionDelay = (i * 0.15) + 's';
        setTimeout((div) => {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }, 100 * (i + 1), div);
    }
}
const moveSlider = (percent, id) => {
    // const ul = document.getElementsByClassName('dots');
    const li = ul[0].getElementsByTagName('li');

    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(" active", "");
    li[id].className += " active";

    const slider = document.getElementsByClassName('slides');
    slider[0].style.transform = `translateX(-${percent}%)`;
    slideVal = percent;

    // divs[0].style.transform
}

const buttonMove = (state) => {
    // const ul = document.getElementsByClassName('dots');

    const li = ul[0].getElementsByTagName('li');
    const slider = document.getElementsByClassName('slides');
    const banner = document.getElementsByClassName('banner');
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(" active", "");
    prevSlide = slideVal;


    if (state == 0) {
        if (slideVal == 0)
            slideVal = 400;
        else
            slideVal -= 100;
    }
    if (state == 1) {
        if (slideVal == 400)
            slideVal = 0;
        else
            slideVal += 100;
    }
    slider[0].style.transform = `translateX(-${slideVal}%)`;
    li[slideVal / 100].className += " active";

}
function checkerFunction() {
    if (checker.checked) {
      // if (scroll > 1500)
      //   header.style.setProperty('background-color', 'rgba(4, 40, 37, 1)');
      // else
      //   header.style.setProperty('background-color', 'white');
      r.style.setProperty('--transition', '0');
    }
    else if (!checker.checked) {
        r.style.setProperty('--transition', '100%');
        // if (scroll > 1500)
        //   header.style.setProperty('background-color', 'white');
        // else
        //   header.style.setProperty('background-color', 'rgba(4, 40, 37, 1)');
      }
    
    }

function scrollFunction() {
    const body = document.body;
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if(scroll>=2200&&laterLoad==0){
        loadLoad=1;
        loadIn();
    }
    if (scroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
    console.log(scroll);
    //down
    if (scroll > prev && !body.classList.contains(scrollDown) && scroll > 60) {
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    }
    //up
    else if (scroll < prev && body.classList.contains(scrollDown) && scroll > 60) {
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);

      }
    prev = scroll;
    }
    window.onscroll = function () { scrollFunction() };
