//global vars
var eventTable = document.querySelector('table')


// display current day data on banner
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today)


// create timeblocks 9 AM - 5 PM, bloacks are editiable

var table = $('<table>').addClass('main-table');
for(i=0; i<9; i++){
    var row = $('<tr>').addClass('event-bar')
    table.append(row);
    var td =$('<td>').addClass('event-cell time-td').text('result'+ i);
    row.append(td)
    var td1 =$('<td>').addClass('event-cell1 text-td')
    row.append(td1)
    var td2 =$('<td>').addClass('event-cell1 save-td')
    row.append(td2)
}

$('#table').append(table);

// button to save the block data in local storage.
// color code for blocks indicates past and present


// 







