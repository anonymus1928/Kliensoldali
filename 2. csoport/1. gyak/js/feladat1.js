/*window.addEventListener('scroll', (e) => {
    document.querySelector('nav').classList.toggle('navbar-scrolled', window.scrollY > 200);
    console.log('asdf');
}); */


window.addEventListener('scroll', _.throttle(() => {
    document.querySelector('nav').classList.toggle('navbar-scrolled', window.scrollY > 200);
}), 80)