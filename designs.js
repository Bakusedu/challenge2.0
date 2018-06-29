$(document).ready(function(){
    $('#sizePicker').submit(function (event) {
        $('tr').remove();
        event.preventDefault();
        var rows = $('#inputHeight').val(); //variable "row" holding the value of the height of the grid
        var col = $('#inputWeight').val();  //variable "col" holding the value of the height of the grid
        makeGrid(rows,col);     //called the makeGrid() function, rows and col passed as an arguement
    });
});
    function makeGrid(height,width){    //function makeGrid(parameterList1,parameterList2)

    
        for(var i=1;i<=height;i++){
                $('#pixelCanvas').append('<tr></tr>');
                for(var j=1;j<=width;j++){
                    $('tr:last').append('<td></td>');
                    $('td').attr('class','colour');     //adds the attribute 'class="colour"' to the td tag
                }
        }
        $('.colour').click(function(event){
            if($(this).attr('style')){         //condition to check whether the  'class="colour"' contains an attribute 'style'        
                $(this).removeAttr('style');    //removes the attribute using the 'removeAttr()' function
            }
            else{
                var color = $('#colorPicker').val();            // if it doesn't contain an attribute 'style',
                $(event.target).css('background-color',color);    //  it adds a style attribute using the css() function 
            }
        });
        
    }
  




