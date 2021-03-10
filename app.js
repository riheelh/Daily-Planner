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
        var save = $('<button>').addClass('saveBtn col-md-2 col-sm-1');
        save.attr('id', 'button-'+i)
        // create save button
        var sbtn = $('<i>').addClass('subBtn fas fa-save fa-2x');
        //var saveButton = $('<button>')
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
    // let id = $(this)[0].id;
    // console.log(id)
    let hour = $(this)[0].id.split('-')[1];
    // console.log(hour[1])
    let data = $(this).prev().children().val();
    console.log(data);
    //set localstorage hour, value from textarea
    localStorage.setItem(hour, data);
});

//use split to get the hour from the button, this will return an array of strings, get the index of the array that has the hour "buttton-9" and you split at "-", this will be an array [button, 9]
//use the hour from the split
//find the textarea associated to this row from the hour parsed, we have our textarea ids as textarea-9 etc "textarea-"+ hour, string concatenation 
//this will be a variable assigned to the query select of the textarea using id of the textarea
//after we find the textarea id, convert to a jquery element from the id and parse the value using .val() $(querySelectorEl)
//function getStoredItems
//load all the saved items 
//loop through all the rows, $("textarea") = all rows / .each() or forEach(row), or for-loop 
//localStorage.getItem(hour, value)