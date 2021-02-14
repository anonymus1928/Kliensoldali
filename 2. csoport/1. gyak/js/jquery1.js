// console.log($('li'));
// console.log(document.querySelectorAll('li'));

// console.log($('.navbar-brand'));
// console.log(document.querySelectorAll('.navbar-brand'));



// $('.card-header').each(function() {
//     const $header = $(this);
//     const db = $header.next().children().length;
//     $header.append(` (${db})`);
// });

document.querySelectorAll('.card-header').forEach(header => {
    const db = header.nextElementSibling.children.length;
    header.innerHTML += ` (${db})`;
});









$('.card-header')
    .append($('<button class="btn btn-primary">Expand</button>'))
    .find('button')
        .on('click', function (e) {
            $(this).closest('.card').parent()
                .toggleClass('col-lg-4 col-lg-12')
        })