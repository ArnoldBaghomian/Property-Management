$(document).ready(init);

function init() {
    console.log('inside init of makeEntry.js');
    $('.btn-success').on('click', makeEntry);
}
function makeEntry() {
    var apartment = $('#apartment').val();
    var tenant = $('#tenant').val();
    var cost = $('#cost').val();
    var rooms = $('#rooms').val();
    var roomsA = $('#roomsA').val();

    var apartmentInfo = {
        apartment: apartment,
        tenant: tenant,
        cost: cost,
        rooms: rooms,
        roomsA: roomsA
    };
    console.log('make entry', apartmentInfo)
    $.post('/operations', apartmentInfo)
        .success(function (data) {
            //alert('saved');


        });
}