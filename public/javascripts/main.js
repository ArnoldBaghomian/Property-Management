$(document).ready(init);

var sumCost = 0;
var rowArray = [];
var itemArray = [];

function init() {
    console.log('!!!inside init of main.js');
    $('.items-list').on('click', '.detail-col', showDetail);
    $('.items-list').on('click', '.change-col', changeEntry);
    $('.items-list').on('click', '.delete-col', deleteEntry);
    showList();
}


function changeEntry() {
    var indexOfItem = $(this).closest('.row-container').index()-1;
    var itemObject = itemArray[indexOfItem];
    var itemId = itemObject._id;
    location.href = '/apartment/changeEntry' + itemId;
}

function deleteEntry() {

    var index = $(this).closest('.row-container').index()-1;

    var id = itemArray[index]._id;

    $.ajax({
            method: "DELETE",
            url: "/operations/" + id
        })
        .done(function (status) {
            sumCost = 0;
            showList();
        });

}

function findSum() {
    itemArray.map(function (item, index) {
        return sumCost += item.cost * item.number;
    });
}

function showDetail() {
    var index = $(this).closest('.row-container').index()-1;
    var id = itemArray[index]._id;
    location.href = '/apartment/itemDetails' + id;
}

function makeTable() {
    $('.items-list').empty();  // empty the html table
    rowArray.splice(0, rowArray.length); //empty the global array

    var $headers = $('<tr>').addClass('row row-container row-title');

    var $apartmentth = $('<th>').addClass('item-col col-md-1 col-xs-1').text('apartment');
    var $costth = $('<th>').addClass('item-col col-md-1 col-xs-1').text('cost');
    var $tenantth = $('<th>').addClass('item-col col-md-2 col-xs-2').text('tenant');
    var $roomth = $('<th>').addClass('item-col col-md-1 col-xs-1').text('rooms');
    var $roomath = $('<th>').addClass('item-col col-md-1 col-xs-1').text('Rooms Availble');
// two more rows
    $headers.append($apartmentth);
    $headers.append($costth);
    $headers.append($tenantth);
    $headers.append($roomth);
    $headers.append($roomath);

    rowArray.push($headers);

    itemArray.map(function (entry) {
        var $row = $('<tr>').addClass('row row-container');
        var $item = $('<td>').addClass('item-col col-md-2 col-xs-2 text-left').text(entry.apartment);
        var $cost = $('<td>').addClass('cost-col col-md-1 col-xs-1').text('$' + entry.cost);
        var $number = $('<td>').addClass('number-col col-md-1 col-xs-1').text('' + entry.tenant);
        var $roomsOne = $('<td>').addClass('number-col col-md-1 col-xs-1').text('' + entry.rooms);
        var $roomsLetter = $('<td>').addClass('number-col col-md-1 col-xs-1').text('' + entry.roomsA);

        var $details = $('<td>').addClass("detail-col col-md-2 col-xs-2 btn-info btn-circle details").text('Details');
        var $spaceColumn = $('<td>').addClass("space-col col-md-1 col-xs-1").text(' ');
        var $change = $('<td>').addClass("change-col col-md-2 col-xs-2 btn-primary btn-circle changeEntry").text('Change');
        var $spaceColumn2 = $('<td>').addClass("space-col col-md-1 col-xs-1").text(' ');
        var $delete = $('<td>').addClass("delete-col col-md-2 col-xs-2 btn-danger btn-circle deleteEntry").text('Delete');
        $row.append($item);
        $row.append($cost);
        $row.append($number);
        $row.append($roomsOne);
        $row.append($roomsLetter);
        $row.append($details);
        $row.append($spaceColumn);
        $row.append($change);
        $row.append($spaceColumn2);
        $row.append($delete);
        rowArray.push($row);
    });

}

function showList() {
    $.get('/operations', function (data) {
        itemArray = data;
        findSum();
        makeTable();
        showTable();
    });
}

function showTable() {
    $('.items-list').append(rowArray);
    $('.bottomLine').text(''+sumCost.toFixed(2));
}