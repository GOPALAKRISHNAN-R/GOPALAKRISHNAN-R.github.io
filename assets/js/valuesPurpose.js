$(document).ready(function() {


    $.getJSON("/assets/data/values-purpose.json",
        function(data) {

            // var value = ''
            // $.each(data, function(key, value) {

            //     value += value.desc

            // });
            $('#value-content').append(data[0].desc);
        });
});