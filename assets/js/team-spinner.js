var selectedTeamMembers = [];

var count = 0;

$(function() {
    $.getJSON("/office-activity/team.json",

        function(data) {
            $.each(data, function(key, value) {
                if (value.active) {
                    selectedTeamMembers.push(value.name);
                }
            });
            result(selectedTeamMembers)
        });

    function result(selectedTeamMembers) {
        var displayResult = '';
        $("#spin").click(function() {
            var item = selectedTeamMembers[Math.floor(Math.random() * selectedTeamMembers.length)];
            displayResult += '<div class="callout">'
            displayResult += '<div class="callout-header">Congratulations</div>'
            displayResult += '<span class="closebtn" onclick="this.parentElement.style.display=`none`;location.reload();">×</span>'
            displayResult += '<div class="callout-container">'
            displayResult += '<p id="result"></p>'
            displayResult += '<p>You got selected!!</p>'
            displayResult += ' </div>'
            displayResult += '</div>'
            // displayResult += '<div class="alert alert-success" role="alert" id="result">'
            // displayResult += '</div>'
            $('#winner-result').append(displayResult);
            $("#result").html(item);
        });

    }
});