// 2. feladat
let count = 0;
window.addEventListener('scroll', _.throttle(e => {
    document.querySelector('nav').classList.toggle('navbar-scrolled', window.scrollY > 200);
    // console.log(count++);

    // 4. feladat
    pBar = document.querySelector('.progress-bar');
    const fullHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
    );
    pBar.style.width = `${(window.scrollY / fullHeight) * 100}%`
}, 80));

// 3. feladat
const observer = new IntersectionObserver(entries => {
    console.log(entries);
    for (const entry of entries) {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__' + entry.target.dataset.scrollAnimation);
        }
    }
}, { threshold: 1 });

document.querySelectorAll('[data-scroll]').forEach(element => observer.observe(element));
