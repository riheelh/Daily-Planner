//global vars
var apm;
var wrapper = $('<container>').addClass('main-table');
var now = moment().hour()

//display current day data on banner
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

function createRows() {
    //create timeblocks 9 AM - 5 PM blocks
    for (i = 9; i < 18; i++) {
        var row = $('<tr>').addClass('row');
        wrapper.append(row);

        // style elements with bootstrap grid system
        var textareaEl = $('<textarea>').attr('wrap', 'hard').attr('id', `text-${i}`).val(localStorage.getItem(i))
        var textArea = $('<td>').addClass('present col-lg-8 col-md-4 col-sm-2').append(textareaEl);
        // create save button and add unique id for each button
        var save = $('<button>').addClass('saveBtn col-md-2 col-sm-1');
        save.attr('id', 'button-'+i)
        // add the save icon from fontawesome to button celll
        var sbtn = $('<i>').addClass('subBtn fas fa-save fa-2x');
        save.append(sbtn)
        // findout AM / PM 
            if (i < 12) {
                apm = 'AM'
            } else {
                apm = 'PM'
            }
        // append time on timeblocks
        var apmConvert = moment(i, 'HH:mm').format('hh')
        var time = $('<td>').addClass('hour col-md-2 col-sm-1').text(apmConvert + ` ${apm}`);

        //switch coloring feature between past, present & future.
            if (i < now) {
                textArea.removeClass('present')
                textArea.addClass('past')
            } else if (i > now) {
                textArea.removeClass('present')
                textArea.addClass('future')
            }
        // append the cells to timeblocks
        row.append(time, textArea, save);
        
    }
    //append all elements to container Div
    $('.container').append(wrapper);
}

//create timeblocks
createRows();

//save button function
$('button').click(function (event) {
    //extract the hour and associated text area cell usuing jQuery 
    let hour = $(this)[0].id.split('-')[1];
    let data = $(this).prev().children().val();
    console.log(data);
    //set localstorage hour, value from textarea
    localStorage.setItem(hour, data);
});
