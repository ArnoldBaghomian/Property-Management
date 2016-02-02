$(document).ready(init);

function init() {
    $('.saveIt').on('click', changeEntry);
}

function changeEntry() {
    var entry = {};

    entry.apartment = $('#apartment').val();
    entry.tenant = ($('#tenant').val());
    entry.cost = ($('#cost').val());
    entry.rooms = $('#rooms').val();
    entry.roomsA = $('#roomsA').val();


    var itemId = $('#id').val();
    $.ajax({
            method: 'PUT',
            url: '/operations/' + itemId,
            data: entry
        })
        .done(function (data, status) {
            location.href('/apartment');
        });
}
