$(document).ready(function() {
    $.getJSON("/department/engineering/aeronautical-engineering/failure-modes-of-sandwich-construction/failure-modes-of-sandwich-construction.json",

        function(data) {
            var topic = '';
            var topic_head='';
            topic_head += '<h3 class="text-uppercase text-center">' + data[0].topic + '</h3>'
            topic_head += '<hr class="divider">'
            topic_head += '<p class="text-center">' + data[0].def + '</p>'
$('#topic-details-head').append(topic_head);

            $.each(data, function(key, value) {


                topic += '<div class="col-lg-4 col-md-6 col-sm-6 ">'
                topic += '<div class="mt-5 ">'
                topic += '<h4 class="text-muted mt-2">' + value.heading + '</h4>'
                topic += '<hr class="divider ml-0">'
                topic += '<p class="mt-2">' + value.notes + '</p>'
                topic += '</div>'
                topic += '</div>'



            });

            $('#topic-details').append(topic);

        });
});