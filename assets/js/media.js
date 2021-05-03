$(document).ready(function() {
    $.getJSON("/media/media.json",
        function(data) {
            var media = '';
            $.each(data, function(key, value) {

                media += '<div class="col-lg-4 col-sm-4 text-center zoom">'
                media += '<div class="mt-5 mr-2 containers">'
                // media += '<a target="_blank" href="' + value.value + '">'
                media += '<img class="img-thumbnail zoom edge work-shop" src="' + value.image + '">'
                // media += '</a>'
                media += '<div class="overlay">'
                media += '<a target="_blank" href="' + value.value + '" class="icon" title="Click To View">'
                media += '<i class="fa fa-play"></i>'
                media += '</a>'
                media += '</div>'
                media += '</div>'
                media += '</div>'

            });
            $('#container').append(media);
        });
    $.getJSON("/media/featuredin.json",
        function(data) {
            var featured = '';
            $.each(data, function(key, value) {
                featured += '<div class="col-lg-4 col-sm-4 mb-3">'
                featured += '<img class="img-fluid" src="' + value.logo + '" alt="" />'
                featured += '</div>'
            });
            $('#featured').append(featured);
        });
});