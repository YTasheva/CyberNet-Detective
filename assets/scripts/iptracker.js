var terms = false
$(function () {
    getTerms();

    $('#saveTerms').on('click', function(event) {
        event.preventDefault();
        terms = true
        localStorage.setItem("terms", JSON.stringify(terms));
    });

    $('#search-button').on('click', function (event) {
        event.preventDefault();
        $(".map-container").empty();
        if (terms == false) {
            $('#terms').modal('show');
        } else {
            var ip = $('#search-input').val();
            var ipaddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
            if (ipaddress.test(ip)) {
                getIP(ip);
                old();
            }
            else {
                $('#trueValue').text('Not a real IP address');

            }
        }
    });


});

function getIP(ip) {
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
        jQuery.each(response.result, function (title, value) {
            var p = $('<p>').text(title.substring(2) + ": ");
            if (value == true) {
                var icon = $('<i>').attr('class', 'fa-solid fa-check');
            } else if (value == false){
                var icon = $('<i>').attr('class', 'fa-solid fa-x');
            } else{
                p = $('<p>').text(title + ": " + value);
            }
            p.append(icon)
            $(".map-container").append(p);
            return
        });


    });


}


function getTerms() {
    var getTerms = JSON.parse(localStorage.getItem("terms"));
    if (getTerms !== null) {
        terms = getTerms;
    }
}

function old() {
    var lan = "40.714728"
    var lon = "-73.998672"
    var map = "https://maps.googleapis.com/maps/api/staticmap?center="+ lan +","+ lon +"&zoom=12&size=400x400&key=AIzaSyCOQkNEyO14HP3c0qqf-C8_SI8pIX3nNN8"
    
    var mapImg = $("<img>").attr('src', map)
    $(".map-container").append(mapImg);

}

