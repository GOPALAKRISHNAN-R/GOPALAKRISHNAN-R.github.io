$(document).ready(function() {


    $.getJSON("/assets/data/education.json",
        function(data) {

            var education = ''
            $.each(data, function(key, value) {

                education += value.name
                education += value.desc
                education += value.url

            });
            $('#education-content').append(education);
        });
});