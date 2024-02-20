// 2. feladat
// let count = 0;
window.addEventListener(
    'scroll',
    _.throttle(e => {
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
            document.documentElement.clientHeight
        );
        pBar.style.width = `${(window.scrollY / fullHeight) * 100}%`;
    }, 80)
);

// 3. feladat
const observer = new IntersectionObserver(
    entries => {
        // console.log(entries);
        for (const entry of entries) {
            if (entry.isIntersecting)
                entry.target.classList.add(
                    'animate__animated',
                    'animate__' + entry.target.dataset.scrollAnimation
                );
        }
    },
    { threshold: 1 }
);

document.querySelectorAll('[data-scroll]').forEach(element => observer.observe(element));

// 5. feladat
const navObserver = new IntersectionObserver(doTheTing, { threshold: 1 });
const nav = document.querySelectorAll('.nav-link');

function doTheTing(entities) {
    entities.forEach(entity => {
        if (entity.isIntersecting) {
            nav.forEach(n => {
                if (n.href.split('#')[1] === entity.target.id) {
                    n.classList.add('active');
                } else {
                    n.classList.remove('active');
                }
            });
        }
    });
}
document.querySelectorAll('section[id]').forEach(e => navObserver.observe(e));

// 6. feladat
function animateNumber(obj, start = 0, end, duration = 5000) {
    let startTimestamp = null;
    const step = timestamp => {
        if (!startTimestamp) {
            startTimestamp = timestamp;
        }
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
const number = document.querySelector('footer span');
animateNumber(number, 0, 2019, 1000);


// 7. feladat
count = 0;
const  backgrounds = document.querySelectorAll('.background');
for(const img of backgrounds) {
    img.addEventListener('mousemove', _.throttle(e => {
        console.log(count++);
        e.target.style.backgroundSize = '200%';
        const imgR = img.getBoundingClientRect();
        const xPos = (e.clientX - imgR.x) / imgR.width * 100;
        const yPos = (e.clientY - imgR.y) / imgR.height * 100;
        e.target.style.backgroundPosition = `${xPos}% ${yPos}%`;
    }, 20));
    img.addEventListener('mouseleave', e => {
        e.target.style.backgroundSize = null;
        e.target.style.backgroundPosition = null;
    });
}

