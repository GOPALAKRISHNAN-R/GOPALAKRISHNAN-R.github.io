$(document).ready(function() {


    $.getJSON("/assets/data/footer.json",
        function(data) {

            $('#footer-content').append(data[0].desc);
        });
});