var teams = [];
var participant = '';

var team = '';
var participantList = [];

var count = 0;
var selectedCount = 0;

var totalTeam = '';
var selectedTeamMembers = [];

var totalSelectedTeamMembers = [];


$(function() {
    $.getJSON("/office-activity/team.json",

        function(data) {
            $("#viewScoreBoardDetails").hide();
            $("#hideScoreBoard").hide();

            $.each(data, function(key, value) {
                if (value.active) {
                    team += '<option>' + value.name + '</option>'
                    count += 1
                }
            });

            $("#team-container").click(function() {
                teams = $("#team-container option").filter(":selected").text();
            });

            $("#selectedListParticipants").click(function() {
                teams = $("#selectedListParticipants option").filter(":selected").text();
            });



            $("body").click(function(event) {
                let target = event.target.id;
                switch (target) {
                    case "btnAdd":
                        add();
                        break;
                    case "moveRight":
                        moveRight(teams);
                        break;
                    case "btnDelete":
                        deleteParticipant();
                        break;
                    case "btnGenerate":
                        generateTeam();
                        break;
                    case "viewScoreBoard":
                        $("#viewScoreBoard").hide();
                        $("#hideScoreBoard").show();
                        $("#viewScoreBoardDetails").show();
                        break;
                    case "hideScoreBoard":
                        $("#viewScoreBoard").show();
                        $("#hideScoreBoard").hide();
                        $("#viewScoreBoardDetails").hide();
                }
            });

            function add() {
                participant = $("#participant").val();
                if (participant != "") {
                    $("#team-container").prepend('<option>' + participant + '</option>')
                    $("#participant").val('');
                    count += 1

                }
            }

            function moveRight(teams) {
                if (teams != '') {
                    participantList = '<option>' + teams + '</option>'
                    selectedCount += 1;
                }

                $('#selectedListParticipants').append(participantList);

            }

            function deleteParticipant() {
                $("#selectedListParticipants option").filter(":selected").remove();
                selectedCount -= 1;
            }

            function generateTeam() {
                // selectedCount =1;
                // switch (selectedCount) {
                //     case 1:
                //         alert(selectedCount);
                //         break;
                // }

                var generateCount = parseInt($("#generateTeam option").filter(":selected").text(),10);

                switch(generateCount){
                    case 1:
                        generateCount /=selectedCount;
                        alert(generateCount);
                        break;
                    case 2:
                        alert(generateCount);
                        break;
                    case 3:
                        alert(generateCount);
                        break;
                }


            }

            totalTeam += '<label for="exampleFormControlSelect2">List of participants (' +
                count + ')</label>'
            selectedTeamMembers = '<label for="exampleFormControlSelect2">Selected participants (' + selectedCount + ')</label>'

            $('#selectedTeamMembers').append(selectedTeamMembers);
            $('#team-container').append(team);
            $('#totalTeamMembers').append(totalTeam);

        });

});