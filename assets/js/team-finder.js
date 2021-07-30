$(document).ready(function() {


    $.getJSON("/office-activity/team.json",

        function(data) {

            let teams = [];
            let participant = '';

            var team = '';
            var participantList = '';

            var count = 0;
            let selectedCount = 0;

            var totalTeam = '';
            var selectedTeamMembers = '';

            $("#btnAdd").click(function() {
                participant = $("#participant").val();
                if (participant != "") {
                    $("#team-container").prepend('<option>' + participant + '</option>')
                    $("#participant").val('');
                }
            });

            $.each(data, function(key, value) {
                if (value.active) {
                    team += '<option>' + value.name + '</option>'
                    count += 1
                }
            });

            $("#team-container").click(function() {
                teams = $("#team-container option").filter(":selected").text();
            });

            $("#moveRight").click(function() {
                participantList = '<option>' + teams + '</option>'
                selectedCount += 1;
                $('#selectedListParticipants').append(participantList);
            });

            $("#selectedListParticipants").click(function() {
                teams = $("#selectedListParticipants option").filter(":selected").text();
            });

            $("#btnDelete").click(function() {
                $("#selectedListParticipants option").filter(":selected").remove();
            });

            totalTeam += '<label for="exampleFormControlSelect2">Select the participants (' +
                count + ')</label>'

            $('#team-container').append(team);
            $('#totalTeamMembers').append(totalTeam);
            $('#selectedTeamMembers').append(selectedTeamMembers);

        });

});