$(document).ready(function() {


    $.getJSON("/assets/data/contact.json",
        function(data) {

            $('#contact-content').append(data[0].desc);
        });
});