
$(function() {
    $('#button').on('click', function(){
        var ip = $('#submit').val();
        getIP(ip);
    });


    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://netdetective.p.rapidapi.com/query?ipaddress=8.4.4.4',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
            'X-RapidAPI-Host': 'netdetective.p.rapidapi.com'
        }
    };
    
   
    $.ajax(settings).done(function (response) {
        console.log(response.result);
         /* Loop through response result */
        jQuery.each( response.result, function( title, value ) {
            var p = $('<p>').text(title + ": " + value + "." )
            $('body').append(p)
            return 
          });
    });

});

function getIP(ip){

}

function makeTables(){

}




