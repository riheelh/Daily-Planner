//global vars
var apm;
var wrapper = $('<container>').addClass('main-table');
var now = moment().hour()

// 

//display current day data on banner
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//create timeblocks 9 AM - 5 PM blocks
for(i=9; i<18; i++){
    var row = $('<tr>').addClass('row');
    wrapper.append(row);

    // var apmConvert = moment(i, "hh").format('LT')

    var textArea = $('<td>').addClass('present col-lg-8 col-md-4 col-sm-2').append('<textarea id=text wrap="hard">');
    // textArea.append('<textarea id=text wrap="hard">');
    var someText = $('textarea').value
    // console.log(someText)
    var save = $('<td>').addClass('saveBtn col-md-2 col-sm-1');
    var saveButton = $('<i>').addClass('fas fa-save fa-2x');
    
        if(i < 12) {
            apm = 'AM'
        } else {
            apm = 'PM'
        }
    var apmConvert = moment(i , 'HH:mm').format('hh')
    var time = $('<td>').addClass('hour col-md-2 col-sm-1').text(apmConvert + ` ${apm}`);

    //switch coloring between past, present & future.
        if (i < now ) {
            textArea.removeClass('present')
            textArea.addClass('past')
        } else if (i > now) {
            textArea.removeClass('present')
            textArea.addClass('future')
        }
  


    // console.log($.trim(someText))

   



    row.append(time, textArea, save);
    save.append(saveButton)
    
}

$('.container').append(wrapper);




