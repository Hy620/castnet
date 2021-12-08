var pars = {
    rotateNum: 8,
    body: '.wrapper',
    clickCb: clickCbFun,
    renderCb: renderCbFun
}

var lottery = new Lottery(pars);
function clickCbFun() {
    var random = Math.floor(Math.random() * 360);
    lottery.goRotate(random);
}
function renderCbFun(deg) {
    var str = '';
    if(deg >= 0 && deg < 45 || deg >= 180 && deg < 225) {
        str = '吃麥當勞冰淇淋🍦';
    }else if(deg >= 45 && deg < 90 || deg >= 225 && deg < 270) {
        str = '吃聖誕巧克力🍫';
    }else if(deg >= 90 && deg < 135 || deg >= 270 && deg < 315) {
        str = '喝暖暖豆乳粉☕️';
    }else if(deg >= 135 && deg < 180) {
        str = '選任何你想吃的✨';
    }else if(deg >= 315 && deg < 360) {
        str = '拿專屬塗鴉貼紙✨';
    }
    alert('💁🏻這個冬天，喀報請你'+str);
}