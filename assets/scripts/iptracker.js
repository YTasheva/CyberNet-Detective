
$(function() {
    $('#search-button').on('click', function(event){
        event.preventDefault();
        var ip = $('#search-input').val();
        getIP(ip);
    });




});

function getIP(ip){
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://netdetective.p.rapidapi.com/query?ipaddress=' + ip,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
            'X-RapidAPI-Host': 'netdetective.p.rapidapi.com'
        }
    };
    
   
    $.ajax(settings).done(function (response) {
        console.log(response);
         /* Loop through response result */
        jQuery.each( response.result, function( title, value ) {
            if (value == true){
                var p = $('<p>').text(title + ": ");
                var icon = $('<img>').attr('src', 'assets/Images/icons8-check-50.png');
                p.append(icon)
            } else{
                var p = $('<p>').text(title + ": ");
                var icon = $('<img>').attr('src', 'assets/Images/icons8-cross-50.png');
                p.append(icon)
            }
            
            $('body').append(p)
            return 
          });
    });
}


