$(document).ready(function() {

    $.getJSON("/office-activity/office-activity.json",

        function(data) {
            var activity = '';
            $.each(data, function(key, value) {
                activity += '<div class="col-lg-4 col-md-6 col-sm-12">'
                activity += '<div class="mt-5 shadow p-3 mb-5 bg-white rounded zoom mr-3 text-center">'
                activity += '<span class="fa-stack fa-4x">'
                if (value.activity == "Expense Claim") {
                    activity += '<i class="fas fa-square fa-stack-2x text-color-cyan"></i>'
                    activity += '<i class="fas fa-file-invoice fa-stack-1x fa-inverse"></i>'
                } else if (value.activity == "Team Finder") {
                    activity += '<i class="fas fa-square fa-stack-2x text-color-cyan"></i>'
                    activity += '<i class="fas fa-users fa-stack-1x fa-inverse"></i>'
                } else if (value.activity == "Spinner") {
                    activity += '<i class="fas fa-square fa-stack-2x text-color-cyan"></i>'
                    activity += '<i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>'
                }
                activity += '</span><br><br>'
                activity += '<h4 class="text-center"><a href="' + value.link + '">'
                activity += '<span class="text-color-dark text-uppercase">' + value.activity + '</span></a>' + '</h4>'
                activity += '<br>'
                activity += '</div>'
                activity += '</div>'
            });
            $('#activity-container').append(activity);
        });
});