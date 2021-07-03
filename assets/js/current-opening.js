$(document).ready(function() {


    $.getJSON("/careers/join-us/current-openings.json",
        function(data) {
            var currentOpening = '';
            $.each(data, function(key, value) {
                currentOpening += '<div class="col-lg-4 col-md-6 col-sm-12">'
                currentOpening += '<h4 class="text-primary text-center">' + value.position_name + '</h4>'
                currentOpening += '<br>'
                currentOpening += '<p class="text-muted"><b>' + value.headquarters + ' </b>' + value.headquarters_name + '</p>'
                currentOpening += '<p class="text-muted"><b>' + value.employment + ' </b>' + value.employment_type + '</p>'
                currentOpening += '<br>'
                currentOpening += '<p class="text-center"><a class="btn btn-primary btn-md js-scroll-trigger" href="'+value.apply_link+'">APPLY</a></p>'
                currentOpening += '</div>'
            });
            currentOpening += '</div>'
            currentOpening += '</div>'
            $('#Current-opening').append(currentOpening);
        });

});