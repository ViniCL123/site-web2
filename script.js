const button = document.querySelectorAll('.card-buttons');
const modal = document.querySelector('dialog');
const buttonClose = document.querySelector('dialog button');


button.forEach(button => {
    button.onclick = function() {
        modal.showModal();
    }
});


buttonClose.onclick = function() {
    modal.close();
}



$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

});

