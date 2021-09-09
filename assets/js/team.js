$(document).ready(function() {

    $.getJSON("/team/team.json",
        function(data) {
            var team = '';
            $.each(data, function(key, value) {
                team += '<div class="col-lg-4 col-md-6 col-sm-12 mb-3 text-center" data-aos="fade-up">'
                team += '<img src="' + value.image + '" alt="Avatar" class="img-fluid">'
                team += '<div class="overlay' + value.id + '">'
                team += '<p class="text-color-dark mt-2">' + value.name + '</p>'
                team += '<p class="text-color-cyan">' + value.position_name + '</p>'
                if (value.linkedin_url != "") {
                    team += '<p><a class="btn btn-dark btn-social mx-2" target="_blank" href="' + value.linkedin_url + '"><i class="fab fa-linkedin-in"></i></a></p>'
                }
                team += '</div>'
                team += '</div>'
            });
            $('#team-container').append(team);
        });

    $.getJSON("/team/alumni.json",
        function(data) {
            var alumni = '';
            $.each(data, function(key, value) {
                alumni += '<div class="col-lg-4 col-md-6 col-sm-12 mb-3 text-center" data-aos="fade-up">'
                alumni += '<img src="' + value.image + '" alt="Avatar" class="img-fluid">'
                alumni += '<div class="overlay' + value.id + '">'
                alumni += '<p class="text-color-dark mt-2">' + value.name + '</p>'
                alumni += '<p class="text-color-cyan">' + value.position_name + '</p>'
                if (value.linkedin_url != "") {
                    alumni += '<p><a class="btn btn-dark btn-social mx-2" target="_blank" href="' + value.linkedin_url + '"><i class="fab fa-linkedin-in"></i></a></p>'
                }
                alumni += '</div>'
                alumni += '</div>'
            });
            $('#alumni-container').append(alumni);
        });


});