//global vars
var apm;
var wrapper = $('<container>').addClass('main-table');
var now = moment().hour()

//display current day data on banner
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//create timeblocks 9 AM - 5 PM blocks
for(i=9; i<18; i++){
    var row = $('<tr>').addClass('row');
    wrapper.append(row);

    // style elements with bootstrap grid system
    var textArea = $('<td>').addClass('present col-lg-8 col-md-4 col-sm-2').append('<textarea id=text wrap="hard">');
    var save = $('<td>').addClass('saveBtn col-md-2 col-sm-1');
    // create save button
    var sbtn = $('<i>').addClass('subBtn fas fa-save fa-2x');
    var saveButton = $('<button>')
    saveButton.append(sbtn)
    // findout AM / PM 
        if(i < 12) {
            apm = 'AM'
        } else {
            apm = 'PM'
        }
    // append time on timeblocks
    var apmConvert = moment(i , 'HH:mm').format('hh')
    var time = $('<td>').addClass('hour col-md-2 col-sm-1').text(apmConvert + ` ${apm}`);

    //switch coloring feature between past, present & future.
        if (i < now ) {
            textArea.removeClass('present')
            textArea.addClass('past')
        } else if (i > now) {
            textArea.removeClass('present')
            textArea.addClass('future')
        }
    //function to save input in local storage
    var something = $('textarea').val()
        $(saveButton).click(function(e){
            console.log('clicked');
        });
        $(saveButton).on('click', function() {
            localStorage.setItem('event', something)
        })  

    // apend blocks to main row
    row.append(time, textArea, save);
    save.append(saveButton)
    
}
//append all elements to container Div
$('.container').append(wrapper);

