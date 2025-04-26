function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/3-tracos.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/x-fechar.png";
    }
}