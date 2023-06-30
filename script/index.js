const menu = document.querySelector('.menu');
const bar1 = document.querySelector('.top');
const bar2 = document.querySelector('.bottom');
const menuList = document.querySelector('.mobile-menu');
var clicked = false;
menu.addEventListener('click', function menuDisplay() {
    clicked = !clicked;
    if (clicked) {
        bar1.style.transform = 'rotate(45deg) translateX(10px) translateY(10px)';
        bar2.style.transform = 'rotate(-45deg)';
        menuList.style.opacity = '1';
    }
    else {
        bar1.style.transform = 'rotate(0)';
        bar2.style.transform = 'rotate(0)';
        // menuList.style.display = 'none';
        menuList.style.opacity = '0';



    }
});

console.log(menuList);