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
        $("#spin").click(function() {
            $('.image').toggleClass('image-active');
            window.setTimeout(function() {
                resultDisplay(selectedTeamMembers);
            }, 4000);
        });
    }

    function resultDisplay(selectedTeamMembers) {
        var displayResult = '';
        var item = selectedTeamMembers[Math.floor(Math.random() * selectedTeamMembers.length)];
        displayResult += '<div class="callout">'
        displayResult += '<div class="callout-header">Congratulations</div>'
        displayResult += '<span class="closebtn" onclick="this.parentElement.style.display=`none`;location.reload();">×</span>'
        displayResult += '<div class="callout-container">'
        displayResult += '<p id="result"></p>'
        displayResult += '<p>You got selected!!</p>'
        displayResult += ' </div>'
        displayResult += '</div>'
        $('#winner-result').append(displayResult);
        $("#result").html(item);
    }
});