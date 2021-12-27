$(document).ready(function() {


    $.getJSON("/assets/data/career.json",
        function(data) {

            var career = ''
            $.each(data, function(key, value) {

                career += value.name
                career += value.desc
                career += value.url

            });
            $('#career-content').append(career);
        });
});