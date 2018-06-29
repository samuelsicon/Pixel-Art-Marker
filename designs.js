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
    function makeGrid(x, y) {
      $('tbody').remove();
      $('#pixelCanvas').append('<tbody></tbody>');
      for (let row = 1; row <= x; row++) {
        $('tbody').append('<tr></tr>');
        for (let column = 1; column <= y; column++) {
          $('tr:last').append('<td></td>');
        }
      }
      //Let user choose color
      $('td').click(function(event){
        $( this ).css( "background-color", color );
      });
    }
    //Let user select color
    $('#colorPicker').change(function(event){
      color = $('#colorPicker').val();
    });
});


