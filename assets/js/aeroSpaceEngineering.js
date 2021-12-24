/*
    AeroSpace Engineering js Developed on 20/12/2021.
*/

$(document).ready(function() {

    $.getJSON("/assets/data/aeroSpaceEngineering.json",

        function(data) {
            var description = data[0].desc;
            $('#aerospace').append(description);
        });
});