$(document).ready(function () {
    //select input
    let height, width, color;
    //Let user choose size of the grid
    $('#sizePicker').submit(function(event) {
      event.preventDefault();
      height = $('#inputHeight').val();
      width = $('#inputWeight').val();
      makeGrid(height, width);
    });
    //Make grid when user inputs size
    function makeGrid(row, column) {
      $('tbody').remove();
      $('#pixelCanvas').append('<tbody></tbody>');
      for (let row = 1; row <= height; row++) {
        $('tbody').append('<tr></tr>');
        for (let column = 1; column <= width; column++) {
          $('tr:last').append('<td></td>');
        }
      }
      //Let user choose color
      $('td').click(function(event){
        color = $('#colorPicker').val();  
        $( this ).css( "background-color", color );
      });
    }
    
});


