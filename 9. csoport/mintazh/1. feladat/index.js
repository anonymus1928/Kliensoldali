// Forrás: https://www.alphavantage.co/
const data = {
    '2021-02-12': {
        open: '801.2600',
        high: '817.3300',
        low: '785.3306',
        close: '816.1200',
        volume: '23768313',
    },
    '2021-02-11': {
        open: '812.4400',
        high: '829.8799',
        low: '801.7250',
        close: '811.6600',
        volume: '21622753',
    },
    '2021-02-10': {
        open: '843.6350',
        high: '844.8200',
        low: '800.0200',
        close: '804.8200',
        volume: '35723444',
    },
    '2021-02-09': {
        open: '855.1200',
        high: '859.8000',
        low: '841.7500',
        close: '849.4600',
        volume: '15027305',
    },
    '2021-02-08': {
        open: '869.6700',
        high: '877.7700',
        low: '854.7500',
        close: '863.4200',
        volume: '20161719',
    },
    '2021-02-05': {
        open: '845.0000',
        high: '864.7700',
        low: '838.9700',
        close: '852.2300',
        volume: '18566637',
    },
    '2021-02-04': {
        open: '855.0000',
        high: '856.5000',
        low: '833.4200',
        close: '849.9900',
        volume: '15812661',
    },
    '2021-02-03': {
        open: '877.0200',
        high: '878.0800',
        low: '853.0646',
        close: '854.6900',
        volume: '18343510',
    },
    '2021-02-02': {
        open: '844.6800',
        high: '880.5000',
        low: '842.2006',
        close: '872.7900',
        volume: '23998098',
    },
    '2021-02-01': {
        open: '814.2900',
        high: '842.0000',
        low: '795.5601',
        close: '839.8100',
        volume: '25391385',
    },
};

const high = Array();
const low = Array();

Object.values(data).forEach(d => {
    high.push(parseFloat(d.high));
    low.push(parseFloat(d.low));
});

new Chart(document.querySelector('#tesla'), {
    type: 'line',
    data: {
        labels: Object.keys(data).reverse(),
        datasets: [
            {
                label: 'Napi legmagasabb értékek',
                data: high,
                borderColor: 'rgba(0, 56, 68, 1)',
                bachgroundColor: 'rgba(0, 56, 68, 0.2)',
            },
            {
                label: 'Napi legalacsonyabb értékek',
                data: low,
                borderColor: 'rgba(0, 108, 103, 1)',
                bachgroundColor: 'rgba(0, 108, 103, 0.2)',
            },
        ],
    },
});
