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
                ipDetails(ip);
            }
            else {
                $('#trueValue').text('Not a real IP address');
    
            }
        }
    });

    $('#modalB').on('click', function(event) {
        $('#exampleModalLong').modal('show');
    });

    $('#closeMod').on('click', function(event) {
        $('#exampleModalLong').modal('hide');
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
            var tr =  $('<tr>');
            var td1 = $('<th>').text(title.substring(2) + ": ");
            var td2 = $('<td>');
            if (value == true) {
                var icon = $('<i>').attr('class', 'fa-solid fa-check');
            } else if (value == false){
                var icon = $('<i>').attr('class', 'fa-solid fa-x');
            } else{
                td1 = $('<th>').text(title);
                td2 = $('<td>').text(value);
            }
            tr.attr('id', 'ipTable');
            td1.attr('id', 'ipTitle');
            td2.attr('id', 'ipValue');
            $(td2).append(icon)
            $(tr).append(td1);
            $(tr).append(td2);
            $("#info").append(tr); 
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

function map() {




    url = "https://api.ip2location.io/?key=733750BFD4A6B2D98642ADE29D0792EF&ip=8.4.4.4&format=json"

    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

    });


}

function ipDetails(ip){
    
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://ip-lookup-by-api-ninjas.p.rapidapi.com/v1/iplookup?address=' + ip,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e836cf5203msh52715a7d81a978ap1eb4a7jsne7d2dd82308e',
            'X-RapidAPI-Host': 'ip-lookup-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        var lon = response.country_code;
        var lan = response.country;
        var url = 'https://maps.googleapis.com/maps/api/staticmap?center='+ lan +','+ lon +'&zoom=14&size=400x400&key=AIzaSyCOQkNEyO14HP3c0qqf-C8_SI8pIX3nNN8&' 
        $('#isp').text(response.isp);
        $('#country').text(response.country);
        $('#region').text(response.region);
        $('#regCode').text(response.region_code);
        
        var map = $('<img>').attr('src', url);
        $('#map-container').append(map)
    });
}

