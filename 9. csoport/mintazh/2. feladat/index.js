function getThreshold(step) {
    let thresholds = [];

    thresholds.push(0);
    for (let i = 1.0; i <= step; i++) {
        let ratio = i / step;
        thresholds.push(ratio);
    }

    return thresholds;
}
// console.log(getThreshold(100));

const observer = new IntersectionObserver(onObserv, { threshold: getThreshold(100) });

function onObserv(records) {
    records.forEach(record => {
        // console.log(record.boundingClientRect, window.innerHeight);
        // console.log(((window.innerHeight / 2 - record.boundingClientRect.y) / record.boundingClientRect.height) * 100);
        const ratio =
            ((window.innerHeight / 2 - record.boundingClientRect.y) /
                record.boundingClientRect.height) *
            100;

        console.log(ratio, 1 - ratio);

        record.target.style.background = `linear-gradient(to bottom, rgb(0, 56, 68) ${ratio}%, rgb(0, 108, 103) ${
            1 - ratio
        }%)`;
    });
}

observer.observe(document.querySelector('.square'));
