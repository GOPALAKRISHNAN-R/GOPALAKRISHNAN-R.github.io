$(document).ready(function() {


    $.getJSON("/assets/data/lifeStyle.json",
        function(data) {

            var lifeStyle = ''
            $.each(data, function(key, value) {

                lifeStyle += value.name
                lifeStyle += value.desc
                lifeStyle += value.url

            });
            $('#lifestyle-content').append(lifeStyle);
        });
});