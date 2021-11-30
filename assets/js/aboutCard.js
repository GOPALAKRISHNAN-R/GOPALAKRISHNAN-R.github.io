/*
    About Card js Developed on 30/10/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/aboutCard.json",
        function(data) {
            var about = ''

            $.each(data, function(key, value) {
                about += '<div class="col-sm-4 text-center">'
                about += '<div class="card">'
                about += '<div class="card-body">'
                about += '<a href="/products">'
                about += '<h5 class="card-title">'
                about += value.name
                about += '</h5>'
                about += '</a>'
                about += '<p class="card-text">'
                about += value.desc
                about += '</p>'
                about += '</div>'
                about += '</div>'
                about += '</div>'
            });

            $('#card-about').append(about);
        });

});