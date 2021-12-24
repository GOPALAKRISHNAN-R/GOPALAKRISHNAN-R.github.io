$(document).ready(function() {

    $.getJSON("/assets/data/map.json",
        function(data) {
            $('#map-content').append(data[0].desc);
        });
});