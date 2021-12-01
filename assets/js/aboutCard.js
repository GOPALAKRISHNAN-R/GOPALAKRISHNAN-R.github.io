/*
    About Card js Developed on 30/10/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/aboutCard.json",
        function(data) {
            var about = ''

            $.each(data, function(key, value) {

                about += '<div class="col-lg-4 col-md-6 text-center">'
                about += '<div class="mt-5 shadow p-3 mb-5 bg-body rounded zoom">'
                about += '<a class="hover-fx">'
                if (value.id === 1) {
                    about += '<i class="fas fa-plane text-primary"></i>'
                } else {
                    about += '<i class="fas fa-magnet text-primary"></i>'
                }
                about += '</a>'
                about += '<a href="/products">'
                about += '<h3 class="h4 mb-2">'
                about += value.name
                about += '</h3>'
                about += '</a>'
                about += '<br>'
                // about += '<ul style="list-style-type:circle">'
                about += '<p class="text-muted text-center mb-0">'
                about += value.desc
                about += '</p>'
                about += '<br>'
                // about += '</ul>'
                about += '</div>'
                about += '</div>'


                // about += '<div class="col-lg-4 col-md-6 col-sm-12 text-center">'
                // about += '<div class="card">'
                // about += '<i class="fa fa-magnet"></i>'
                // about += '<div class="card-body">'
                // about += '<a href="/products">'
                // about += '<h5 class="card-title">'
                // about += value.name
                // about += '</h5>'
                // about += '</a>'
                // about += '<p class="card-text">'
                // about += value.desc
                // about += '</p>'
                // about += '</div>'
                // about += '</div>'
                // about += '</div>'

            });

            $('#card-about').append(about);
        });

});