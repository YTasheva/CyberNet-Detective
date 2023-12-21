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
            var p = $('<p>').text(title + ": ");
            if (value == true) {
                var icon = $('<img>').attr('src', 'assets/Images/icons8-check-50.png');
            } else {
                var icon = $('<img>').attr('src', 'assets/Images/icons8-cross-50.png');
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




    url = "https://api.ip2location.io/?key=733750BFD4A6B2D98642ADE29D0792EF&ip=8.4.4.4&format=json"

    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

    });


}

