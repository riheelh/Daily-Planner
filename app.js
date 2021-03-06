//global vars
var eventTable = document.querySelector('table')


// display current day data on banner
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today)


// create timeblocks 9 AM - 5 PM blocks
var wrapper = $('<container>').addClass('main-table');
for(i=9; i<18; i++){
    var row = $('<tr>').addClass('row');
    wrapper.append(row);
    row.append($('<td>').addClass('hour col-md-2 col-sm-1').text(i));
    row.append($('<td>').addClass('present col-lg-8 col-md-4 col-sm-2'))
    row.append($('<td>').addClass('saveBtn col-md-2 col-sm-1'))
    

}
$('.container').append(wrapper);

// button to save the block data in local storage.
// color code for blocks indicates past and present

   
// var wrapper = $('<container>').addClass('main-table');
// for(i=9; i<18; i++){
//     var row = $('<tr>').addClass('event-row')
//     wrapper.append(row);
//     var td =$('<td>').addClass('event-cell time-td').text(i);
//     row.append(td)
//     var td1 =$('<td>').addClass('event-cell1 text-td')
//     row.append(td1)
//     var td2 =$('<td>').addClass('event-cell1 saveBtn')
//     row.append(td2)
// }

// $('.container').append(wrapper);