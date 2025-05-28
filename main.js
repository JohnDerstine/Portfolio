
var IsMobile = false;
const main = document.querySelector('main');
const tabs = document.querySelector('.Tabs');
const dropdown = document.querySelector('.DropdownContainer');
const body = document.body;
var width = 1400;

if (window.innerWidth <= 600) {
    main.removeChild(tabs);
}
else if (window.innerWidth > 600) {
    main.removeChild(dropdown);
}
ResizeBackground()

window.addEventListener("resize", (event) => {
    if(window.innerWidth <= 600 && !IsMobile) {
        SwitchToMobile();
    }
    else if (window.innerWidth > 600 && IsMobile) {
        SwitchToDesktop();
    }
    ResizeBackground();
});

function SwitchToMobile(){
    main.removeChild(tabs);
    main.insertBefore(dropdown, main.firstChild);
    IsMobile = true;
}

function SwitchToDesktop(){
    main.removeChild(dropdown);
    main.insertBefore(tabs, main.firstChild);
    IsMobile = false;
}

function ResizeBackground() {
    if(window.innerWidth > width)
    {
        body.style.backgroundSize = window.innerWidth.toString() + "px";
    }
    else
    {
        body.style.backgroundSize = (width).toString() + "px";
        body.style.backgroundPositionX = ((window.innerWidth - width) / 2).toString() + "px";
    }
}